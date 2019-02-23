import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Menu from './Menu/Menu';
import CRatePB from './c-rate PB/CRatePB';
import CurrStory from './story/CurrStory';
import Error from './Error';

class MainComponent extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/'}
                           component={Menu}
                           exact />
                    <Route path={'/c-rate'}
                           component={CRatePB}
                           />
                    <Route path={'/story'}
                           component={CurrStory}
                           />
                    <Route component={Error}
                           />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default MainComponent;
