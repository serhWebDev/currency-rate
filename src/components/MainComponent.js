import React, { Component } from 'react';
import axios from 'axios';

import config from './config';
import Currencys from './Currencys';

class MainComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            currExchange: [],
        };
    };

    componentWillMount() {
        axios.get(config.apiUrl)
            .then(res => this.setState({
                currExchange: res.data.map( (el, i) => {
                    let currency = {
                        ccy: el.ccy,
                        base_ccy: el.base_ccy,
                        buy: el.buy,
                        sale: el.sale
                    };
                    return currency;
                })
            }));
    }

    render() {
        return (
            <div className={'container'}>
                <Currencys currExchange={this.state.currExchange}/>
            </div>
        );
    }
}

export default MainComponent;
