import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

export default function Home() {
    return (
        <div className="home">
            <Hero />
            <Navbar />
        </div>
    )
}