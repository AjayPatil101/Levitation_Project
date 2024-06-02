import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
import './loginSignUp.css'; // Import CSS file for styling

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const saveUser = async (e: React.FormEvent) => {
        e.preventDefault();

        const user = { email, password };
        // Use the correct endpoint for user signup
        UserService.signin(user).then((response) => {
            // Redirect to welcome page upon successful login
            navigate('/welcome');
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
                <form onSubmit={saveUser}>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="pswd" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
