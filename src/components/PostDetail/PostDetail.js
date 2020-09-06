import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);

    const postStyle = {
        marginBottom: '20px',
        marginLeft: '100px',
        padding: '20px',
        width: '70%',
        border: '1px solid gray'
    }

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])



    const [cmnt, setCmnt] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCmnt(data));

    },[])

    return (
        <div>
            <h1>Posts</h1>
            <div style ={postStyle}>
            <p>This is detail : {postId}</p>
            <p><strong>BODY: </strong>{post.body}</p>
            <p><strong>Title : </strong>{post.title}</p>
            </div>
            <div>
                <h1>Comments</h1>
                {
                    cmnt.map(comment => <Comment comment ={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default PostDetail;