import React, { useState, useRef } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const researchRef = useRef(null);
    const adventureRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedName(name);
        console.log('Login submitted for:', name, email);
    };

    const scrollToResearch = () => {
        researchRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAdventure = () => {
        adventureRef.current?.scrollIntoView({ behavior: 'smooth' });
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

            {submittedName && (
                <>
                    <div className="welcome-section">
                        <h2>Welcome {submittedName}! Click on the tabs to begin your research adventure!</h2>
                        <div className="tabs">
                            <button className="tab" onClick={scrollToResearch}>Find Research Groups</button>
                            <button className="tab" onClick={scrollToAdventure}>Choose your Adventure</button>
                            <button className="tab">Direct Reach out</button>
                        </div>
                    </div>

                    <div ref={researchRef} className="research-panel">
                        <h2>Find Research Groups!</h2>
                        <p>Greetings {submittedName}! Fill in the text boxes with your information.</p>
                        <div className="input-group">
                            <input type="text" placeholder="Major" />
                            <input type="text" placeholder="Year" />
                            <input type="text" placeholder="Courses taken" />
                            <input type="text" placeholder="Skills" />
                            <input type="text" placeholder="RSO's" />
                        </div>
                    </div>

                    <div ref={adventureRef} className="adventure-panel">
                        <h2>Choose your adventure!</h2>
                        <p>Don't know where to begin? Fill in the text boxes with your information. Let's the games begin!</p>
                        <div className="input-group">
                            <input type="text" placeholder="Major" />
                            <input type="text" placeholder="Year" />
                            <input type="text" placeholder="Interests" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LoginPage;
