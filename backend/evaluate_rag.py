import numpy as np
import pandas as pd
from sentence_transformers import SentenceTransformer
from tqdm import tqdm
from utils import rag, evaluate_relevance


def compute_cosine_similarity(record,encoder,):
    """
    Given a dataframe record compute the cosine similarity between the 
    llm answer and the ground truth answer
    """
    answer_orig = record["Answer"]
    answer_llm = record["Answer_llm"]
    
    v_llm = encoder.encode(answer_llm)
    v_orig = encoder.encode(answer_orig)
    
    return v_llm.dot(v_orig)

def evaluate_rag_workflow(documents,model,encoder):
    """
    Offline rag evaluation using cosine similarity between answer vectors
    """
    similarity = []
    for doc in tqdm(documents):
        doc["Answer_llm"],_,_ = rag(doc["Question"],model)
        cos_sim = compute_cosine_similarity(doc,encoder)
        similarity.append(cos_sim)
    
    similarity = np.array(similarity)
    return similarity

def evaluate_llm_as_a_judge(documents,model):
    """
    Offline rag evaluation using llm-as-a-judge
    """
    results = []
    for doc in tqdm(documents):
        response,_,_ = rag(doc["Question"],[],model=model)
        relevance,_,_ = evaluate_relevance(doc["Question"],response,model=model)
        results.append(relevance)
    data = pd.DataFrame({"relevance":results})
    return data


if __name__=="__main__":
    mode = "llm-as-a-judge"
    model = "gpt-4o-mini" # "gemma3:1b" # 
    encoder_model_name = "multi-qa-MiniLM-L6-cos-v1"
    encoder_model = SentenceTransformer(encoder_model_name)

    # Compute offline eval
    df = pd.read_csv("mini_wiki.csv")
    df = df.sample(200, random_state=42)
    documents = df.to_dict(orient="records")
    if mode == "cosine similarity":
        similarity = evaluate_rag_workflow(documents,model,encoder_model)
        df["cssm"] = similarity
        mean_cos_sim = similarity.mean()

        df.to_csv(f"{model}_offline_rag_cos_sim.csv",index=False)

        print(f"The mean cosine similarity for {model} is {mean_cos_sim:.3f}")
    else:
        relevance = evaluate_llm_as_a_judge(documents, model)
        print(relevance["relevance"].value_counts().reset_index())