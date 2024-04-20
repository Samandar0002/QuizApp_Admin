export type Quiz = {
  id: number; 
  question: string;
  options: {
      A: string;
      B: string;
      C: string;
  };
  correctAnswer: string;
  course?: string;
};