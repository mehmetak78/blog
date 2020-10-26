import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({postId}) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    console.log(postId)
    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });


  return <div>
    Mehmet
    <ul>{renderedComments}</ul>
  </div>
};

export default CommentList;