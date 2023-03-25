import React from 'react';
import Flow from "../components/Flow";
import Header from '../components/Header';
import LeftNav from '../components/LeftNav'
import NavApp from '../components/NavApp'

const Mylibrary = () => {
    return (
        <div className='MyLibrary'>
           <LeftNav/>
           <Header/>
           <NavApp />
           <Flow />
        </div>
    );
};

export default Mylibrary;