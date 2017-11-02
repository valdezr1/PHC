import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {red900} from 'material-ui/styles/colors'

import Home from './Home'
import TentCity from './TentCity'

import './App.css';

class App extends Component {
    render() {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: red900,
            },
            appBar: {
                height: 50,
            },
        });

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/TentCity' component = {TentCity}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default App;
