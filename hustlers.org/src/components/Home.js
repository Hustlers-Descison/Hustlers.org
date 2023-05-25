import React, { useEffect, useState } from 'react';
import supabase  from '../db/supabaseClient';
// import styled from 'styled-components';
import SmoothieCard from './SmoothieCard';

export default function Home(){
    const [fetchError, setFetchError] = useState(null);
    const [smoothies, setSmoothies] = useState(null);
    const [orderBy, setOrderBy] = useState('created_at')

    const handleDelete = (id) =>{
        setSmoothies(prevSmoothies =>{
            return prevSmoothies.filter(sm => sm.id !== id)
        })
    }

    useEffect(()=>{
        const fetchSmoothies = async () =>{
            const { data, error } = await supabase
            .from('smoothies')
            .select()
            .order(orderBy, {ascending: false})

            if(error){
                setFetchError('Could not get information')
                setSmoothies(null);
                console.log(error);
            }
            if(data){
                setSmoothies(data);
                setFetchError(null);
            }
        }
        fetchSmoothies();
    }, [orderBy])
    // console.log(supabase);
    return(
     <>
     <div className='page home'>
        {/* <h2>Home</h2> */}
        {fetchError && (<p>{fetchError}</p>)}
        {smoothies && ( 
            <div className="smoothies">
                {/*  */}
                <div className='order-by'>
                    <p>Order by:</p>
                    <button onClick={()=> setOrderBy('created_at')}>Time Created</button>
                    <button onClick={()=> setOrderBy('title')}>Title</button>
                    <button onClick={()=> setOrderBy('rating')}>Rating</button>
                    {orderBy}
                </div>
                {/*  */}
                <div className="smoothie-grid">
                {smoothies.map(smoothie => (
                    // ui view
                    <SmoothieCard key={smoothie.id} smoothie={smoothie} onDelete={handleDelete} />
                ))}
                </div>
            </div>
        )}
     </div>
     </>
    )
}
