import React, { Component } from 'react';
import CurrencyCard from "./Currency card";

class Currencys extends Component {
    render() {
        return this.props.currExchange.map((el, i)=>{
            return(
                <CurrencyCard key={i}
                              currency={el}
                />
            );
        });
    }
}

export default Currencys;
