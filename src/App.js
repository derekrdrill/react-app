import React, { Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

export default class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => { 
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' />
                <h1>Hello!</h1>
                <p>My name is Derek. I am  a web developer.</p>
                <p>I am looking forward to refreshing with this course</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Charlotte, and code every day.</p>
                            <p>My favorite languages are JavaScript and Typescript</p>
                            <p>Besides coding, I love my dog, staying active, sports and cooking!</p>
                            <button className='btn btn-primary btn-sm' onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button className='btn btn-primary btn-sm' onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

