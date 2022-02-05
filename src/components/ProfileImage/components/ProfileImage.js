import React from 'react';
import profile from '../../../assets/profile.jpg';
import styled from 'styled-components';

const ProfileImage = () => <StyledImage src={profile} alt='profile-image' />;

export default ProfileImage;

const StyledImage = styled.img({
    width: 225,
    height: 235,
    borderRadius: 200,
    marginBottom: 35,
});

