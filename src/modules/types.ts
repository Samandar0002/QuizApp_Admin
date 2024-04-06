export type Quiz = {
    correctAnswer(correctAnswer: any): [any, any];
    options(options: any): [any, any];
    question: string;
    answer: string;
    id?: number;
  };