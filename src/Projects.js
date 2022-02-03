/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PROJECTS from './data/projects';
import styled from 'styled-components';

class Project extends Component {
    render() {
        const { image, description, link } = this.props.project;

        return(
            <ProjectContainer>
                <ProjectImage src={image} alt='project' />
                <p>{description}</p>
                <a href={link}>{link}</a>
            </ProjectContainer>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <ProjectsContainer>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return <Project key={PROJECT.id} project={PROJECT} />;
                        })
                    }
                </div>
            </ProjectsContainer>
        )
    }
}

export default Projects;

const ProjectImage = styled.img({
    width: 200,
    height: 120,
});

const ProjectContainer = styled.div({
    display: 'inline-block',
    width: 300,
    margin: 10,
});

const ProjectsContainer = styled.div({
    textAlign: 'center',
});
