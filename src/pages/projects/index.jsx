import React from 'react';
import './styles.scss';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaCheckCircle, FaClock } from 'react-icons/fa';

const Projects = () => {
	const ongoingProjects = [
		{
			id: 1,
			title: "LLM Research Assistant",
			description: "Personal portfolio website built with React.js and SCSS, featuring dark/light theme toggle and responsive design.",
			technologies: ["React.js", "SCSS", "JavaScript", "HTML5", "CSS3"],
			github: "https://github.com/yourusername/portfolio",
			live: "https://yourportfolio.com",
			status: "ongoing"
		},
		{
			id: 2,
			title: "Reactree_MCTS",
			description: "Advanced task planning agent for solving complex problem like webshop and webarena",
			technologies: ["Python", "transformers", "Scikit-learn", "NLP", "Deep Learning"],
			github: "https://github.com/theSquaredError/reactree_webshop",
			status: "ongoing"
		}
	];

	const completedProjects = [
		{
			id: 3,
			title: "Grounding Language in Multiagent Population",
			description: "Emergence of a language in multi-agent reinforcement learning agent",
			technologies: ["Python", "Pytorch", "numpy", "OpenAI Gym"],
			github: "https://github.com/theSquaredError/lang-game-order",
			live: "",
			status: "completed"
		},
		{
			id: 4,
			title: "Crypto trading agent",
			description: "Reinforcement learning solution for crypto trading agent",
			technologies: ["Python", "Pytorch", "RLLib", "ElegantRL", "nablarl","OpenAI Gym"],
			github: "https://github.com/theSquaredError/AlgoTrading-InterIIT-TechMeet-12.0/tree/main",
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
