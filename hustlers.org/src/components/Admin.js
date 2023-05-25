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
