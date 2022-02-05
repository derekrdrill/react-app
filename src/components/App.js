import React, { Component} from 'react';
import Projects from './Projects/components/Projects';
import SocialProfiles from './SocialProfiles/components/SocialProfiles';
import ProfileImage from './ProfileImage/components/ProfileImage';
import Bio from './Bio/components/Bio';

export default class App extends Component {
    render() {
        return (
            <div>
                <ProfileImage />
                <Bio />
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

