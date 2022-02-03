/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';
import styled from 'styled-components';

class SocialProfile extends Component {
    render() {
        const { image, link, description } = this.props.socialProfile;

        return(
            <SocialProfileContainer>
                <a href={link} target="_blank" rel="noreferrer">
                    <SocialProfileImage src={image} alt='social-profile' title={description} />
                </a>
            </SocialProfileContainer>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <SocialProfilesContainer>
                <h2>Let&rsquo;s Connect</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
                        })
                    }
                </div>
            </SocialProfilesContainer>
        )
    }
}

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

const SocialProfilesContainer = styled.div({
    textAlign: 'center',
});