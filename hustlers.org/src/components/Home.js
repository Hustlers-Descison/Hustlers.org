import React, { useEffect, useState } from 'react';
import supabase from '../db/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Auth } from "@supabase/auth-ui-react";


export default function Home(){
    const navigate = useNavigate();

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/login")
      }
    
    return(
     <>
     <div>
        <button onClick={() => signOutUser}>Sign Out</button>
     </div>
     </>
    )
}
