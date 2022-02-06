/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';

const API_ADDRESS = 'https://v2.jokeapi.dev/joke/Any?amount=';

const Joke = ({ joke }) => {
    const { delivery, setup } = joke;

    return <p>{setup} <em>{delivery}</em></p>
}

export default class JokesGenerator extends Component {
    state = { joke: {}, jokes: [], jokeCount: 0 };

    updateJokeCount = event => {
        this.setState({ jokeCount: event.target.value });
    }

    fetchJokes = () => {
        fetch(`${API_ADDRESS}${this.state.jokeCount}`)
            .then(response => response.json())
                .then(json => {
                    let tempArr = [];
                    
                    if (this.state.jokeCount <= 1) {
                        tempArr.push(json);
                    }

                    this.setState({ jokes: this.state.jokeCount <= 1 ? tempArr : json.jokes})
                });
    }
    

    render() {
        console.log(this.state.jokes);

        return (
            <div>
                <StyledJokeInputContainer>
                    <div>
                        <input 
                            className="form-control" 
                            type="text"
                            onChange={this.updateJokeCount}
                        />
                    </div>
                    <button 
                        className="btn btn-sm btn-success"
                        onClick={this.fetchJokes}
                    >
                        Get Jokes!
                    </button>
                    <br />
                    <hr />
                </StyledJokeInputContainer>
                <div>
                    {this.state.jokes.map(joke => <Joke key={joke.id} joke={joke} />)}
                </div>
            </div>
        )
    }
}

const StyledJokeInputContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 10,
});