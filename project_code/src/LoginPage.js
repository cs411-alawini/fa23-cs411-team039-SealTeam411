import React, { useState } from 'react';
import './LoginPage.css'; 

const LoginPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // log in stuff gonna happen here
        console.log('Login submitted for:', name, email);
    };

    return (
        <div className="login-container">
            <h1>Project Odyssey</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter Your Name Here"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Illinois email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your Illinois email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="login-button">Log-in</button>
            </form>
            <p className="login-footer">Your research journey starts here :)</p>
            <div className="welcome-section">
                <h2>Welcome /STUDENT NAME HERE UPDATE LATER/ Click on the above tabs to begin your research adventure!</h2>
                <div className="tabs">
                    <button className="tab">Find Research Groups</button>
                    <button className="tab">Choose your Adventure</button>
                    <button className="tab">Direct Reach out</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
