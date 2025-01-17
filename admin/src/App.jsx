import React, { useState } from 'react';
import Navbar from './Components/Navbar';  // Corrected "COmponents" to "Components"
import Sidebar from './Components/Sidebar'; // Corrected "COmponents" to "Components"
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add';
import List from './Pages/List';
import Orders from './Pages/Orders';
import Login from './COmponents/Login';  // Corrected "COmponents" to "Components"
import { ToastContainer } from 'react-toastify';  // Fixed the typo in ToastContainer import
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');

useEffect(() => {
  if (token) {
    localStorage.setItem('token', token);
  }
}, [token]);


  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer/>
      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken ={setToken}/>
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/add" element={<Add token ={token} />} />
                <Route path="/list" element={<List token ={token} />} />
                <Route path="/order" element={<Orders token ={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
      <ToastContainer />  {/* Add ToastContainer here to handle toast notifications */}
    </div>
  );
};

export default App;
