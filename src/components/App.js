import React from 'react';
import Projects from './Projects/components/Projects';
import SocialProfiles from './SocialProfiles/components/SocialProfiles';
import ProfileImage from './ProfileImage/components/ProfileImage';
import Bio from './Bio/components/Bio';
import Jokes from './Jokes/components/Jokes';

const App = () => (
    <div>
        <ProfileImage />
        <Bio />
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        <hr />
        <Jokes />
    </div>
)

export default App;

