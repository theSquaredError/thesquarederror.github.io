import React from 'react';
import './styles.scss';
import pdfIcon from '../../asset/about_pdf.svg';
import linkIcon from '../../asset/link-solid.svg';

const Publications = () => {
	return (
		<div className="publication" id="publicationid">
			<div className="content">
				<section className="pub-sec">
					<article>
						<header>
							<h1 className="title">Publications</h1>
						</header>
						
						{/* Conference Papers */}
						<div className="publication-section">
							<h2>Conference Papers</h2>
							
							<div className="publication-item">
								<p className="authors">
									<strong>Kumar, V.</strong>, & Joseph, A. G. (2024).
								</p>
								<p className="title">
									Emergence of Recursive Language through Bootstrapping and Iterated Learning.
								</p>
								<p className="venue">
									In <em> AAMAS '25: Proceedings of the 24th International Conference on Autonomous Agents and Multiagent Systems.</em>
								</p>
								<div className="publication-links">
									<a href="#" className="pub-link" title="View Paper">
										<img src={linkIcon} alt="View" width="16" height="16" />
										View Paper
									</a>
									<a href="#" className="pub-link" title="Download PDF">
										<img src={pdfIcon} alt="PDF" width="16" height="16" />
										PDF
									</a>
									<a href="#" className="pub-link" title="Code Repository">
										<img src={linkIcon} alt="Code" width="16" height="16" />
										Code
									</a>
								</div>
							</div>
						</div>


						{/* Thesis */}
						<div className="publication-section">
							<h2>Thesis</h2>
							{/* Add your thesis here */}
						</div>
						
					</article>
				</section>
			</div>
		</div>
	);
};

export default Publications;
