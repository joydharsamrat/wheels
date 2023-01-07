import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AllProducts from '../Pgaes/AllProducts/AllProducts';
import Dashboard from '../Pgaes/Home/Dashboard/Dashboard';
import Home from '../Pgaes/Home/Home';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }, {
                path: 'allProducts',
                element: <AllProducts></AllProducts>
            }
        ]
    }
])
