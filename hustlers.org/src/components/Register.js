import React, { useState } from 'react';
import supabase from '../db/supabaseClient';

export default function RegisterData() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) {
        setFormError(error.message);
      } else {
        // Registration successful
        setFormError(null);
        console.log('User registered:', user);
        // Perform any additional actions after successful registration
      }
    } catch (error) {
      console.log(error);
      setFormError('An error occurred while registering the user.');
    }
  };

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
