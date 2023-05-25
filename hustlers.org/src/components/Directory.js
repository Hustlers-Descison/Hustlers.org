import React from 'react';
import {NavLink, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
// position: fixed;
// top:0;
// width: 100%;
// z-index:100;
// align-items:center;
// justify-content: space-between;
// padding:10px 0;
// background-color: #000;
// color:white;
// // font-family: 'Love Light', cursive;
// margin-bottom:40px;
`
export const NavBar = styled.div`
display:flex;
gap:20px;
.active a{ text-decoration: none}
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
