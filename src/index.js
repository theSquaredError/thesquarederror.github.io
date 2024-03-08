import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './pages/navbar';
import Footer from './pages/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<NavBar />
			<App />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
