from openai import OpenAI
from env import OPENAI_API_KEY

# Create an open ai client. Ensure the account is funded
oaiclient = OpenAI(api_key = OPENAI_API_KEY)
