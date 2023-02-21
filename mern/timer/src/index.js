import './App.css';
import React from 'react';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import {Timer} from './pages/Timer.js'
import {Home} from './pages/Home.js';
import {Blog} from './pages/Blog.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const	router	=	createBrowserRouter([
	{
		path:'/',
		element:(<Home/>)
	},
	{
		path:'/timer',
		element:<Timer/>
	},
	{
		path:'/home',
		element:<Home/>
	},
	{
		path:'/blog',
		element:<Blog/>
	}

	

])
createRoot(document.getElementById("root")).render(
	<Container><RouterProvider router={router}/>
	</Container>
);
