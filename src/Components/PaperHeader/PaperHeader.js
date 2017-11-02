import React, { Component } from 'react';
import Paper from 'material-ui/Paper'

class PaperHeader extends Component {
    render() {
        return (
            <div>
                <Paper className='paperHeader' zDepth={3} rounded={false}>
                    <h1 className='paperTextHeader'>{this.props.headerTitle}</h1>
                    <h4 className='paperSubHeader'><em>{this.props.subHeader}</em></h4>
                </Paper>
            </div>

        );
    }
}

export default PaperHeader;
