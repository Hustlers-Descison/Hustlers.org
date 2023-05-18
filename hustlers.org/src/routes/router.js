import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import { Footer } from '../components/Footer';
// import styled from 'styled-components';
// import Admin from '../components/Admin';
import Header from '../components/Header';
import Users from '../components/Users';
import Splash from '../components/Splash';

// const Loader = styled.div`

// `;

function Layout(){
    return(
        <>
            {/* <Sidebar /> */}
            {/* <React.Suspense fallback={<Splash active fullscreen={true} />}> */}
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
                element: <Header />
            },
            {
                path: 'users',
                element: <Users />
            }
        ]
    }

]);