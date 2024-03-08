import React from 'react';
import './styles.scss';
import graduationCap from '../../asset/graduation-cap-solid.svg';
import graduationCap1 from '../../asset/graduation-cap-solid.svg';

const Research = () => {
	return (
		<div className="research" id="research-id">
			<h1 className="researchh1">Research Project</h1>
			<br></br>
			<div>
				<a href="https://partigabor.github.io/spice">
					<img src={graduationCap} alt="Graduation Cap" />
					<span>Spice & Spice Terminology Database</span>
				</a>
			</div>
			<span className="rsh-span">
				<p>Based on my PdD dissertation about the diffusion of spice names.</p>
			</span>
			<div>
				<a href="https://partigabor.github.io/spice">
					<img src={graduationCap1} alt="Graduation Cap" />
					<span>Spice & Spice Terminology Database</span>
				</a>
			</div>
			<span className="rsh-span">
				<p>Based on my PdD dissertation about the diffusion of spice names.</p>
			</span>
		</div>
	);
};

export default Research;
