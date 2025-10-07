import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from './UserDetails2';

const User = ({ user }) => {

    const [showInfo, setShowInfo] = useState(false);
    const [visitHome, setVisitHome] =useState(false)
    
    const { id, name, email, phone } = user
    
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    if (visitHome) {
        return <Navigate to={'/'}></Navigate>
    }

    return (
        <div className='border-1 rounded-xl mb-3.5 p-4 border-amber-200 '>
            <h3>{name} </h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link className='mr-3.5' to={`/users/${id}`}>Show More</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Details'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading....</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }
            <button onClick={()=> setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;