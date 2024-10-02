import React, { useState } from "react";

function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if(!userName || !password){
        alert('not login')
    }
    setUserName('');
    setPassword('');
  };
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', border: "1px"}}>
      <h2>Register Form</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={userName}
            onChange={handleChangeUserName}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default RegisterForm;
