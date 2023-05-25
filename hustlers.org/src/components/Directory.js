import React from 'react';
import {NavLink, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
top:0;
width: 100%;
z-index:100;
align-items:center;
justify-content: space-between;
padding:10px 0;
background-color: #487eb0;
color:white;
// font-family: 'Love Light', cursive;


margin-bottom:40px;
`
export const NavBar = styled.div`
display:flex;
gap:20px;
padding: 5px 0px 3px;
margin-right:6px;
white-space: nowrap;
a{
    text-decoration: none;
    span{
        text-decoration: none;
    }
}
.active span,
a: hover{ color: #FFF; text-decoration: none;}
`;

export default function Directory(){
    
        function ActiveLink({isActive}){
            const linkMatch = useMatch('/');
            return isActive || linkMatch ? 'active' :undefined;
        }

    return(
        <>
        <Container>
        <NavBar>
            <NavLink to={'/'}>
            <span>Admin</span>
            </NavLink>
            <NavLink to={'home'} className={ActiveLink}>
                <span>Chat Log</span>
            </NavLink>
            <NavLink to={'create'}>
                <span>Chat</span>
            </NavLink>
            <NavLink to={'update'}>
                <span>Update</span>
            </NavLink>
        </NavBar>
        </Container>
        </>
    )
}
