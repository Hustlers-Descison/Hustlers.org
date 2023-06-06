import React from 'react';
import supabase from '../db/supabaseClient';
import { Route, useNavigate } from 'react-router-dom';
import Login from './loginpage';


export default function Home(){
    const navigate = useNavigate();

    async function signOutUser() {
         await supabase.auth.signOut();
        navigate(<Route path="/login" element={<Login />} />)
      }
    
    return(
     <>
        <h1>Home</h1>
        <button onClick={() => signOutUser}>Sign Out</button>
     </>
    );
}
