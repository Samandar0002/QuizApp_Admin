import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { QuizProvider } from 'modules/quizContext';

import Pageless from './routing/route'; 

import 'assets/styles/tailwind.css'; 

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <QuizProvider>
      <Pageless />
    </QuizProvider>
  </BrowserRouter>
</React.StrictMode>
  
);
