import React, { Component } from 'react';

export default class Button extends Component {
    constructor() {
        super();
        this.state = {
            buttonText: "Жми"
        };
    }
    handleClick = () => {
        this.setState({ buttonText: "Я нажал кнопку" });
    }
    render() {
        return <button onClick={this.handleClick}>{this.state.buttonText}</button>
    }
}