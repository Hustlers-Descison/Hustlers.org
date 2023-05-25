import React, { useState } from 'react';
// import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import supabase  from '../db/supabaseClient';

export default function Create(){
    const navigate = useNavigate('');
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [rating, setRating] = useState('');
    const [formError, setFormError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !method || !rating){
            setFormError('please fill out required fields');
            return
        }
    // console.log(title, rating, method)
    const { data, error} = await supabase
        .from('smoothies')
        .insert([{ title, method, rating}])
        .select()
    if (error){
        console.log(error);
        setFormError('please fill out required fields');
    }
    if (data){
        console.log(data);
        setFormError(null);
        navigate('/home');
    }

    }
    return(
     <>
     <div className='page create'>
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
        <button>Create Message</button>
        {formError && <p className="error">{formError}</p>}
        </form>
     </div>
     </>
    )
}
