import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Menu extends Component {

    render() {
        return (
            <section className={'container'}>
                <h4>Меню:</h4>
                <div>
                    <p style={menuStyle}><Link to={'/c-rate'} style={LinkStyle}><b>Курсы валют ПриватБанка</b></Link></p>
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