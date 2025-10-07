import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    
    const { id, title } = post; 
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div className='border-1 border-b-blue-400 border-blue-500 rounded-xl mb-3.5 p-4'>
            <h2>{title} </h2>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of: {id }</button>
        </div>
    );
};

export default Post;