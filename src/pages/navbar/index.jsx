import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const NavBar = () => {
	const navigate = useNavigate();
	const { theme, toggleTheme } = useTheme();

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
					<div className="nav-item" onClick={() => navigate('/projects')}>
						Projects
					</div>
					<div className="nav-item" onClick={() => navigate('/publications')}>
						Publications
					</div>
					<div className="nav-item" onClick={() => navigate('/post')}>
						Post
					</div>
					<hr style={{ transform: 'rotate(90deg)' }} />
					
					<div className="theme-container">
						<button 
							className="theme-toggle-btn"
							onClick={toggleTheme}
							title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
						>
							{theme === 'dark' ? <FaSun /> : <FaMoon />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
