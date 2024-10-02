import React, { useState } from 'react';
import axios from 'axios';

function LoginUsingAxios () {
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
      // Send a POST request using axios
      const response = await axios.post('https://your-server-url.com/api/register', userData);

      // Check the response status
      if (response.status === 200) {
        setSuccess('Registration successful!');
        setError('');
      } else {
        setError(response.data.message || 'Registration failed!');
        setSuccess('');
      }
    } catch (error) {
      // Handle error, such as server not reachable or other issues
      if (error.response) {
        setError(error.response.data.message || 'Registration failed!');
      } else {
        setError('Failed to connect to the server!');
      }
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

export default LoginUsingAxios;
