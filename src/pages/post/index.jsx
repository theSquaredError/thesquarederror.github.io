import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const Post = () => {
	const navigate = useNavigate();
	return (
		<div className="post" id="postid">
			<h1>
				<sapn id="post-h1"> Post </sapn>
			</h1>
			<div className="post-div">
				<h3>August 7, 2023</h3>
				<span
					onClick={() => navigate('/post')}
					className="span"
					id="post-link1"
				>
					Nutmeg in the flag of Grenada
				</span>
			</div>
			<div className="post-div">
				<h3>August 7, 2023</h3>
				<span
					onClick={() => navigate('/post')}
					className="span"
					id="post-link2"
				>
					Nutmeg in the flag of Grenada
				</span>
			</div>
			<div className="post-div">
				<h3>August 7, 2023</h3>
				<span
					onClick={() => navigate('/post')}
					className="span"
					id="post-link3"
				>
					Nutmeg in the flag of Grenada
				</span>
			</div>
			<div className="post-div">
				<h3>August 7, 2023</h3>
				<span
					onClick={() => navigate('/post')}
					className="span"
					id="post-link4"
				>
					Nutmeg in the flag of Grenada
				</span>
			</div>
			<div className="post-div">
				<h3>August 7, 2023</h3>
				<span
					onClick={() => navigate('/post')}
					className="span"
					id="post-link5"
				>
					Nutmeg in the flag of Grenada
				</span>
			</div>
		</div>
	);
};

export default Post;
