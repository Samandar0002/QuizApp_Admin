import React, { createContext, useContext, useEffect, useState } from 'react';

interface Quiz {
  courseId: number;
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
  };
  correctAnswer: string;
  course?: string;
}

interface QuizContextType {
  quizzes: Quiz[];
  addNewQuiz: (newQuiz: Quiz) => void;
  deleteQuiz: (id: number) => void;
  saveQuiz?: (id: number, question: string, options: Quiz['options'], correctAnswer: string) => void;
}

export const QuizContext = createContext<QuizContextType | undefined>(undefined);

const QUIZZES_STORAGE_KEY = 'quizzes';

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quizzes, setQuizzes] = useState<Quiz[]>(() => {
    const storedQuizzes = localStorage.getItem(QUIZZES_STORAGE_KEY);

    return storedQuizzes ? JSON.parse(storedQuizzes) : [];
  });

  useEffect(() => {
    localStorage.setItem(QUIZZES_STORAGE_KEY, JSON.stringify(quizzes));
  }, [quizzes]);

  const addNewQuiz = (newQuiz: Quiz) => {
    setQuizzes(prevQuizzes => {
      const updatedQuizzes = [...prevQuizzes, { ...newQuiz, id: prevQuizzes.length + 1 }];

      localStorage.setItem(QUIZZES_STORAGE_KEY, JSON.stringify(updatedQuizzes));
      return updatedQuizzes;
    });
  };

  const deleteQuiz = (id: number) => {
    setQuizzes(prevQuizzes => {
      const updatedQuizzes = prevQuizzes.filter(quiz => quiz.id !== id);

      localStorage.setItem(QUIZZES_STORAGE_KEY, JSON.stringify(updatedQuizzes));
      return updatedQuizzes;
    });
  };

  const saveQuiz = (id: number, question: string, options: Quiz['options'], correctAnswer: string) => {
    setQuizzes(quizzes.map(q => q.id === id ? { ...q, question, options, correctAnswer } : q));
  };

  return (
    <QuizContext.Provider value={{ quizzes, addNewQuiz, deleteQuiz, saveQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
