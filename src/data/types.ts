export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Character {
  id: string;
  name: string;
  age: number;
  role: string;
  image: string;
  alt: string;
}

export interface CharacterStatement {
  characterId: string;
  statement: string;
}

export interface Information {
  title: string;
  description: string;
}

export interface Solution {
  culprit: string;
  explanation: string;
}

export interface Case {
  id: string;
  title: string;
  difficulty: Difficulty;
  teaser?: string;
  victim: string;
  location: string;
  story: string;
  suspects: CharacterStatement[];
  witnesses?: CharacterStatement[];
  information: Information[];
  solution: Solution;
}
