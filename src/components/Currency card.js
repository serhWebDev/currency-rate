import React, { Component } from 'react';

class CurrencyCard extends Component {
    render() {
        return (
            <div className={'card container'} style={CurrencyCardStyle}>
                <h5>
                    <span>Валюта: </span>
                    <span style={dataStyle}>{this.props.currency.ccy}</span>
                </h5>
                <p>
                    <span>Национальная валюта: </span>
                    <span style={dataStyle}>{this.props.currency.base_ccy}</span>
                </p>
                <p>
                    <span>Курс покупки: </span>
                    <span style={dataStyle}>{this.props.currency.buy}</span>
                </p>
                <p>
                    <span>Курс продажи: </span>
                    <span style={dataStyle}>{this.props.currency.sale}</span>
                </p>
            </div>
        );
    }
}

const dataStyle = {
    float: 'right'
};
const CurrencyCardStyle = {
    padding: '0 15px',
    background: '#424242',
    border: '2px solid green',
    borderRadius: '10px'
};

export default CurrencyCard;