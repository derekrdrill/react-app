import React from 'react';
import Projects from './Projects/components/Projects';
import SocialProfiles from './SocialProfiles/components/SocialProfiles';
import ProfileImage from './ProfileImage/components/ProfileImage';
import Bio from './Bio/components/Bio';
import Header from './Header/components/Header';

const App = () => (
    <div>
        <Header />
        <ProfileImage />
        <Bio />
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
    </div>
)

export default App;

