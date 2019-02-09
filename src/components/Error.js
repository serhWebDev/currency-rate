import React, { Component } from 'react'


class Error extends Component {

    render() {
        return (
            <section className={'container'} style={errorStyle}>
                <h1><b>Sorry, error...(</b></h1>
            </section>
        );
    }
}

const errorStyle = {
    color: 'green'
};

export default Error;