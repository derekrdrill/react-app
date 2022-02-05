import React, { Component } from 'react';
import profile from '../../../assets/profile.jpg';
import styled from 'styled-components';

export default class ProfileImage extends Component {
    render() {
        return <StyledImage src={profile} alt='profile-image' />
    }
}

const StyledImage = styled.img({
    width: 225,
    height: 235,
    borderRadius: 200,
    marginBottom: 35,
});

