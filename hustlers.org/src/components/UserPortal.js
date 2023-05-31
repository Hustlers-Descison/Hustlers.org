///import React, { useState } from 'react';
import styled from 'styled-components';
import supabase from '../db/supabaseClient';

const UserPortalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signIn({ email, password });

      if (error) {
        setFormError('Invalid email or password.');
      } else {
        setFormError(null);
        // Successful login, proceed with sending the message
        await sendMessage();
      }
    } catch (error) {
      console.log(error);
      setFormError('An error occurred while logging in.');
    }
  };

  const sendMessage = async () => {
    try {
      const user = supabase.auth.user();
      if (!user) {
        setFormError('You must be logged in to send a message.');
        return;
      }

      const { data, error } = await supabase
        .from('messages')
        .insert([{ userId: user.id, message: 'Hello, Supabase!' }])
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

  return (
    <UserPortalWrapper>
      <h2>User Portal</h2>
      <LoginForm onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        {formError && <ErrorText>{formError}</ErrorText>}
      </LoginForm>
    </UserPortalWrapper>
  );
} 



/////////


import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import supabase from '../db/supabaseClient';
import styled from 'styled-components';

const BodyWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 70px;
`
export default function Admin(){
    const navigate = useNavigate('');
    const [userLog, setUserLog] = useState('');
    const [userPwd, setuserPwd] = useState('');
    const [formError, setFormError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userLog || !userPwd){
            setFormError('please fill out required fields');
            return
        }
    // console.log(title, rating, method)
    const { data, error} = await supabase
        .from('admin')
        .insert([{ userLog, userPwd}])
        .select()
    if (error){
        console.log(error);
        setFormError('please fill out required fields');
    }
    if (data){
        console.log(data);
        setFormError(null);
        navigate('/');
    }
    }

    return(
     <>
     <BodyWrapper>
     <div className='page admin'>
     <form onSubmit={handleSubmit}>

     </form>
        <label htmlFor="password">UserName:</label>
        <input
        type=''
            id=""
            // value={}
            onChange={(e) => setUserLog(e.target.value)}
        />
         <label htmlFor="password">Password:</label>
        <input
        type=''
            id=""
            // value={}
            onChange={(e) => setuserPwd(e.target.value)}
        />
        <button>Login</button>
        {formError && <p className="error">{formError}</p>}
     </div>
      </BodyWrapper>
     </>
    )
}