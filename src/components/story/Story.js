import React, { Component } from 'react';

class Story extends Component {
    render() {
        return (
            <div>
                Story of {this.props.timeOfStory}
            </div>
        );
    }
}

export default Story;
