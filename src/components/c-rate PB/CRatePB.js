import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Panel from './Panel';
import Currencys from './Currencys';

class CRatePB extends Component {

    constructor(props){
        super(props);
        this.state = {
            currExchange: [],
            coursid: 5,
        };
    };

    typeRate = async () => {
        if (this.state.coursid === 5) {
            this.setState({coursid: 11});
        } else {
            this.setState({coursid: 5});
        }
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
                <h4>
                    <span><Link to={`/`} style={linkStyle}><i className="material-icons">arrow_back</i></Link></span>
                    <span style={{float:'right'}}>Курсы валют ПриватБанка</span>
                </h4>
                <Panel typeRate={this.typeRate}/>
                <Currencys currExchange={this.state.currExchange}/>
            </section>
        );
    }
}

const linkStyle = {
    textDecoration: 'none',
    color: 'lawngreen',
};

export default CRatePB;
