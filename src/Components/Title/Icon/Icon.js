import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import {red50, red200} from 'material-ui/styles/colors'


class Icon extends Component {
    render() {
        return (
                <div>
                    <SvgIcon color={red50} hoverColor={red200}>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </SvgIcon>
                </div>

        );
    }
}

export default Icon;
