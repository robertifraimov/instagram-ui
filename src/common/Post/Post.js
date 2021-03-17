
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import './Post.scss';
import PostDate from './PostDate/PostDate';

function Post({data}) {
    return(
       <div className="col-12 col-md-4">
			<article className="Post">
				<header>
					<div className="Post__user">
						<Link to={'/profile/' + data.user.username}>
							<Avatar size="md" image={data.user.avatar} />
							<span className="Post__user__username">{data.user.username}</span>
						</Link>
					</div>
					<div className="Post__date">
						<PostDate date={data.createdAt} />
					</div>
				</header>
				<div className="Post__image">
					<Link to={'/post/' + data._id}>
						<img src={'data:; base64,' + data.image} className="Post__image" alt="" />
					</Link>
				</div>
				<div className="Post__content">
					<h1 className="Post__description">{data.description}</h1>
				</div>
			</article>
		</div>
    )
}

export default Post;