import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import { Footer } from '../components/Footer';
import styled from 'styled-components';
// import Admin from '../components/Admin';
// import Header from '../components/Header';
import Chat from '../components/Chat';
import Splash from '../components/Splash';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`
// const Loader = styled.div`

// `;

function Layout(){
    return(
        <>
            <Header />
            <AppBody>
            <Sidebar />
            </AppBody>
                <React.Suspense fallback={<Splash active fullscreen={true} />}>
                    <Outlet />
                </React.Suspense>

            {/* <Footer /> */}
        </>
    )
}
export default createBrowserRouter([
    {
        path: '/',
        element:<Layout />,
        children: [
            // {
            //     index: true,
            //     element: <Admin />
            // },
            // {
            //     path: 'users',
            //     element: <Users />
            // }
            {
                index: true,
                element: <Chat />
            },
            // {
            //     path: 'chat',
            //     element: <Chat />
            // }
        ]
    }

]);