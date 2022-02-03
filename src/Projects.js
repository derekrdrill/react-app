import React, { Component } from 'react';
import PROJECTS from './data/projects';
import styled from 'styled-components';

class Project extends Component {
    render() {
        const { title, image, description, link } = this.props.project;

        return(
            <ProjectContainer>
                <h3>{title}</h3>
                <StyledImage src={image} alt='profile' />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </ProjectContainer>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                                <Project key={PROJECT.id} project={PROJECT} />
                            ); 
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;

const StyledImage = styled.img({
    width: 200,
    height: 120,
});

const ProjectContainer = styled.div({
    display: 'inline-block',
    width: 300,
    margin: 10,
});
