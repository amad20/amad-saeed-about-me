import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import React from 'react'
import { createRoot } from 'react-dom/client';

import { HobbyContainer } from './modules/hobbies/HobbyContainer';
// Import the AboutMe component
import { AboutMeContainer } from './modules/aboutMe/aboutMeContainer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AboutMeContainer /> // Use the AboutMe component as a JSX element
    },
    {
        path: '/Hobby',
        element: <HobbyContainer />
    },

])


const App = () => {
    return (
        <>
        <RouterProvider router ={router} />
        </>
    )
}


createRoot(document.getElementById('root') as Element).render(<App />)