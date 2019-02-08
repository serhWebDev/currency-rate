import React, { Component } from 'react';

class CurrencyCard extends Component {
    render() {
        return (
            <div className={'card'} style={CurrencyCardStyle}>
                <h5>Валюта: {this.props.currency.ccy}</h5>
                <p>Национальная валюта: {this.props.currency.base_ccy}</p>
                <p>Курс покупки: {this.props.currency.buy}</p>
                <p>Курс продажи: {this.props.currency.sale}</p>
            </div>
        );
    }
}

const CurrencyCardStyle = {
    padding: '15px',
    background: '#424242',
    border: '1px solid green',
    borderRadius: '10px'
};

export default CurrencyCard;