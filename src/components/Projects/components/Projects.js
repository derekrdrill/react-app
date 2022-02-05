/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PROJECTS from '../constants/PROJECTS';
import styled from 'styled-components';

class Project extends Component {
    render() {
        const { image, description, link } = this.props.project;

        return(
            <ProjectContainer>
                <a href={link}>
                    <ProjectImage src={image} alt='project' />
                </a>
                <ProjectsDescription>{description}</ProjectsDescription>
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
                            return <Project key={PROJECT.id} project={PROJECT} />;
                        })
                    }
                </div>
            </div>
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

const ProjectsDescription = styled.p({
    fontSize: 16,
});
