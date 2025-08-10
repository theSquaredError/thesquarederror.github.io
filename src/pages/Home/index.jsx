import './styles.scss';
import github from '../../asset/github.svg';
import scholar from '../../asset/google-scholar.svg';
import linkedin from '../../asset/linkedin.svg';
import resume from '../../asset/file-solid-cv.svg';
import profile from '../../asset/profile.heic';
import resumePdf from '../../asset/VikasResume.pdf';

const Home = () => {
	// const [openPdf, setOpenPdf] = useState(false);
	return (
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
					<h2>Reasoning & Planning in LLMs, Reinforcment Learning</h2>
				</div>
				<div className="home-bottom">
					<div>
						<a
							href="https://github.com/theSquaredError"
							aria-label="Github"
							target="_blank"
							rel="noreferrer"
						>
							<img className="svg_img" src={github} alt="Github" />
						</a>
					</div>
					<div>
						<a
							href="https://scholar.google.com/citations?user=52jst9wAAAAJ&hl=en"
							aria-label="Google Scholar"
							target="_blank"
							rel="noreferrer"
						>
							<img className="svg_img" src={scholar} alt="Google Scholar" />
						</a>
					</div>
					<div>
						<a
							href="https://www.linkedin.com/in/vizzard110/"
							target="_blank"
							rel="noreferrer"
							aria-label="Linkedin"
						>
							<img className="svg_img" src={linkedin} alt="Linkedin" />
						</a>
					</div>
					<div>
						<a
							href={resumePdf}
							aria-label="Curriculum vitae"
							target="_blank"
							rel="noreferrer"
						>
							<img className="svg_img" src={resume} alt="Curriculum vitae" />
						</a>
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
