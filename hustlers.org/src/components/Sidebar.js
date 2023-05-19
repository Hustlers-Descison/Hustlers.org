import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import EditIcon from '@mui/icons-material/Edit';
import CameraIcon from '@mui/icons-material/Camera';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import  MailIcon from '@mui/icons-material/Mail';
import DraftsIcon from '@mui/icons-material/Drafts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddBoxIcon from '@mui/icons-material/AddBox';

const SidebarContainer = styled.div`
color: white;
background-color: var(--slack-color);
flex: 0.3;
border-top: 1px solid #ea8685;
max-width: 260px;
margin-top: 50px;
border-bottom-right-radius: 25px;
padding:10px;

> hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
}
`;

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;
> .MuiSvgIcon-root{
    padding: 8px;
    color: #ea8685;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`;

const SidebarInfo = styled.div`
    flex:1;

    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    
    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: #f7d794;
    }
`;

function Sidebar(){
    return(
        <div>
            <SidebarContainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>Hustlers</h2>
                        <h3>
                            <CameraIcon />
                            chat with me.
                        </h3>
                    </SidebarInfo>
                    <EditIcon />
                </SidebarHeader>
                <SidebarOption Icon={ChatIcon} title="Threads" />
                <SidebarOption Icon={MailIcon} title="Mentions & Reactions" />
                <SidebarOption Icon={DraftsIcon} title="Saved Items" />
                <SidebarOption Icon={BookmarkIcon} title="Channel browser" />
                <SidebarOption Icon={PeopleAltIcon} title="People & User groups" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={FileCopyIcon} title="File Browser" />
                <SidebarOption Icon={ExpandLessIcon} title="Show less" />
                <hr />
                <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
                <hr />
                <SidebarOption Icon={AddBoxIcon} addChannelOption title="Add Channel" />
            </SidebarContainer>
        </div>
    )
}
export default Sidebar;
