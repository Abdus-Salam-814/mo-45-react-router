import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDeatails = () => {
    const userDit = useLoaderData();
    const {name, email, phone, website} = userDit;
    const nevigate = useNavigate();
    function goBackBtn(){
        nevigate(-1);
    }
    return (
        <div>
            <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <h1>{website}</h1>
      <button onClick={() => goBackBtn()}  className='btn btn-warning'>Go Back</button>
        </div>
    );
};

export default UserDeatails;