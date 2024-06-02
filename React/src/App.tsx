import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/welcome';  // Corrected import
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/welcome" element={<Welcome />} />  
      </Routes>
    </Router>
  );
};

export default App;
