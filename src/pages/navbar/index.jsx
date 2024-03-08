import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
	const navigate = useNavigate();
	return (
		<div className="navbar">
			<div className="navbar-container" id="navbarid">
				<div className="left-nav">
					<a className="nav-title" href="./">
						VIKAS KUMAR
					</a>
				</div>
				<div className="right-nav">
					<div className="nav-item" onClick={() => navigate('/about')}>
						About
					</div>
					<div className="nav-item" onClick={() => navigate('/research')}>
						Research
					</div>
					<div className="nav-item" onClick={() => navigate('/publications')}>
						Publications
					</div>
					<div className="nav-item" onClick={() => navigate('/post')}>
						Post
					</div>
					<div className="nav-item" onClick={() => navigate('/contact')}>
						Contact
					</div>
					<hr style={{ transform: 'rotate(90deg)' }} />
					<div className="theme">
						<button class="dropbtn">Theme</button>
						{/* <div>
						<div className="auto">Automatic</div>
						<div className="dark">Dark</div>
						<div className="light">Light</div>
					</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
