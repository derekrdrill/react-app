import React, { Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import ProfileImage from './ProfileImage';
import Bio from './Bio/Bio';

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

