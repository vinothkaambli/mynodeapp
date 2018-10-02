import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainApp from './components/App.jsx';

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/home" component={MainApp}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
);

ReactDom.render(
    <App />,
    document.getElementById('app-mount-point')
);

