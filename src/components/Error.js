import React from 'react'
import {Link} from "react-router-dom";


const Error = () => (
(<section className={'container'} style={errorStyle}>
    <div>
        <h4><Link to={`/`} style={linkStyle}><i className="material-icons">arrow_back</i></Link></h4>
    </div>
    <div>
        <h2><b>Sorry, error...(</b></h2>
        <h3><b>Or this section is not built yet...</b></h3>
        <h3><i className="large material-icons">format_paint</i></h3>
    </div>
</section>)
);

const errorStyle = {
    color: 'lawngreen',
    textAlign: 'center'
};
const linkStyle = {
    textDecoration: 'none',
    color: 'lawngreen',
    float: 'left'
};

export default Error;