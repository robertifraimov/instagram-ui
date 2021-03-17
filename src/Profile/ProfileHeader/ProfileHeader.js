
import React, { useEffect, useState } from 'react';
import Avatar from '../../common/Avatar/Avatar';
import { UserService } from '../../services/user.service';
import './ProfileHeader.scss';


function ProfileHeader({ username }) {

    const [user, setUser] = useState({});

    useEffect(() => {
        async function getUser() {
            const user = await UserService.get(username);
            setUser(user);
        } 
        getUser();
    }, [username])

    return (

            <div class="container">

                <div className="profile">

                    <div class="profile-image">
                        <Avatar image={user.avatar} size="lg" ></Avatar>
                    </div>

                    <div class="profile-user-settings">
                        <h2 class="profile-user-name">{user.username}</h2> 
                        <button class="btn profile-edit-btn">Edit Profile</button>
                    </div>

                    <div class="profile-stats">
                        <ul>
                            <li><span class="profile-stat-count">164</span> posts</li>
                            <li><span class="profile-stat-count">188</span> followers</li>
                            <li><span class="profile-stat-count">206</span> following</li>
                        </ul>
                    </div>

                    <div class="profile-bio">
                        <p><span class="profile-real-name">Robert</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
                    </div>

                </div>
                
            </div>

    );
}


export default ProfileHeader;