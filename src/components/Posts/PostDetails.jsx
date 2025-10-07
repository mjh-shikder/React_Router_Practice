import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {title, body} = post
    

    return (
        <div className='border-2 border-emerald-800 rounded-xl p-5'>
            <h2 className='text-2xl text-amber-200 mb-5'>{title}</h2>
            <p className='mb-8'> {body}</p>
            <button onClick={()=> navigate(-1) }>Go Back</button>
        </div>
    );
};

export default PostDetails;