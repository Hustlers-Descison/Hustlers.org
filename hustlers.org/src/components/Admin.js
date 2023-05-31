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

const FormWrapper = styled.form`
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

  const sendMessage = async () => {
    try {
      const user = supabase.auth.user();
      if (!user) {
        setFormError('You must be logged in to send a message.');
        return;
      }

      const { data, error } = await supabase
        .from('messages')
        .insert([{ userId: user.id, message: message }])
        .select();

      if (error) {
        console.log(error);
        setFormError('An error occurred while sending the message.');
      } else {
        console.log(data);
        setFormError(null);
      }
    } catch (error) {
      console.log(error);
      setFormError('An error occurred while sending the message.');
    }
  };

  return;
}
