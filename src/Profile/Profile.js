
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../common/Post/Post';
import { UserService } from '../services/user.service';
import './Profile.scss';
import ProfileHeader from './ProfileHeader/ProfileHeader';


function Profile() {

    const { username } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function  getPosts() {
            try {
            const posts = await UserService.getPosts(username);
            setPosts(posts);
            } catch (err) {
                console.log(err)
            }
        }
        getPosts();
    }, [username]);

    return (
        <>
        <ProfileHeader username = {username} postNum = {posts.length} />
        <hr/>

        <div class="container">

            <div className="gallery">
                
                    {posts.map(post => (
                        <Post key={post._id} data={post} />
                        
                    ))}     
            </div>

        </div>
        </>
    );
}

export default Profile;