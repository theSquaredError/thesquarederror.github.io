import React from 'react';
import './styles.scss';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaCheckCircle, FaClock } from 'react-icons/fa';

const Projects = () => {
	const ongoingProjects = [
		{
			id: 1,
			title: "Portfolio Website",
			description: "Personal portfolio website built with React.js and SCSS, featuring dark/light theme toggle and responsive design.",
			technologies: ["React.js", "SCSS", "JavaScript", "HTML5", "CSS3"],
			github: "https://github.com/yourusername/portfolio",
			live: "https://yourportfolio.com",
			status: "ongoing"
		},
		{
			id: 2,
			title: "Machine Learning Project",
			description: "Implementing advanced ML algorithms for natural language processing and pattern recognition.",
			technologies: ["Python", "TensorFlow", "Scikit-learn", "NLP", "Deep Learning"],
			github: "https://github.com/yourusername/ml-project",
			status: "ongoing"
		}
	];

	const completedProjects = [
		{
			id: 3,
			title: "Data Analysis Dashboard",
			description: "Interactive dashboard for visualizing complex datasets with real-time updates and filtering capabilities.",
			technologies: ["Python", "Dash", "Pandas", "Plotly", "SQL"],
			github: "https://github.com/yourusername/dashboard",
			live: "https://dashboard-demo.com",
			status: "completed"
		},
		{
			id: 4,
			title: "Web Scraping Tool",
			description: "Automated web scraping solution with data extraction and export functionality.",
			technologies: ["Python", "BeautifulSoup", "Selenium", "Pandas", "Flask"],
			github: "https://github.com/yourusername/scraper",
			status: "completed"
		}
	];

	const ProjectCard = ({ project }) => (
		<div className="project-card">
			<div className="project-header">
				<h3 className="project-title">{project.title}</h3>
				<div className="project-status">
					{project.status === 'ongoing' ? (
						<span className="status ongoing">
							<FaClock /> Ongoing
						</span>
					) : (
						<span className="status completed">
							<FaCheckCircle /> Completed
						</span>
					)}
				</div>
			</div>
			
			<p className="project-description">{project.description}</p>
			
			<div className="project-technologies">
				{project.technologies.map((tech, index) => (
					<span key={index} className="tech-tag">{tech}</span>
				))}
			</div>
			
			<div className="project-links">
				<a 
					href={project.github} 
					target="_blank" 
					rel="noopener noreferrer"
					className="project-link github"
				>
					<FaGithub /> Code
				</a>
				{project.live && (
					<a 
						href={project.live} 
						target="_blank" 
						rel="noopener noreferrer"
						className="project-link live"
					>
						<FaExternalLinkAlt /> Live Demo
					</a>
				)}
			</div>
		</div>
	);

	return (
		<div className="projects" id="projectsid">
			<div className="projects-container">
				<div className="projects-header">
					<h1>
						<FaLaptopCode className="header-icon" />
						My Projects
					</h1>
					<p>Here are some of the projects I've been working on, both ongoing and completed.</p>
				</div>

				<div className="projects-section">
					<h2 className="section-title">
						<FaClock className="section-icon" />
						Ongoing Projects
					</h2>
					<div className="projects-grid">
						{ongoingProjects.map(project => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>

				<div className="projects-section">
					<h2 className="section-title">
						<FaCheckCircle className="section-icon" />
						Completed Projects
					</h2>
					<div className="projects-grid">
						{completedProjects.map(project => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
