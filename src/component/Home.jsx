import React from 'react';
import Header from './errorPage/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
       <div className="">
        <h1>This is Home Component</h1>
        <Header></Header>
        <Outlet></Outlet>

        <h1>This is Home Page Footer</h1>
       </div>

    );
};

export default Home;