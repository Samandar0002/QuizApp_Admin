/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        navigate('/dashboard')
    }

return(
  <div className="min-h-screen flex items-center justify-center bg-[#71e392]">
    <div className="w-full h-[30rem] max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md"> 
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-900">CRUD OPERATIONS</h1>
        <p className="mt-1 text-sm text-gray-600">Enter your credentials to access your account</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6" >
        <div>
          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-orange-500 focus:border-green-500 sm:text-sm" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 ">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-orange-500 focus:border-green-500 sm:text-sm" placeholder="Enter your password" />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a href="#" className="font-medium text-orange-600 hover:text-orange-500">Forgot your password?</a>
          </div>
        </div>
        <div className='  p-2 '>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border  border-transparent text-sm font-medium rounded-md text-white bg-[#00B533] hover:bg-[#1aff5b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
);
}

export default SignIn;
