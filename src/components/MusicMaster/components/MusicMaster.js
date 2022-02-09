import React, { Component } from 'react';

class MusicMaster extends Component {
    state = { artistQuery: '' }

    updateArtistQuery = event => {
        this.setState({ artistQuery: event.target.value });
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }       
    }

    searchArtist = () => {
        console.log('this.state', this.state);
    }

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <div className='input-group mb-3'>
                    <input 
                        className='form-control' 
                        placeholder='Search an artist' 
                        onChange={this.updateArtistQuery}
                        onKeyPress={this.handleKeyPress}
                    />
                    <div className="input-group-prepend">
                        <button className='btn btn-primary' onClick={this.searchArtist}>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicMaster;