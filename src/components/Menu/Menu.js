import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Menu extends Component {

    render() {
        return (
            <section className={'container'}>
                <h4>Меню:</h4>
                <div>
                    <Link to={'/c-rate'} style={LinkStyle}><p style={menuStyle}><b>Курсы валют ПриватБанка</b></p></Link>
                    <Link to={'/coming_soon'} style={LinkStyle}><p style={menuStyle}><b>Курсы валют, драгоценных металлов НБУ и ЦБ РФ</b></p></Link>
                    <Link to={'/coming_soon'} style={LinkStyle}><p style={menuStyle}><b>Архив курсов валют ПриватБанка, НБУ</b></p></Link>
                    <Link to={'/coming_soon'} style={LinkStyle}><p style={menuStyle}><b>Инфраструктура ПриватБанка. Отделения</b></p></Link>
                    <Link to={'/coming_soon'} style={LinkStyle}><p style={menuStyle}><b>Инфраструктура ПриватБанка. Банкоматы</b></p></Link>
                    <Link to={'/coming_soon'} style={LinkStyle}><p style={menuStyle}><b>Инфраструктура ПриватБанка. Терминалы самообслуживания</b></p></Link>
                    <Link to={'/coming_soon'} style={LinkStyle}><p style={menuStyle}><b>Партнеры программы Бонус+</b></p></Link>
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