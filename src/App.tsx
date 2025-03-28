
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="facebook-login-container">
      <div className="header">
        <div className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="language">
          English (UK)
        </div>
      </div>
      
      <div className="logo-container">
        <div className="facebook-logo">
          <img src="/lovable-uploads/dd058a1d-264d-44ca-84bf-8d6065c16882.png" alt="Facebook Logo" className="logo-image" />
        </div>
      </div>
      
      <div className="login-form">
        <div className="input-container">
          <input 
            type="text" 
            placeholder="Mobile number or email address" 
            defaultValue="shahariarshuvooo"
            className="login-input"
          />
          <div className="profile-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9370DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
        
        <input 
          type="password" 
          placeholder="Password" 
          className="login-input password-input"
        />
        
        <button className="login-button">
          Log in
        </button>
        
        <div className="forgot-password">
          <a href="#">Forgotten password?</a>
        </div>
      </div>
      
      <div className="footer">
        <button className="create-account-button">
          Create new account
        </button>
        
        <div className="meta-logo">
          <svg height="24" viewBox="0 0 36 36" width="36">
            <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h2v-14h-3.5v-3H16v-2.839c0-4.141 2.14-6.259 5.961-6.259 1.535 0 2.277.15 2.889.215v3.091h-2.246c-1.406 0-2.133 1.363-2.133 2.663V17h4.654l-.893 3H20.471v13.036l-.29 2.834z" fill="#0081FB"></path>
            <path d="M13.925 35.743C5.767 33.677 0 26.562 0 18 0 14.511 1.209 11.346 3.44 8.623l2.651 1.693c-1.601 2.504-2.594 5.382-2.594 8.23 0 7.848 5.377 14.43 12.428 16.453v.744z" fill="#0064E0"></path>
          </svg>
          <span>Meta</span>
        </div>
      </div>
    </div>
  );
}

export default App;
