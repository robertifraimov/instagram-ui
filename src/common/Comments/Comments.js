import React, { useEffect, useState} from 'react';
import CommentAdd from './CommentAdd/CommentAdd';
import Comment from './Comment/Comment';
import {PostService} from '../../services/post.service';

function Comments({postId}) {

const [comments, setComments] = useState([]);

useEffect(()=>{
    async function getComments(){

        try {
            const commentsArr = await PostService.getComments(postId)
            setComments(commentsArr)
        } catch(err) {
            console.log(err)
        }
    
    }
    getComments();
}, [postId]);

 function onCommentAdd(comment) {
    setComments([...comments, comment]);
 }

    return(
        <div>
            <h2 className="h5">Comments</h2>
        <div className="my-2">
            {comments.map(comment => <Comment key={comment._id} comment={comment}/>)}
        </div>
            <CommentAdd postId={postId} onCommentAdd={onCommentAdd}/>
        </div>
    )
}

export default Comments;