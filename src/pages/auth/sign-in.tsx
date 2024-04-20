/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SignInSvg } from '../../assets/images/index';

import  Logo  from '../../assets/images/img/Logo.png';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate('/dashboard');
};

return (
      <div className="min-h-screen flex">
          {/* img Side */}
          <div className="w-1/2 flex items-center justify-center p-10 relative">
        <SignInSvg className="absolute inset-0 w-full h-full" />
      </div>

      <div className="bg-gray-300 w-px"> </div>

          {/* Form Side */}
          <div className="w-1/2 flex items-center justify-center">
              <div className="w-full max-w-md p-8 space-y-6 rounded-lg ">
              <img src={Logo} alt="Logo" className="mx-auto h-[8rem] w-auto" />
                  <div className="flex flex-col items-center">
                 
                      <h1 className="text-4xl font-bold text-gray-900">Sign In</h1>
                      <p className="mt-1 text-sm text-gray-600">Please enter your credentials to proceed.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div>
                          <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-orange-500 focus:border-[#00B533] sm:text-sm" placeholder="Enter your email" />
                      </div>
                      <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                          <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-orange-500 focus:border-[#00B533] sm:text-sm" placeholder="Enter your password" />
                      </div>
                      <div className="flex items-center justify-between">
                          <div className="text-sm">
                              <a href="#" className="font-medium text-orange-600 hover:text-orange-500">Forgot Password?</a>
                          </div>
                      </div>
                      <div>
                          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00B533] hover:bg-[#60f089] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                              Sign In
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default SignIn;
