import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import BIO_ATTRIBUTES from '../constants/BIO_ATTRIBUTES';
export default class BioAttribute extends Component {
    state = { attrIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }

    componentWillUnmount() {
        clearInterval(this.attrIndex);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        setInterval(() => {
            const attrIndex = (this.state.attrIndex + 1) % BIO_ATTRIBUTES.length;
            
            this.setState({ attrIndex, fadeIn: true });

            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
    }
    
    
    render() {
        const { fadeIn, attrIndex } = this.state;
        const bioAttribute = BIO_ATTRIBUTES[attrIndex];

        return (
            <BioAttributeFade fadeIn={fadeIn}>{bioAttribute}</BioAttributeFade>
        )
    }
}

const fadeInKeyFrame = keyframes`
    from {opacity: 0}
    to {opacity: 100}
`;

const fadeOutKeyFrame = keyframes`
    from {opacity: 100}
    to {opacity: 0}
`;

const BioAttributeFade = styled.p`
    opacity: ${props => props.fadeIn ? 100 : 0};
    animation-name: ${props => props.fadeIn ? css`${fadeInKeyFrame}` : css`${fadeOutKeyFrame}`};
    animation-duration: 2s;
`;

