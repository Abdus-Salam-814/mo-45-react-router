import React from 'react';
import Header from './errorPage/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
const Home = () => {
const navigation = useNavigation();

    return (
       <div className="">
        <h1>This is Home Component</h1>
        <Header></Header>

        {
            navigation.state === "loading" ? 
            <p>Loding...............</p> : 
            <Outlet></Outlet>
        }
{/* <Outlet></Outlet> */}
       

        <h1>This is Home Page Footer</h1>
       </div>

    );
};

export default Home;