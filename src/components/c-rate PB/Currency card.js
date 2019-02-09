import React from 'react';

const CurrencyCard = props => (
    <div className={'card container'} style={CurrencyCardStyle}>
        <h5>
            <span>Валюта: </span>
            <span style={dataStyle}>{props.currency.ccy}</span>
        </h5>
        <p>
            <span>Национальная валюта: </span>
            <span style={dataStyle}>{props.currency.base_ccy}</span>
        </p>
        <p>
            <span>Курс покупки: </span>
            <span style={dataStyle}>{props.currency.buy}</span>
        </p>
        <p>
            <span>Курс продажи: </span>
            <span style={dataStyle}>{props.currency.sale}</span>
        </p>
    </div>
);

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