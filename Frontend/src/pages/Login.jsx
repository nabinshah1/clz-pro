import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Redirect if token exists and user is logged in
  useEffect(() => {
    if (token && currentState === 'Login') {
      navigate('/'); // Redirect to home page after login
    }
  }, [token, currentState, navigate]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
        });
        console.log(response.data);

        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          toast.success('Registration successful!');
          navigate('/login'); // Navigate to login after successful registration
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {
          email,
          password,
        });
        console.log(response.data);

        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          setToken(response.data.token);
          toast.success('Login successful!');
          navigate('/'); // Navigate to home page after login
        } else {
          toast.error('Invalid credentials! Please check your email and password.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message); // Display specific error message from backend
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-96 p-6 bg-white shadow-lg rounded-lg"
      >
        {/* Title Section */}
        <div className="text-center mb-6">
          <p className="text-3xl font-semibold text-gray-800">{currentState}</p>
          <hr className="border-t-2 border-gray-300 w-1/4 mx-auto mt-2" />
        </div>

        {/* Conditional Name Input */}
        {currentState === 'Sign Up' && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            placeholder="Name"
            required
          />
        )}

        {/* Email and Password Inputs */}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
          placeholder="Password"
          required
        />

        {/* Forgot Password Link */}
        {currentState === 'Login' && (
          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer text-blue-500">Forgot your password?</p>
          </div>
        )}

        {/* Toggle Login/Sign-Up State */}
        <div className="text-center mt-4">
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="text-blue-500 cursor-pointer"
            >
              Create an account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="text-blue-500 cursor-pointer"
            >
              Login here
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md mt-6 hover:bg-blue-600 transition duration-300"
        >
          {currentState === 'Login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
