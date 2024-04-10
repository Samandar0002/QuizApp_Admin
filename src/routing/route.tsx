import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { QuizProvider } from 'modules/quizContext';

import AddQuiz from '../pages/addQuiz';
import AdminPanel from '../pages/adminPage';
import SignIn from '../pages/auth/sign-in'; 
import Course from '../pages/course';

const Pageless = () => (
  <QuizProvider>
    <Routes>
      <Route path="/" element={<SignIn />} /> 
      <Route path="/dashboard" element={<AdminPanel />} />
      <Route path="/add-quiz" element={<AddQuiz />} />
      <Route path="/courses" element={<Course />} />
    </Routes>
  </QuizProvider>
);

export default Pageless;
