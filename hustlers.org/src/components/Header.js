import React from 'react';
import styled from 'styled-components';
// import { Avatar } from 'material-ui/core';

const HeaderSearch = styled.div`
flex: 0.4;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align:center;
display:flex;
padding: 0 50px;
color: gray;
border: 1px gray solid;
> input {
    background-color: transparent;
    border: none;
    text-align:center;
    min-width: 30vw;
    outline:0;
    color:white;
}
`;

const HeaderContainer = styled.div`
display:flex;
position:fixed;
width:100%;
align-items:center;
justify-content: space-between;
padding:10px 0;
background-color: var(--slack-color);
color:white;
font-family: 'Love Light', cursive;
`;

const HeaderLeft = styled.div`
flex: 0.3; //third of screen
align-items: center;
margin-left: 20px;

> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
}
`;

const HeaderRight = styled.div`
flex:0.3;
display:flex;
align-items:flex-end;
> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
}
`;

// const HeaderAvatar = styled(Avatar)`
// cursor:pointer;
// :hover{
//     opacity: 0.8;
// }
// `;
const HeaderAvatar = styled.span`
cursor:pointer;
:hover{
    opacity: 0.8;
}
`;
export default function Header(){
    return(
      <>
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar>
                <h1>Hustlers</h1>
                </HeaderAvatar>
            </HeaderLeft>
        
        </HeaderContainer>
      </>
    )
}