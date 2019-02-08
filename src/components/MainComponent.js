import React, { Component } from 'react';
import axios from 'axios';

import Currencys from './Currencys';

class MainComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            currExchange: [],
            coursid: 11,
        };
    };

    componentWillMount() {
        let config = {
            apiUrl: `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=${this.state.coursid}`
        };
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
            <section className={'container'}>
                <h4>Курсы валют ПриватБанка</h4>
                <Currencys currExchange={this.state.currExchange}/>
            </section>
        );
    }
}

export default MainComponent;
