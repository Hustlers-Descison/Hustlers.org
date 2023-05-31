import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Directory from '../components/Directory';
import styled from 'styled-components';
import Create from '../components/Create';
import Home from '../components/Home';
import Update from '../components/Update';
import Login from '../components/Login';
import Register from '../components/Register';

const AppBody =styled.div`
display: flex;
height: 100vh;
`

function Layout(){
    return(
        <>
        <Directory/>
        <AppBody>
            <React.Suspense fallback={<Admin active fullscreen={true} />}>
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
                index: true,
                element:<Admin />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'create',
                element: <Create />
            },
            {
                path: '/:id',
                element: <Update />
            }
        ]
    }
])

