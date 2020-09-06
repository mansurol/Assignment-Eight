import React, { useState, useEffect } from 'react';
import './Comment.css'
const Comment = (props) => {
    const {name, email,id,body}= props.comment

    const [image, setImage] = useState([]);

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/photos/${props.comment.id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setImage(data));
    })

    const {thumbnailUrl} = image;

    return (
        <div className = "comment">
              <div className = "img-style">
                <img src={thumbnailUrl} alt=""/>
            </div>
            <div className = "comment-style">
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>ID: {id}</h3>
            <h3>Body: {body}</h3>
            </div>
          
            
        </div>
    );
};

export default Comment;