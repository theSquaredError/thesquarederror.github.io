import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const Post = () => {
	const navigate = useNavigate();
	const [blogPosts, setBlogPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		let isActive = true;

		const loadPosts = async () => {
			try {
				const response = await fetch('/blog/posts.json');
				if (!response.ok) {
					throw new Error('Unable to load blog list.');
				}
				const posts = await response.json();
				if (isActive) {
					setBlogPosts(posts);
					setError('');
				}
			} catch (fetchError) {
				if (isActive) {
					setError(fetchError.message || 'Unable to load blog list.');
				}
			} finally {
				if (isActive) {
					setIsLoading(false);
				}
			}
		};

		loadPosts();

		return () => {
			isActive = false;
		};
	}, []);

	return (
		<div className="post" id="postid">
			<div className="post-header">
				<h1>Blog Posts</h1>
				<p>Running notes on LLM systems, experiments, and what worked in practice.</p>
			</div>

			{isLoading && (
				<div className="coming-soon">
					<p>Loading posts...</p>
				</div>
			)}

			{!isLoading && error && (
				<div className="coming-soon">
					<p>{error}</p>
				</div>
			)}
			
			{!isLoading && !error && (
				<div className="blog-list">
				{blogPosts.map((post) => (
					<article
						key={post.id}
						className="blog-post"
						role="link"
						tabIndex={0}
						onClick={() => navigate(`/post/${post.slug}`)}
						onKeyDown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								event.preventDefault();
								navigate(`/post/${post.slug}`);
							}
						}}
					>
						<div className="post-meta">
							<span className="post-date">{post.date}</span>
							<span className="read-time">{post.readTime}</span>
						</div>
						<h2 className="post-title">{post.title}</h2>
						<p className="post-excerpt">{post.excerpt}</p>
						<div className="post-tags">
							{post.tags.map((tag) => (
								<span key={tag} className="tag">{tag}</span>
							))}
						</div>
						<button
							className="read-more-btn"
							onClick={(event) => {
								event.stopPropagation();
								navigate(`/post/${post.slug}`);
							}}
						>
							Read More
						</button>
					</article>
				))}
				</div>
			)}

		</div>
	);
};

export default Post;
