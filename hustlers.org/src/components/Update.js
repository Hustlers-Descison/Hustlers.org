import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import  supabase  from '../db/supabaseClient';
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

    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [rating, setRating] = useState('');
    const [formError, setFormError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !method || !rating){
            setFormError('please fill out required fields');
            return
        }
        const { data, error} = await supabase
            .from('smoothies')
            .update({ title, method, rating })
            .eq('id', id)
            .select()
        if(error){
            setFormError('please fill out required fields');
        }
        if(data){
            setFormError(null);
            // if info present navigate to home page
            navigate('/')
        }
    }

    useEffect(()=>{
        const fetchSmoothie = async () =>{
            const {data, error} = await supabase
            .from('smoothies')
            .select()
            .eq('id', id)
            .single()
        if(error){
            navigate('/', {replace: true})
        }
        if(data){
            setTitle(data.title)
            setMethod(data.Method)
            setRating(data.rating)
            console.log(data)
        }
        }
        fetchSmoothie()
    },[id, navigate])
    return(
     <>
     <BodyWrapper>
     <div className='page update'>
     <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
        type='text'
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        
        <label htmlFor="method">Message:</label>
        <textarea
            id="method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rate Message Urgency:</label>
        <input
            type='number'
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
        />
        <button>Update message</button>
        {formError && <p className="error">{formError}</p>}
        </form>
     </div>
      </BodyWrapper>
     </>
    )
}
