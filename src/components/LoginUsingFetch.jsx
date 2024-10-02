import React, { useState } from 'react';

function LoginUsingFetch() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Username and Password are required!');
      return;
    }

    // Data to be sent to the server
    const userData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('https://your-server-url.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Registration successful!');
        setError('');
      } else {
        setError(result.message || 'Registration failed!');
        setSuccess('');
      }

    } catch (error) {
      setError('Failed to connect to the server!');
      setSuccess('');
    }

    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default LoginUsingFetch;
