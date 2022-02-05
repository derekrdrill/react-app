import React, { Component } from 'react';
import Bio_Attribute from './comoponents/BioAttribute';

export default class Bio extends Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Derek</p>
                <Bio_Attribute />
            </div>
        )
    }    
}