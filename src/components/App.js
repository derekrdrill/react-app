import React from 'react';
import Projects from './Projects/components/Projects';
import SocialProfiles from './SocialProfiles/components/SocialProfiles';
import ProfileImage from './ProfileImage/components/ProfileImage';
import Bio from './Bio/components/Bio';

const App = () => (
    <div>
        <ProfileImage />
        <Bio />
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
    </div>
)

export default App;

