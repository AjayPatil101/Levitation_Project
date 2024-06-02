import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import './loginSignUp.css'; // Import CSS file for styling

const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const saveUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = { name, email, password };

    try {
      const response = await UserService.signup(user);
      console.log(response); // Debugging: Log the response to ensure it's being called
      navigate('/signin');
    } catch (error) {
      console.log('Error during signup:', error);
    }
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden={true} />

      <div className="signup">
        <form onSubmit={saveUser}>
          <label htmlFor="chk" aria-hidden={true}>
            Sign up
          </label>
          <input
            type="text"
            name="txt"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
