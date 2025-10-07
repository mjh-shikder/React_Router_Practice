import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../user/user';


const Users = () => {

    const users = useLoaderData();
    console.log(users);
    

    return (
        <div>
            <h2>this is users page </h2>

            <div>
                {
                    users.map(user => <User key={user.id} user={user}></User> )
                }
            </div>

        </div>
    );
};

export default Users;