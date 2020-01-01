import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/Auth/SignIn';
import Home from '~/pages/Home';
import Students from '~/pages/Students';

export default function Routes() {
    return (
        <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/" exact component={Home} isPrivate />
            <Route path="/students" exact component={Students} isPrivate />

            <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
    );
}
