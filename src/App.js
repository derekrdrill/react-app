import React, { Component} from 'react';

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log(regularClassInstance);
console.log(componentClassInstance);
export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Derek. I am  a web developer.</p>
                <p>I am looking forward to refreshing with this course</p>
            </div>
        )
    }
}

