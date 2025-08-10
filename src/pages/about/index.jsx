import React from 'react';
import './styles.scss';
import aboutPdf from '../../asset/about_pdf.svg';
import resumeAbout from '../../asset/VikasResume.pdf';
import graduationIcon from '../../asset/graduation-cap-solid.svg';
import briefcaseIcon from '../../asset/briefcase-solid.svg';

const About = () => {
	return (
		<div className="about" id="aboutid">
			<div className="about-header">
				<h1>About Me</h1>
			</div>
			<div className="about-body">
				<div className="about-intro">
					<p>
						I am a passionate researcher and engineer with a strong background in machine learning, 
						natural language processing, and data analysis. My work focuses on developing innovative 
						solutions that bridge the gap between cutting-edge research and practical applications.
					</p>
					<p>
						With expertise in Python, deep learning frameworks, and statistical analysis, I enjoy 
						tackling complex problems and contributing to research that has real-world impact.
					</p>
				</div>

				<div className="about-current-job">
					<div className="job-card">
						<div className="job-header">
							<img src={briefcaseIcon} alt="Current Job" className="job-icon" />
							<h2>Current Position</h2>
						</div>
						<div className="job-content">
							<h3 className="job-title">Research Engineer</h3>
							<p className="job-company">TCS Research</p>
							<p className="job-description">
								Working on cutting-edge research projects in machine learning and artificial intelligence, 
								contributing to innovative solutions that drive technological advancement.
							</p>
						</div>
					</div>
				</div>

				<div className="about-cv-section">
					<div className="cv-button-container">
						<a href={resumeAbout} className="cv-download-btn" aria-label="Download CV" title="Download CV" target="_blank" rel="noreferrer">
							<img src={aboutPdf} alt="PDF" width="18" height="18" />
							<span>Download CV</span>
						</a>
					</div>
				</div>

				<hr className="section-divider" />

				<div className="about-education">
					<h2 className="education-title">
						<img src={graduationIcon} alt="Education" className="education-icon" />
						Education
					</h2>
					<div className="education-items">
						<div className="education-item">
							<div className="education-header">
								<h3>Master of Science (MS)</h3>
								<span className="education-year">2020 - 2022</span>
							</div>
							<p className="education-institution">Your University Name</p>
							<p className="education-specialization">Computer Science / Machine Learning</p>
							<p className="education-location">City, Country</p>
						</div>
						<div className="education-item">
							<div className="education-header">
								<h3>Bachelor of Technology (BTech)</h3>
								<span className="education-year">2016 - 2020</span>
							</div>
							<p className="education-institution">Your University Name</p>
							<p className="education-specialization">Computer Science / Information Technology</p>
							<p className="education-location">City, Country</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
