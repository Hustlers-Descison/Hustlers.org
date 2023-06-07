import React from 'react';
import supabase from '../db/supabaseClient';
import { Route, useNavigate } from 'react-router-dom';
import Login from './loginpage';
import styled from 'styled-components';

const FormContainer = styled.div`
background-color: #ecf0f1;
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
overflow-y: scroll;
> h1 {
  color: #8395a7;
  font-size: 12px;
  margin-top: -460px;
  padding-right: 5px;
}
button{
  background-color: #ff6b6b;
  color: #fff;
  padding: 10px;
  font-weight: bold;
  margin-top: -460px;
  border: none;
  cursor: pointer;
}
`;


export default function Home(){
    const navigate = useNavigate();

    async function signOutUser() {
         await supabase.auth.signOut();
        navigate(<Route path="/login" element={<Login />} />)
      }
    
    return(
     <>
        <FormContainer>
        <h1>chat logs</h1>
        <button onClick={() => signOutUser}>Sign Out</button>
        </FormContainer>
     </>
    );
}
