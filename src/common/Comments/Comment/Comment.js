import React from 'react'
import Avatar from '../../Avatar/Avatar';


function Comment ({comment}) {
    return(
        <div>
          <Avatar image={comment.user.avatar}></Avatar>
          <p>{comment.content}</p>
          <p>{comment.createdAt}</p>
        </div>
    )
}

export default Comment;