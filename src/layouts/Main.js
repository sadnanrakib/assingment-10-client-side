import React from 'react';
import { Outlet } from 'react-router-dom';
import Courses from '../Components/Courses/Courses';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;