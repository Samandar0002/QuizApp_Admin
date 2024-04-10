/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuiz } from 'modules/quizContext';

interface Option {
  A: string;
  B: string;
  C: string;
  [key: string]: string;
}


const AddQuiz: React.FC = () => {
    const { addNewQuiz } = useQuiz();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<Option>({ A: '', B: '', C: '' });
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [course, setCourse] = useState('');

  const navigate = useNavigate();

  const updateOptions = (optionKey: keyof Option, value: string) => {
    setOptions({ ...options, [optionKey]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNewQuiz({
      question, options, correctAnswer, course,
      id: 0,
      courseId: 0
    });

    setQuestion('');
    setOptions({ A: '', B: '', C: '' });
    setCorrectAnswer('');
    setCourse('');
    navigate('/dashboard'); 
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Add New Quiz</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="question" className="block text-gray-700 text-sm font-bold mb-2">
            Question
          </label>
          <input
            type="text"
            id="question"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Quiz Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        {Object.keys(options).map((key) => (
          <div className="mb-4" key={key}>
            <label htmlFor={`option-${key}`} className="block text-gray-700 text-sm font-bold mb-2">
              Option {key}
            </label>
            <input
              type="text"
              id={`option-${key}`}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={`Option ${key}`}
              value={options[key]}
              onChange={(e) => updateOptions(key as keyof Option, e.target.value)}
              required
            />
          </div>
        ))}
        <div className="mb-6">
          <label htmlFor="correctAnswer" className="block text-gray-700 text-sm font-bold mb-2">
            Correct Answer
          </label>
          <select
            id="correctAnswer"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          >
            <option value="">Select the correct answer</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="course" className="block text-gray-700 text-sm font-bold mb-2">
            Course
          </label>
          <select
            id="course"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select a course</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="frontend">JavaScript</option>
            <option value="Flutter">Flutter</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuiz;
