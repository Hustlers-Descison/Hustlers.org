import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
top:0;
width: 100%;
z-index:100;
align-items:center;
justify-content: space-between;
padding:10px 0;
background-color: #fff;
color:#bdc3c7;
margin-bottom:40px;
`
export const NavBar = styled.div`
display:flex;
align-items:right;
gap:20px;
padding: 5px 0px 3px;
margin-left:16px;
white-space: nowrap;
a{
    text-decoration: none;
    color: #bdc3c7;
    span{
        text-decoration: none;
    }
}
.active span,
a: hover{ color: #e74c3c; text-decoration: none;}
> span{
    font-family: 'Libre Barcode 128 Text', cursive;
    font-weight: 400;
    font-size: 30px;
    color: #e74c3c;
}
`;

export default function Directory(){
    
    return(
        <>
        <Container>
        <NavBar>
            <span class="logo">Hustlers.org</span>
            <NavLink to={'/login'} >  
                <span>Login</span>
            </NavLink>
            
            <NavLink to={'/home'} >  
                <span>Home</span>
            </NavLink>
            <NavLink to={'/chat'}>
                <span>Chat</span>
            </NavLink>
            

        </NavBar>
        </Container>
        </>
    )
}
