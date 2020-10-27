import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = (props) => {
    const [comments, setComments] = useState([]);
    const {postId} = props;

    const fetchData = async () => {
        const res = await axios.get(
            `http://localhost:4001/posts/${postId}/comments`
        );

        setComments(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>;
    });

    return <ul>{renderedComments}</ul>;
};

export default CommentList;