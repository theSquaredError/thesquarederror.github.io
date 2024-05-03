import React, { useState } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import menu from '../../asset/menu_icon.svg';

const NavBar = () => {
	const navigate = useNavigate();
	const [openMobileNav, setOpenOPenNav] = useState(false);
	return (
		// <div className="container">
		<div className="navbar">
			{/* <div className="navbar-container" id="navbarid"> */}
			<div className="left-nav">
				<a className="nav-title" href="./">
					VIKAS KUMAR
				</a>
			</div>
			{/* <i className="fa-fa-bars"></i> */}
			<div className="mobileNav">
				<img
					className="svg_img"
					onClick={() => setOpenOPenNav(!openMobileNav)}
					src={menu}
					alt="Menu Icon"
				/>
				{openMobileNav && (
					<div className="mobileMenu">
						<div
							className="nav-item"
							onClick={() => {
								navigate('/about');
								setOpenOPenNav(false);
							}}
						>
							About
						</div>
						<div
							className="nav-item"
							onClick={() => {
								navigate('/research');
								setOpenOPenNav(false);
							}}
						>
							Research
						</div>
						<div
							className="nav-item"
							onClick={() => {
								navigate('/publications');
								setOpenOPenNav(false);
							}}
						>
							Publications
						</div>
						<div
							className="nav-item"
							onClick={() => {
								navigate('/post');
								setOpenOPenNav(false);
							}}
						>
							Post
						</div>
						<div
							className="nav-item"
							onClick={() => {
								navigate('/contact');
								setOpenOPenNav(false);
							}}
						>
							Contact
						</div>
						<hr style={{ margin: '5px 0px', width: '100%' }} />
						<div className="theme">
							<button class="dropbtn">Theme</button>
						</div>
					</div>
				)}
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
				</div>
			</div>
			{/* </div>
			</div> */}
		</div>
	);
};

export default NavBar;
