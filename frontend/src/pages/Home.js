import React from 'react';
import Meme from '../components/Meme';
import Navbar from '../components/Navbar';
import Citation from '../components/Citations';
import Citationsb from '../components/Citationsb';
import Idee from '../components/Idee';
import CardHandler from '../components/CardHandler';
import Qr from '../components/Qr';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Meme/>
            <Citation/>
            <Citationsb/>
            <Idee/>
            <CardHandler/>
            <Qr/>
        </div>
    );
};

export default Home;