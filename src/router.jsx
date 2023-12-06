import {createBrowserRouter} from 'react-router-dom'

import AuthLayout from './Layout/AuthLayout'

import Login from './views/Login'
import Registro from './views/Registro'

const router = createBrowserRouter([

{
	path:'/auth',
	element: <AuthLayout />,
	children:[
		{
			path: '/auth/login',
			element: <Login />
		},
		{
			path:'/auth/registro',
			element: <Registro />
		}
	]
}
]);

export default router