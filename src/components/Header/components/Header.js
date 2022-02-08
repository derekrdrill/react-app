/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({ children }) => {
    return (
        <div>
            <div>
                <InlineHeaders>
                    <Link to='/'>Home</Link>
                </InlineHeaders>
                <InlineHeaders>
                    <Link to='/jokes'>Jokes</Link>
                </InlineHeaders> 
            </div>
            {children}
        </div>
    )
}

export default Header;

const InlineHeaders = styled.h3({
    display: 'inline-block',
    margin: 10,
    marginBottom: 30,
});