import React from 'react';
import './styles.scss';
import aboutprofile from '../../asset/profile.png';
import resumeAbout from '../../asset/VikasResume.pdf';
import aboutPdf from '../../asset/about_pdf.svg';
import aboutThesis from '../../asset/about_pdf.svg';
import aboutLinkh2 from '../../asset/link-solid.svg';
import aboutLinkh3 from '../../asset/link-solid.svg';
import aboutLinkh3Sch from '../../asset/link-solid.svg';

const About = () => {
	return (
		<div className="container">
			<div className="about" id="aboutid">
				<div className="about-header">
					<h1 className="abouth1">About</h1>
					<div className="img-about">
						<img src={aboutprofile} alt="Img"></img>
					</div>
				</div>
				<div className="about-body">
					<p>
						Welcome! I am a fresh Ph.D. graduate at
						<a href="/"> The Hong Kong Polytechnic University</a>, and I am
						using digital technologies in philological and humanities research.
						I am interested in linguistic and cultural exchange along historic
						trade routes in Asia, especially around the Indian Ocean world and
						the Maritime Silk Road. My focus is on how to collect, store,
						process, analyze, and present humanities data in new and exciting
						ways. I am fascinated by etymology, pre-modern travel and trade, and
						network theory.
					</p>
					<div className="about-cv" id="cv-about">
						<strong>
							<a
								href={resumeAbout}
								aria-label="Curriculum vitae"
								title="Download CV"
								// target="_blank"
								// rel="noreferrer"
							>
								Download CV{' '}
								<img
									src={aboutPdf}
									width="18px"
									height="18px"
									alt="Curriculum vitae"
								/>
							</a>
						</strong>
					</div>
					<p>
						I have received training in traditional philology from various
						departments at the <a href="/">Eötvös Loránd University (ELTE)</a>{' '}
						in Budapest, including Semitic and Arabic studies, Korean studies,
						Islamic studies, and Indology. In Hong Kong, I have studied corpus
						linguistics and computational linguistics at PolyU, and I also
						learned about various techniques in natural language processing,
						machine learning, artificial intelligence, and dash of data science.
					</p>
					<p>
						My PhD dissertation is titled Mapping the Language of Spices: A
						Corpus-Based, Philological Study on the Words of the Spice Domain,
						and it aims to be a linguistic account of the spice trade. It is
						about spices and spice names, and their diffusion around the globe,
						supervised by <a href="/">Prof. Chu-Ren Huang</a>, and funded by the
						<a href="/"> Hong Kong PhD Fellowship Scheme (HKPFS)</a>. The
						dissertation is accompanied by an online database I am currently
						working on,
						<a href="/">the Spice & Spice Terminology Database 1.0</a>.
					</p>
					<div className="about-thesis">
						<strong>
							<a
								href="https://www.google.co.in/"
								aria-label="Curriculum vitae"
								// target="_blank"
								// rel="noreferrer"
								title="Download PhD thesis"
							>
								Download PhD thesis{' '}
								<img
									src={aboutThesis}
									width="18px"
									height="18px"
									alt="Curriculum vitae"
								/>
							</a>
						</strong>
					</div>
					<hr />
					<div className="about-eduction">
						<h2 className="about-education-h2">
							Education
							<a href="#education" className="about-education-heading-h2">
								<img
									className="about-img-link"
									src={aboutLinkh2}
									alt="Link to heading"
								/>
							</a>
						</h2>
						<h3 className="about-degrees">
							Degrees
							<a href="#degrees" className="about-education-heading-h3">
								<img
									className="about-img-link"
									src={aboutLinkh3}
									alt="Link to heading"
								/>
							</a>
						</h3>
						<p>
							<strong>2019-2023 </strong> PhD in East Asian Linguistics, The
							Hong Kong Polytechnic University (PolyU) | Hong Kong
						</p>
						<p>
							<strong>2019-2023 </strong> PhD in East Asian Linguistics, The
							Hong Kong Polytechnic University (PolyU) | Hong Kong
						</p>
						<p>
							<strong>2019-2023 </strong> PhD in East Asian Linguistics, The
							Hong Kong Polytechnic University (PolyU) | Hong Kong
						</p>
						<p>
							<strong>2019-2023 </strong> PhD in East Asian Linguistics, The
							Hong Kong Polytechnic University (PolyU) | Hong Kong
						</p>
						<h3 className="about-scholarships">
							Scholarships
							<a
								href="#top"
								className="about-scholarships-h3"
								title="Move to top"
							>
								<img
									className="about-img-link"
									src={aboutLinkh3Sch}
									alt="Link to heading"
								/>
							</a>
						</h3>
						<p>
							<strong>2017–2018 </strong> Indonesian Language Course, Yogyakarta
							State University (UNY) | Yogyakarta
						</p>
						<blockquote>
							<p className="sch-p">
								via the
								<a href="https://www.google.co.in/">
									Darmasiswa Scholarship Program
								</a>
								from the Republic of Indonesia
							</p>
						</blockquote>
						<p>
							<strong>2017–2018 </strong>Indonesian Language Course, Yogyakarta
							State University (UNY) | Yogyakarta
						</p>
						<blockquote>
							<p className="sch-p">
								via the
								<a href="https://www.google.co.in/">
									Darmasiswa Scholarship Program
								</a>
								from the Republic of Indonesia
							</p>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
