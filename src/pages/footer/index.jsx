import React, { useState, useEffect } from 'react';
import './style.scss';

const Footer = () => {
	// const year = document.getElementById('year');
	// year.textContent = new Date().getFullYear();

	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentYear(new Date().getFullYear());
		}, 60000); // Update the year every minute

		return () => clearInterval(intervalId);
	}, []);

	const LinkRef = () => {
		window.open(
			'https://www.linkedin.com/in/kuldeep-saini-442937166/',
			'_blank'
		);
	};

	return (
		<div className="container">
			<div className="footer">
				<p className="footer-p">
					{/* &copy; 2023–<span id="year"></span>, Vikas Kumar · Powered by Kuldeep
				Saini */}
					&copy; 2023–{currentYear}, Vikas Kumar · Developed by{' '}
					<span className="footer-span" onClick={LinkRef}>
						Kuldeep Saini
					</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
