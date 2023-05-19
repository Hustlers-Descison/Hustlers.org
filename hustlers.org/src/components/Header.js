import React from 'react';
import styled from 'styled-components';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import  ContactSupportIcon  from '@mui/icons-material/ContactSupport';
const HeaderSearch = styled.div`
flex: 0.4;
opacity: 1;
border-radius: 6px;
background-color: #f19066;
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
top: 0;
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

const HeaderAvatar = styled(PersonPinIcon)`
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
                <HeaderAvatar />

                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='search' />
            </HeaderSearch>
            <HeaderRight>
                <ContactSupportIcon />
            </HeaderRight>
        </HeaderContainer>
      </>
    )
}