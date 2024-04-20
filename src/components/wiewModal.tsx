import React from 'react';

import { Quiz } from 'modules/types'; 

interface ViewModalProps {
  quiz: Quiz;
  onClose: () => void;
}

const ViewModal: React.FC<ViewModalProps> = ({ quiz, onClose }) => (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative mx-auto p-5 border w-[38rem] max-w-4xl shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl leading-6 font-semibold text-gray-900">Quiz Details</h3>
          <div className="mt-4 px-7 py-5">
            <p className="text-lg text-gray-500">Question: {quiz.question}</p>
            <p className="text-lg text-gray-500">
              Options: A: {quiz.options.A}, B: {quiz.options.B}, C: {quiz.options.C}
            </p>
            <p className="text-lg text-gray-500">Correct Answer: {quiz.correctAnswer}</p>
          </div>
          <div className="flex justify-center px-4 py-4">
            <button onClick={onClose} className="px-6 py-2 w-[11rem] bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

export default ViewModal;
