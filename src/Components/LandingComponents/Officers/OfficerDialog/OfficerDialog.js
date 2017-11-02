import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import Avatar from 'material-ui/Avatar'

class Officer extends Component {

    render() {

        const actionsKey = [
            <FlatButton
                label = "Close"
                primary = {true}
                onClick={this.props.dialogToggleKey}
            />
        ];

        return (
            <div className="gridStyle">

                {/*Officer Dialog Box*/}
                <Dialog
                    title = {this.props.officerName}
                    modal = {false}
                    open = {this.props.dialogOpenKey}
                    onRequestClose={this.props.dialogToggleKey}
                    actions = {actionsKey}
                >
                    <Avatar size= {80} src={this.props.officerImage}/>
                    <hr/>
                    <strong>Background:</strong>
                    <br/>
                    {this.props.officerBackground}
                    <hr/>
                    <strong>Responsibilities:</strong>
                    <br/>
                    {this.props.officerResponsibilities}
                </Dialog>

            </div>
        );
    }
}

export default Officer;
