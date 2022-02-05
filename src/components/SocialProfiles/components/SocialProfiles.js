/* eslint-disable react/prop-types */
import React from 'react';
import SOCIAL_PROFILES from '../constants/SOCIAL_PROFILES'; 
import styled from 'styled-components';

const SocialProfile = props => {
    const { image, link, description } = props.socialProfile;

    return (
        <SocialProfileContainer>
            <a href={link} target="_blank" rel="noreferrer">
                <SocialProfileImage src={image} alt='social-profile' title={description} />
            </a>
        </SocialProfileContainer>
    )
}

const SocialProfiles = () => (
    <div>
        <h2>Let&rsquo;s Connect</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE =>
                    <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                )
            }
        </div>
    </div>
)

export default SocialProfiles;

const SocialProfileImage = styled.img({
    width: 60,
    height: 60,
    borderRadius: 17,
});

const SocialProfileContainer = styled.div({
    display: 'inline-block',
    width: 75,
    margin: 10,
});