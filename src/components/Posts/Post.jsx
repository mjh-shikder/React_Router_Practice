import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
    
    const { id, title } = post; 

    return (
        <div className='border-1 border-b-blue-400 border-blue-500 rounded-xl mb-3.5 p-4'>
            <h2>{title} </h2>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;