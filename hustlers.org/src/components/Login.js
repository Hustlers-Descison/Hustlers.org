import React, { useState } from 'react';
import styled from 'styled-components';
import supabase from '../db/supabaseClient';


const UserPortalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: red;
`;

export default function UserPortal() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [formError, setFormError] = useState('')
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signIn({
        email: loginEmail,
        password: loginPassword,
      });

      if (error) {
        setFormError('Invalid email or password.');
      } else {
        setFormError(null);
        // Successful login, proceed with sending the message
//         await sendMessage();
      }
    } catch (error) {
      console.log(error);
      setFormError('An error occurred while logging in.');
    }
  };
  
  return (
    <UserPortalWrapper>
      <h2>User Portal</h2>
      <LoginForm onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      )}
    </UserPortalWrapper>
  );
  
  
