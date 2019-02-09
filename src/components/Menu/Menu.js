import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Menu extends Component {

    render() {
        return (
            <section className={'container'}>
                <h4>Меню:</h4>
                <div>
                    <p style={menuStyle}><Link to={'/c-rate'} style={LinkStyle}><b>Курсы валют ПриватБанка</b></Link></p>
                    <p style={menuStyle}><Link to={'/coming_soon'} style={LinkStyle}><b>Курсы валют, драгоценных металлов НБУ и ЦБ РФ</b></Link></p>
                    <p style={menuStyle}><Link to={'/coming_soon'} style={LinkStyle}><b>Архив курсов валют ПриватБанка, НБУ</b></Link></p>
                    <p style={menuStyle}><Link to={'/coming_soon'} style={LinkStyle}><b>Инфраструктура ПриватБанка. Отделения</b></Link></p>
                    <p style={menuStyle}><Link to={'/coming_soon'} style={LinkStyle}><b>Инфраструктура ПриватБанка. Банкоматы</b></Link></p>
                    <p style={menuStyle}><Link to={'/coming_soon'} style={LinkStyle}><b>Инфраструктура ПриватБанка. Терминалы самообслуживания</b></Link></p>
                    <p style={menuStyle}><Link to={'/coming_soon'} style={LinkStyle}><b>Партнеры программы Бонус+</b></Link></p>
                </div>
            </section>
        );
    }
}

const menuStyle = {
    margin: '5px',
    padding: '10px',
    borderRadius: '15px',
    width: '100%',
    background: 'green',
};
const LinkStyle = {
    textDecoration: 'none',
    color: '#424242'
};

export default Menu;