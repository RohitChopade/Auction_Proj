import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    alert('Signin successful! Redirecting to dashboard.');
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="form-container">
      <h2>Signin</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
}

export default Signin;