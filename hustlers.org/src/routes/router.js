import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Directory from '../components/Directory';
import styled from 'styled-components';
import Chat from '../components/Chat';
import Home from '../components/Home';
import Login from '../components/loginpage';


const AppBody =styled.div`
display: flex;
height: 100vh;
`

function Layout(){
    return(
        <>
        <Directory/>
        <AppBody>
            <React.Suspense fallback={<Login active fullscreen={true} />}>
                <Outlet />
            </React.Suspense>

        </AppBody>
        </>
    )
}
export default createBrowserRouter([
    {
        path: '/',
        element:<Layout />,
        children: [
            {
                path: 'login',
                element:<Login />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'chat',
                element: <Chat />
            },
            
        ]
    }
])
