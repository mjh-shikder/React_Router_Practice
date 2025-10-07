import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    
    const {id, name, email, phone} = user

    return (
        <div className='border-1 rounded-xl mb-3.5 p-4 border-amber-200 '>
            <h3>{name} </h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/users/${id}`}>Show More</Link>
        </div>
    );
};

export default User;