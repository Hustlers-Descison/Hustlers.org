import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import supabase from '../db/supabaseClient';

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const ChatLog = styled.div`
  /* Styles for chat log */
  margin-top: 10rem;
`;

const ChatBubble = styled.div`
  /* Styles for chat bubble */
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  background-color: ${({ isSent }) => (isSent ? 'red' : 'green')};
  color: white;
`;

const ChatBox = styled.div`
  /* Styles for chat box */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  justify-content: center;
`;

const MessageInput = styled.textarea`
  /* Styles for message input */
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 5px;
`;

const SendButton = styled.button`
  /* Styles for send button */
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  /* Styles for error text */
  color: red;
`;

export default function Create() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState(null);
  const [messages, setMessages] = useState([]); // Store and display messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      setFormError('Please enter a message.');
      return;
    }

    try {
      const user = supabase.auth.user();
      if (!user) {
        setFormError('You must be logged in to send a message.');
        return;
      }

      const { data, error } = await supabase
        .from('messages')
        .insert([{ userId: user.id, message }])
        .select();

      if (error) {
        console.log(error);
        setFormError('An error occurred while sending the message.');
      } else {
        console.log(data);
        setFormError(null);
        setMessage('');
        setMessages([...messages, { userId: user.id, message }]);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      setFormError('An error occurred while sending the message.');
    }
  };

  return (
    <>
      <nav>
        {/* Navbar contents: Admin, Chat Log, Chat, Update */}
      </nav>
      <BodyWrapper>
        <ChatLog>
          {messages.map(({ userId, message }, index) => (
            <ChatBubble key={index} isSent={userId === supabase.auth.user()?.id}>
              {message}
            </ChatBubble>
          ))}
        </ChatLog>
        <ChatBox>
          <form onSubmit={handleSubmit}>
            <MessageInput
              placeholder="Enter your message (up to 3000 words)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SendButton type="submit">Send</SendButton>
            {formError && <ErrorText className="error">{formError}</ErrorText>}
          </form>
        </ChatBox>
      </BodyWrapper>
    </>
  );
}
