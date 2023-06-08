import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import supabase from '../db/supabaseClient';
import styled from 'styled-components';

const BodyWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    margin: 70px;
`
export default function Update(){
    const { id } = useParams();
    // console.log(update);
    const navigate = useNavigate();

    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message){
            setFormError('please enter a message');
            return
        }
        const { data, error} = await supabase
            .from('chatMessage')
            .update({ message })
            .eq('id', id)
            .select()
        if(error){
            setFormError('please enter a message');
        }
        if(data){
            setFormError(null);
            // if info present navigate to home page
            navigate('/')
        }
    }

    useEffect(()=>{
        const fetchMessages = async () =>{
            const {data, error} = await supabase
            .from('chatMessage')
            .select()
            .eq('id', id)
            .single()
        if(error){
            navigate('/', {replace: true})
        }
        if(data){
            setMessage(data.message)
        }
        }
        fetchMessages()
    },[id, navigate])
    return(
     <>
     <BodyWrapper>
     <div className='page update'>
     <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <button>Update message</button>
        {formError && <p className="error">{formError}</p>}
        </form>
     </div>
      </BodyWrapper>
     </>
    )
}