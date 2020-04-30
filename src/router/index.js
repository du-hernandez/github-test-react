import React from 'react';
import {
    BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import Feed from '../modules/home/view/feed';
import GistDetail from '../modules/home/view/GistDetail';

const RootRouter = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>

                    <Route
                        exact
                        path='/'
                        component={Feed}
                    />

                    <Route
                        path='/gits-detail/:id'
                        component={GistDetail}
                    />

                </Switch>
            </Router>
        </Provider>
    )
}

export default RootRouter;