import React from 'react';

const Login = () => {
    return (
        <div className='w-3/4 mx-auto space-y-4'>
            <h1>Log in here </h1>
            <input type="text" className='border-2'  placeholder='Write Your Email' />
            <br />
            <input type="password" className='border-2'  placeholder='Write Your PassWord' />
            <br />
            <button className="btn font-extrabold btn-primary btn-dash ">
                Login
            </button>
        </div>
    );
};

export default Login;