/* eslint-disable no-unneeded-ternary */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-alert */
import React, { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useQuiz } from 'modules/quizContext';

import EditModal from 'components/editModal';

import { DeleteIcon, EditIcon, ViewIcon } from 'assets/images';

interface Quiz {
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

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const { quizzes, deleteQuiz, saveQuiz } = useQuiz();
  const [selectedCourseId, setSelectedCourseId] = useState<number | 'all'>('all');
  const [courses, setCourses] = useState<{ id: number; name: string; }[]>([
    
    { id: 1, name: 'C++' },
    { id: 2, name: 'C#' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'Java' },
    { id: 5, name: 'JavaScript' },
    { id: 6, name: 'Flutter' },
   
  ]);

  const courseColors: { [key: string]: string } = {
    'C++': 'bg-blue-200',
    'C#': 'bg-green-200',
    Python: 'bg-yellow-200',
    Java: 'bg-red-200',
    JavaScript: 'bg-purple-200',
    Flutter: 'bg-pink-200',
  };
  
  const handleSaveQuiz = (id: number, question: string, options: { A: string; B: string; C: string; }, correctAnswer: string) => {
    if(saveQuiz) {
      saveQuiz(id, question, options, correctAnswer);
      navigate('/dashboard'); 
    }
  };
  const filteredQuizzes = quizzes.filter(quiz =>
    selectedCourseId === 'all' || quiz.courseId === selectedCourseId
  );

  useEffect(() => {
    
  }, []);

  const addQuiz = () => {
    navigate('/add-quiz');
  };

  const viewQuiz = (id: number): void => {
    const quiz = quizzes.find(q => q.id === id);
    
    if (!quiz) return;
    const options = `A: ${quiz.options.A}\nB: ${quiz.options.B}\nC: ${quiz.options.C}`;

    alert(`Question: ${quiz.question}\nOptions:\n${options}\nCorrect Answer: ${quiz.correctAnswer}`);
  };

   const editQuiz = (id: number): void => {
    const quiz = quizzes.find(q => q.id === id);

    if (quiz) {
      setCurrentQuiz(quiz);
      setIsEditing(true);
    }
  };

  const closeModal = () => {
    setIsEditing(false);
    setCurrentQuiz(null);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 min-h-screen p-5">
        {/* Profile */}
        <div className="mb-5">
          <img src='https://w7.pngwing.com/pngs/306/70/png-transparent-computer-icons-management-admin-silhouette-black-and-white-neck-thumbnail.png' alt="Profile" className="rounded-full w-16 h-16 mb-3" />
          <p className="text-white">Admin</p>
          <p className="text-gray-400 text-sm">Admin Panel</p>
        </div>
        {/* Navigation */}
        <nav className="text-white text-sm">
          <Link to="/courses" className="block py-2.5 px-4 rounded hover:bg-gray-700">Courses</Link>
          <Link to="/log-out" className="block py-2.5 px-4 rounded hover:bg-gray-700">Logout</Link>
        </nav>
      </div>
      {/* Content */}
      <div className="w-4/5 p-10">
        <h1 className="text-2xl font-bold mb-8">Quiz List</h1>
        <button onClick={addQuiz} className="mb-6 bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500">ADD NEW QUIZ</button>
        <select
              className="py-2 px-4 rounded border border-gray-300"
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            >
              <option value="all">All Courses</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
        {/* Quizzes Table */}
        {isEditing && currentQuiz && (
          <EditModal quiz={currentQuiz} onClose={closeModal} onSave={handleSaveQuiz} />
        )}
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="p-3 text-left">Question</th>
                <th className="p-3 text-left">Options</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((quiz) => (
                <tr key={quiz.id} className="hover:bg-gray-100">
                  <td className="p-3">{quiz.question}</td>
                  <td className="p-3">A: {quiz.options.A}, B: {quiz.options.B}, C: {quiz.options.C}</td>
                  <td className="p-3">
            <span className={`${courseColors[quiz.course ?? ''] ?? 'bg-gray-200'} px-2 py-1 rounded-full`}>
              {quiz.course}
            </span>
          </td>
                  <td className="p-3 flex justify-start space-x-4">
                    <button onClick={() => viewQuiz(quiz.id)} className="p-1 rounded hover:bg-green-300" aria-label="View quiz"><ViewIcon className="h-5 w-5 text-yellow-600"/></button>
                    <button onClick={() => editQuiz(quiz.id)} className="p-1 rounded hover:bg-yellow-200" aria-label="Edit quiz"><EditIcon className="h-5 w-5 text-yellow-600"/></button>
                    <button onClick={() => deleteQuiz(quiz.id)} className="p-1 rounded hover:bg-red-300" aria-label="Delete quiz"><DeleteIcon className="h-5 w-5 text-yellow-600"/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
