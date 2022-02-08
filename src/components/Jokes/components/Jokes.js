import React from 'react';
import JokesGenerator from './JokesGenerator';
import Header from '../..//Header/components/Header';


const Jokes = () => (
    <div>
        <Header />
        <h2>Highlighted Joke</h2>
        <JokesGenerator />
    </div>
)

export default Jokes;