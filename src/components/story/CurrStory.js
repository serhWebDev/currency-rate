import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TimePanel from './TimePanel';
import Story from './Story';

class CRatePB extends Component {

    constructor(props){
        super(props);
        this.state = {
            currStory: [],
            storyData: '01.01.2019'
        };
    };

    getStoryData = async (e) => {
        let tthisTime = e.target.elements.thisTime.value;
        console.log(tthisTime);
        this.setState({storyData: 'dfvbb'});
    };

    render() {
        return (
            <section className={'container'}>
                <h4>
                    <span><Link to={`/`} style={linkStyle}><i className="material-icons">arrow_back</i></Link></span>
                    <span style={{float:'right'}}>Архив курсов валют ПриватБанка, НБУ</span>
                </h4>
                <TimePanel getStoryData={this.getStoryData}/>
                <Story currExchange={this.state.currExchange}
                       timeOfStory = {this.state.storyData}/>
            </section>
        );
    }
}

const linkStyle = {
    textDecoration: 'none',
    color: 'lawngreen',
};

export default CRatePB;
