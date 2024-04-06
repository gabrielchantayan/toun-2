// import './assets/css/main.css';
import pages from './pages/pageIndex.js';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom';
import AppBar from './components/AppBar.js';
import './assets/styles/main.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<AppBar />
				<Outlet />
			</>
		),
		children: [
			{
				index: true,
				element: <pages.Homepage />,
			},
			{
				path: '/page1',
				element: <pages.PageOne />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
