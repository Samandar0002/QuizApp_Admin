/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

interface Quiz {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
  };
  correctAnswer: string;
}

interface EditModalProps {
  quiz: Quiz;
  onClose: () => void;
  onSave: (id: number, question: string, options: { A: string; B: string; C: string; }, correctAnswer: string) => void;
}

const EditModal: React.FC<EditModalProps> = ({ quiz, onClose, onSave }) => {
  const [newQuestion, setNewQuestion] = useState(quiz.question);
  const [newOptions, setNewOptions] = useState(quiz.options);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState(quiz.correctAnswer);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      {/* Konteyner o'lchamlari va markazlash uchun yangilangan stil */}
      <div className="bg-white p-5 rounded max-w-3xl w-full mx-4 my-8 overflow-auto">
        <h2 className="text-lg font-bold">Edit Quiz</h2>
        <div className="my-2">
          <label className="block text-sm font-medium text-gray-700">Question</label>
          <input
            className="border p-1 w-full"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Question"
          />
        </div>
        {Object.entries(newOptions).map(([key, value]) => (
          <div className="my-2" key={key}>
            <label className="block text-sm font-medium text-gray-700">Option {key}</label>
            <input
              className="border p-1 w-full"
              value={value}
              onChange={(e) => setNewOptions({ ...newOptions, [key]: e.target.value })}
              placeholder={`Option ${key}`}
            />
          </div>
        ))}
        <div className="my-2">
          <label className="block text-sm font-medium text-gray-700">Correct Answer</label>
          <input
            className="border p-1 w-full"
            value={newCorrectAnswer}
            onChange={(e) => setNewCorrectAnswer(e.target.value)}
            placeholder="Correct Answer (A, B, C)"
          />
        </div>
        <div className="flex justify-between mt-4">
        <button onClick={() => onSave(quiz.id, newQuestion, newOptions, newCorrectAnswer)} className="bg-blue-500 text-white p-2 rounded">Save</button>
          <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
