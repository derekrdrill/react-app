import React, { Component } from 'react';

const BIO_ATTRIBUTES =[
    'I am a web developer',
    'I live in Charlotte, NC',
    'My favorite languages are JavaScript and Typescript',
    'Besides coding, I love my dog, staying active, sports and cooking!',
];

export default class BioAttribute extends Component {
    state = { attrIndex: 0};

    componentDidMount() {
        this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            const attrIndex = (this.state.attrIndex + 1) % BIO_ATTRIBUTES.length;

            this.setState({ attrIndex });
        }, 4000);
    }

    render() {
        const bioAttribute = BIO_ATTRIBUTES[this.state.attrIndex];

        return <p>{bioAttribute}</p>;
    }
}