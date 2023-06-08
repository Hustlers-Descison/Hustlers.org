import React, { useEffect, useState } from 'react';
import supabase from '../db/supabaseClient';
import { Route, useNavigate } from 'react-router-dom';
import Login from './loginpage';
import styled from 'styled-components';
import Operations from './Operations';

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
    // const navigate = useNavigate();

    // async function signOutUser() {
    //      await supabase.auth.signOut();
    //     navigate(<Route path="/login" element={<Login />} />)
    //   }
    const [fetchError, setFetchError] = useState(null);
    const [chatMessage, setChatMessage] = useState(null);
    const [orderBy, setOrderBy] = useState('created_at')

    const handleDelete = (id) =>{
        setChatMessage(prevMessages =>{
            return prevMessages.filter(cm => cm.id !== id)
        })
    }
    useEffect(()=>{
      const fetchMessages = async () =>{
          const { data, error } = await supabase
          .from('chatMessage')
          .select()
          .order(orderBy, {ascending: false})

          if(error){
              setFetchError('Could not get information')
              setChatMessage(null);
              console.log(error);
          }
          if(data){
              setChatMessage(data);
              setFetchError(null);
          }
      }
      fetchMessages();
    }, [orderBy])
    return(
     <>
        {/* <FormContainer>
        <h1>chat logs</h1>
        <button onClick={() => signOutUser}>Sign Out</button>
        </FormContainer> */}
        <div className='page home'>
        {fetchError && (<p>{fetchError}</p>)}
        {chatMessage && ( 
            <div className="chatMessage">
                {/*  */}
                <div className='order-by'>
                    <p>Order by:</p>
                    <button onClick={()=> setOrderBy('created_at')}>Time Created</button>
                    <button onClick={()=> setOrderBy('message')}>Message</button>
                    {orderBy}
                </div>
                <div className="message-grid">
                {chatMessage.map(chatMessages => (
                    <Operations key={chatMessages.id} chatMessages={chatMessages} onDelete={handleDelete} />
                ))}
                </div>
            </div>
        )}
     </div>
     </>
    );
}
