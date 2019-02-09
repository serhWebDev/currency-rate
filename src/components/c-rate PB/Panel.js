import React, { Component } from 'react';

class Panel extends Component {
    render() {
        return (
            <div>
                <form>
                    <p>
                        <label>
                            <input type="checkbox" name={'typeRate'} onChange={this.props.typeRate} />
                            <span>Наличный курс / Безналичный курс</span>
                        </label>
                    </p>
                </form>
            </div>
        );
    }
}

export default Panel;
