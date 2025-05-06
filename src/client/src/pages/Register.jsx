import React from 'react';

export default function Register() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
} 