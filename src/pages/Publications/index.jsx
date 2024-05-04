import React from 'react';
import './styles.scss';
import thesisInfo from '../../asset/circle-info-solid.svg';
import thesisInfo1 from '../../asset/circle-info-solid.svg';
import thisesPdf from '../../asset/VikasResume.pdf';
import thisesPdf1 from '../../asset/VikasResume.pdf';

const Publications = () => {
	const openWindow = () => {
		window.open('https://www.google.co.in/', '_parent');
	};
	const openWindow1 = () => {
		window.open('https://www.google.co.in/', '_parent');
	};
	return (
		<div className="container">
			<div className="publication" id="publicationid">
				<div className="content">
					<section className="pub-sec">
						<article>
							<header>
								<h1 className="title">
									<a className="header-link" href="/Publications">
										Publications
									</a>
								</h1>
							</header>
							<div>
								<p>
									Parti, G. (2023){' '}
									<span onClick={openWindow} className="pub-span" id="pub-p1">
										Mapping the Language of Spices A Corpus-Based, Philological
										Study on the Words of the Spice Domain{' '}
									</span>
									[Ph.D. thesis]. The Hong Kong Polytechnic University.{' '}
									<a
										className="pub-img-a"
										href={thisesPdf}
										aria-label="Curriculum vitae"
										target="_parent"
										rel="noreferrer"
										title="download thises"
									>
										<img src={thesisInfo} alt="thesis" />
									</a>
								</p>
							</div>
							<div>
								<p>
									Parti, G. (2023){' '}
									<span onClick={openWindow1} className="pub-span" id="pub-p2">
										Mapping the Language of Spices A Corpus-Based, Philological
										Study on the Words of the Spice Domain{' '}
									</span>
									[Ph.D. thesis]. The Hong Kong Polytechnic University.{' '}
									<a
										className="pub-img-a"
										href={thisesPdf1}
										aria-label="Curriculum vitae"
										target="_parent"
										rel="noreferrer"
										title="download thises"
									>
										<img src={thesisInfo1} alt="thesis" />
									</a>
								</p>
							</div>
						</article>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Publications;
