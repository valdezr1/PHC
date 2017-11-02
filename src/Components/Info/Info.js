import React, { Component } from 'react';
import {Card, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class Mission extends Component {

    constructor(){
        super();
        this.state = {
            openLearn : false,
            openAccomp : false,
        }

        this.dialogToggleLearn = this.dialogToggleLearn.bind(this);
    }

    dialogToggleLearn(){
        this.setState({
            openLearn : !this.state.openLearn,
        });
    }

    render() {
        let availButton;
        if(this.props.availButton === true){
            availButton = <FlatButton onClick = {this.dialogToggleLearn} label="Learn More" />;
        }
        let actionsLearn = [
            <FlatButton
                label = "Close"
                primary = {true}
                onClick={this.dialogToggleLearn}
            />
        ];

        return (
            <div className='cardStyle'>
                <Card>
                    <CardText>
                        <p className='infoFont'>
                            {this.props.mainInfo}
                        </p>
                    </CardText>
                    <CardActions>
                        {availButton}
                    </CardActions>
                </Card>

                {/*Learn More Dialog Box*/}
                <Dialog
                    title = {this.props.learnMoreTitle}
                    modal = {false}
                    open = {this.state.openLearn}
                    onRequestClose={this.dialogToggleLearn}
                    actions = {actionsLearn}
                >
                    <p>
                        {this.props.learnMore}
                    </p>
                </Dialog>
            </div>

        );
    }
}

export default Mission;
