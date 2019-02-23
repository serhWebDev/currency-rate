import React, { Component } from 'react';
import M from 'materialize-css';

class TimePanel extends Component {
    render() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {format: `dd.mm.yyyy`});
        });
        return (
            <div>
                <form onSubmit={this.getStoryData}>
                    <div className="row">
                        <input type="text" name="thisTime" className="col s12 m11 datepicker"/>
                        <button className="col s12 m1 waves-effect waves-light btn">OK</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TimePanel;
