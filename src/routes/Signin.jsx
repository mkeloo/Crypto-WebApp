import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(error);
    setError('');
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-gray-700 border-input rounded-2xl"
                type="email"
                placeholder="Email"
              />
              <AiOutlineMail
                className="absolute right-2 top-3 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-700 border-input rounded-2xl"
                type="password"
                placeholder="Password"
              />
              <AiFillLock
                className="absolute right-2 top-3 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
            Sign in
          </button>
        </form>
        <p className="my-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-accent">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
