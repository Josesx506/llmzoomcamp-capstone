'use client';

import styles from "./page.module.css";
import Link from "next/link";
import { WordCloud } from "@isoterik/react-word-cloud";

export default function Home() {
  const words = [{'text': 'Amedeo Avogadro', 'value': 58}, {'text': 'Turtle', 'value': 55},
    {'text': 'Alessandro Volta', 'value': 54}, {'text': 'Michael Faraday', 'value': 51},
    {'text': 'Charles-augustin De Coulomb', 'value': 48}, {'text': 'Henri Becquerel', 'value': 48},
    {'text': 'Otter', 'value': 47}, {'text': 'James Monroe', 'value': 38},
    {'text': 'Singapore', 'value': 38}, {'text': 'Uruguay', 'value': 37},
    {'text': 'Trumpet', 'value': 36}, {'text': 'Anders Celsius', 'value': 35},
    {'text': 'Liechtenstein', 'value': 34}, {'text': 'Canada', 'value': 34},
    {'text': 'Penguin', 'value': 32}, {'text': 'Leopard', 'value': 32},
    {'text': 'Polar Bear', 'value': 31}, {'text': 'Nikola Tesla', 'value': 30},
    {'text': 'Beetle', 'value': 30}, {'text': 'Romania', 'value': 29},
    {'text': 'Woodrow Wilson', 'value': 29}, {'text': 'Millard Fillmore', 'value': 29},
    {'text': 'Kangaroo', 'value': 29}, {'text': 'John Adams', 'value': 29},
    {'text': 'Violin', 'value': 28}, {'text': 'Gerald Ford', 'value': 28},
    {'text': 'San Francisco', 'value': 27}, {'text': 'Calvin Coolidge', 'value': 27},
    {'text': 'Flute', 'value': 26}, {'text': 'Jakarta', 'value': 26},
    {'text': 'Ant', 'value': 26}, {'text': 'Elephant', 'value': 26},
    {'text': 'Finland', 'value': 26}, {'text': 'Duck', 'value': 26},
    {'text': 'Cymbal', 'value': 26}, {'text': 'Isaac Newton', 'value': 26},
    {'text': 'Qatar', 'value': 25}, {'text': 'Grover Cleveland', 'value': 25},
    {'text': 'Blaise Pascal', 'value': 25}, {'text': 'Arabic Language', 'value': 24},
    {'text': 'Indonesia', 'value': 24}, {'text': 'James Watt', 'value': 24},
    {'text': 'Malay Language', 'value': 24}, {'text': 'Chinese Language', 'value': 23},
    {'text': 'Ulysses S. Grant', 'value': 23}, {'text': 'Drum', 'value': 23},
    {'text': 'Korean Language', 'value': 23}, {'text': 'Ottawa', 'value': 19},
    {'text': 'Theodore Roosevelt', 'value': 18}, {'text': 'Kuala Lumpur', 'value': 18},
    {'text': 'Xylophone', 'value': 18}, {'text': 'Berlin', 'value': 18},
    {'text': 'Cello', 'value': 18}, {'text': 'Gray Wolf', 'value': 18},
    {'text': 'Abraham Lincoln', 'value': 18}, {'text': 'Egypt', 'value': 18},
    {'text': 'Swan', 'value': 18}, {'text': 'Guitar', 'value': 18}, {'text': 'Giant Panda', 'value': 18},
    {'text': 'Saint Petersburg', 'value': 17}, {'text': 'Ghana', 'value': 17},
    {'text': 'Piano', 'value': 17}, {'text': 'Vietnamese Language', 'value': 17},
    {'text': 'Turkish Language', 'value': 17}, {'text': 'Nairobi', 'value': 17},
    {'text': 'Lyre', 'value': 16}, {'text': 'Octopus', 'value': 16},
    {'text': 'Lima', 'value': 15}, {'text': 'Portuguese Language', 'value': 15},
    {'text': 'Swahili Language', 'value': 13}, {'text': 'German Language', 'value': 13},
    {'text': 'Santiago', 'value': 12}, {'text': 'English Language', 'value': 12},
    {'text': 'Beijing', 'value': 11}, {'text': 'Norman Rockwell', 'value': 10},
    {'text': 'French Language', 'value': 10}, {'text': 'Pablo Picasso', 'value': 10},
    {'text': 'Leonardo Da Vinci', 'value': 10}, {'text': 'Taipei', 'value': 9},
    {'text': 'Tiger', 'value': 9}, {'text': 'Zebra', 'value': 9},
    {'text': 'Fox', 'value': 9}, {'text': 'Montreal', 'value': 9},
    {'text': 'Antwerp', 'value': 9}, {'text': 'Melbourne', 'value': 9},
    {'text': 'Bee', 'value': 9}, {'text': 'Lobster', 'value': 9},
    {'text': 'Butterfly', 'value': 9}, {'text': 'Jackson Pollock', 'value': 9},
    {'text': 'Giraffe', 'value': 9}, {'text': 'Cougar', 'value': 9},
    {'text': 'Finnish Language', 'value': 9}, {'text': 'Eel', 'value': 9},
    {'text': 'Dhaka', 'value': 8}, {'text': 'Copenhagen', 'value': 8},
    {'text': 'Pierre-auguste Renoir', 'value': 8}, {'text': 'Nassau', 'value': 8},
    {'text': 'Swedish Language', 'value': 8}, {'text': 'London', 'value': 8},
    {'text': 'Koala', 'value': 8}, {'text': 'Vincent Van Gogh', 'value': 7},
    {'text': 'Michelangelo', 'value': 7}, {'text': 'Dragonfly', 'value': 3}, 
    {'text': 'Japanese Language', 'value': 3}]
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Welcome to the RAG chat</h3>
        <div>Each conversation has a rate limit of 10 requests per minute.</div>
        <div className={styles.chatBtn}><Link href={"/chat"}>Start Chat</Link></div>
      </main>
      <WordCloud words={words} width={250} height={150} padding={0.1} rotate={()=>(0)} />
    </div>
  );
}
