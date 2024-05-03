import './styles.scss';
import github from '../../asset/github.svg';
import scholar from '../../asset/google-scholar.svg';
import linkedin from '../../asset/linkedin.svg';
import resume from '../../asset/file-solid-cv.svg';
import profile from '../../asset/profile.png';
import resumePdf from '../../asset/VikasResume.pdf';

const Home = () => {
	// const [openPdf, setOpenPdf] = useState(false);
	return (
		<div className="container">
			<div className="home">
				<div className="home-main">
					{/* {openPdf && (
					<iframe
						src={resumePdf}
						width="100%"
						height="500px"
						title="ResumePdf"
					/>
				)} */}

					<div className="home-top">
						<div className="avatar">
							<img src={profile} alt="Img"></img>
						</div>
						<h1>Vikas Kumar</h1>
						<h2>Digital Philology & Linguistics</h2>
					</div>
					<div className="home-bottom">
						<div>
							<a
								href="https://github.com/theSquaredError"
								class="hover-name"
								aria-label="Github"
								target="_blank"
								rel="noreferrer"
								// title="Github"
								data-name="GitHub"
							>
								<img className="svg_img" src={github} alt="Github" />
							</a>
						</div>
						<div>
							<a
								href="/"
								// class="hover-name"
								aria-label="Google Scholar"
								target="_blank"
								rel="noreferrer"
								// title="Google Scholar"
								data-name="Google Scholar"
							>
								<img className="svg_img" src={scholar} alt="Google Scholar" />
							</a>
						</div>
						<div>
							<a
								href="https://www.linkedin.com/in/vizzard110/"
								class="hover-name"
								aria-label="Linkedin"
								target="_blank"
								rel="noreferrer"
								// title="Linkedin"
								data-name="Linkedin"
							>
								<img className="svg_img" src={linkedin} alt="Linkedin" />
							</a>
						</div>
						<div>
							<a
								href={resumePdf}
								class="hover-name"
								aria-label="Curriculum vitae"
								target="_blank"
								rel="noreferrer"
								data-name="Resume"
								// title="Download Resume"
							>
								<img className="svg_img" src={resume} alt="Curriculum vitae" />
							</a>
						</div>
					</div>
				</div>
				{/* <Footer /> */}
			</div>
		</div>
	);
};

export default Home;
