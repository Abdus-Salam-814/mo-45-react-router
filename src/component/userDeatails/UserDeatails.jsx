import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDeatails = () => {
    const userDit = useLoaderData();
    const {name, email, phone, website} = userDit;
    return (
        <div>
            <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <h1>{website}</h1>
        </div>
    );
};

export default UserDeatails;