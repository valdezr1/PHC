import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'

//import ActionHome from 'material-ui/svg-icons/action/home';

import Icon from "./Icon/Icon";

class Title extends Component {
    constructor(){
        super();
        this.state = {
            drawerOpen : false,
        };

        this.drawerToggle = this.drawerToggle.bind(this);
    }

    drawerToggle(){
        this.setState({
           drawerOpen : !this.state.drawerOpen
        }, () => {
            console.log(this.state.drawerOpen)
        });
    }

    render() {
        const title = <strong>PHC</strong>
        return (
            <div>
                <AppBar
                    title={title}
                    zDepth={3}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    iconElementRight={<IconButton><Link to="/"><Icon/></Link></IconButton>}
                    onLeftIconButtonTouchTap = {this.drawerToggle}
                />
                <Drawer
                    open = {this.state.drawerOpen}
                    docked = {false}
                    onRequestChange={this.drawerToggle}
                    zDepth={2}
                >
                    <Link to="/"><MenuItem>Home</MenuItem></Link>
                    <Link to="/TentCity"><MenuItem>Tent City</MenuItem></Link>
                </Drawer>
            </div>
        );
    }
}

export default Title;
