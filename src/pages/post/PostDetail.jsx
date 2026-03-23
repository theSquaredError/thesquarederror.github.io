import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import './styles.scss';

const PostDetail = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState(null);
	const [content, setContent] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		let isActive = true;

		const loadPost = async () => {
			try {
				setIsLoading(true);
				const postsResponse = await fetch('/blog/posts.json');
				if (!postsResponse.ok) {
					throw new Error('Unable to load post metadata.');
				}

				const posts = await postsResponse.json();
				const selectedPost = posts.find((item) => item.slug === slug);

				if (!selectedPost) {
					if (isActive) {
						setPost(null);
						setError('The requested article does not exist.');
					}
					return;
				}

				const contentResponse = await fetch(`/blog/${selectedPost.contentFile}`);
				if (!contentResponse.ok) {
					throw new Error('Unable to load post content.');
				}

				const markdown = await contentResponse.text();

				if (isActive) {
					setPost(selectedPost);
					setContent(markdown);
					setError('');
				}
			} catch (fetchError) {
				if (isActive) {
					setError(fetchError.message || 'Unable to load post.');
				}
			} finally {
				if (isActive) {
					setIsLoading(false);
				}
			}
		};

		loadPost();

		return () => {
			isActive = false;
		};
	}, [slug]);

	if (isLoading) {
		return (
			<div className="post" id="postid">
				<div className="coming-soon">
					<p>Loading post...</p>
				</div>
			</div>
		);
	}

	if (!post || error) {
		return (
			<div className="post" id="postid">
				<div className="post-header">
					<h1>Post not found</h1>
					<p>{error || 'The requested article does not exist.'}</p>
					<button className="read-more-btn" onClick={() => navigate('/post')}>
						Back to posts
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="post" id="postid">
			<article className="blog-post">
				<div className="post-meta">
					<span className="post-date">{post.date}</span>
					<span className="read-time">{post.readTime}</span>
				</div>

				<h1 className="post-title">{post.title}</h1>

				<div className="post-tags">
					{post.tags.map((tag) => (
						<span key={tag} className="tag">
							{tag}
						</span>
					))}
				</div>

				<div className="markdown-content">
					<ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
						{content}
					</ReactMarkdown>
				</div>

				<div style={{ marginTop: '2rem' }}>
					<button className="read-more-btn" onClick={() => navigate('/post')}>
						Back to all posts
					</button>
				</div>
			</article>
		</div>
	);
};

export default PostDetail;
