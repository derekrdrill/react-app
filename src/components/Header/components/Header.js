/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({ children }) => {
    return (
        <div>
            <div>
                <StyledH3>
                    <Link to='/'>Home</Link>
                </StyledH3>
                <StyledH3>
                    <Link to='/jokes'>Jokes</Link>
                </StyledH3> 
                <StyledH3>
                    <Link to='/music-master'>Music Master</Link>
                </StyledH3> 
            </div>
            {children}
        </div>
    )
}

export default Header;

const StyledH3 = styled.h3({
    display: 'inline-block',
    margin: 10,
    marginBottom: 30,
});