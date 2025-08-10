import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const Post = () => {
	const navigate = useNavigate();
	
	// Sample blog data - you can replace this with your own blogs later
	const blogPosts = [
		{
			id: 1,
			date: 'December 15, 2024',
			title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
			excerpt: 'An introduction to the fundamentals of machine learning, covering key concepts, algorithms, and practical applications for beginners.',
			readTime: '5 min read',
			tags: ['Machine Learning', 'AI', 'Beginner']
		}
	];

	return (
		<div className="post" id="postid">
			<div className="post-header">
				<h1>Blog Posts</h1>
				<p>Thoughts, tutorials, and insights on technology and research</p>
			</div>
			
			<div className="blog-list">
				{blogPosts.map((post) => (
					<article key={post.id} className="blog-post">
						<div className="post-meta">
							<span className="post-date">{post.date}</span>
							<span className="read-time">{post.readTime}</span>
						</div>
						<h2 className="post-title">{post.title}</h2>
						<p className="post-excerpt">{post.excerpt}</p>
						<div className="post-tags">
							{post.tags.map((tag, index) => (
								<span key={index} className="tag">{tag}</span>
							))}
						</div>
						<button 
							className="read-more-btn"
							onClick={() => navigate(`/post/${post.id}`)}
						>
							Read More →
						</button>
					</article>
				))}
			</div>
			
			{/* Placeholder for when you add more blogs */}
			<div className="coming-soon">
				<p>More blog posts coming soon! I'm working on sharing insights about my research, projects, and experiences.</p>
			</div>
		</div>
	);
};

export default Post;
