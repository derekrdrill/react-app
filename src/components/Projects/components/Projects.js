/* eslint-disable react/prop-types */
import React from 'react';
import PROJECTS from '../constants/PROJECTS';
import styled from 'styled-components';

const Project = props => {
    const { image, description, link } = props.project;

    return(
        <ProjectContainer>
            <a href={link}>
                <ProjectImage src={image} alt='project' />
            </a>
            <ProjectsDescription>{description}</ProjectsDescription>
        </ProjectContainer>
    )
}

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => 
                    <Project key={PROJECT.id} project={PROJECT} />
                )
            }
        </div>
    </div>
)

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
