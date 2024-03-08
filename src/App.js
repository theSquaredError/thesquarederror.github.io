import React from 'react';
// import NavBar from './pages/navbar';
import Home from './pages/Home';
import About from './pages/about';
import Research from './pages/research';
import Publications from './pages/Publications';
import Post from './pages/post';
import Contact from './pages/contact';
// import Footer from './pages/footer';
import { Route, Routes } from 'react-router-dom';
import './app.scss';

function App() {
	return (
		<div className="app">
			<div className="app-container">
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<About />} path="/about" />
					<Route element={<Research />} path="/research" />
					<Route element={<Publications />} path="/publications" />
					<Route element={<Post />} path="/post" />
					<Route element={<Contact />} path="/contact" />
					{/* <Route element={<Footer />} path="/Footer" /> */}
				</Routes>
			</div>
		</div>
	);
}

export default App;
