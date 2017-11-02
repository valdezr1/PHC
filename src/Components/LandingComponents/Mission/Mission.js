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
        this.dialogToggleAccomp = this.dialogToggleAccomp.bind(this);
    }

    dialogToggleLearn(){
        this.setState({
            openLearn : !this.state.openLearn,
        });
    }

    dialogToggleAccomp(){
        this.setState({
            openAccomp: !this.state.openAccomp,
        });
    }

    render() {
        let actionsLearn = [
            <FlatButton
                label = "Close Learn More"
                primary = {true}
                onClick={this.dialogToggleLearn}
            />
        ];
        let actionsAccomp = [
            <FlatButton
                label = "Close Accomplishments"
                primary = {true}
                onClick = {this.dialogToggleAccomp}
            />
        ]

        return (
            <div className='cardStyle'>
                <Card>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                        <FlatButton onClick = {this.dialogToggleLearn} label="Learn More" />
                        <FlatButton onClick = {this.dialogToggleAccomp} label="Accomplishments" />
                    </CardActions>
                </Card>

                {/*Learn More Dialog Box*/}
                <Dialog
                    title = "You opened Learn More!"
                    modal = {false}
                    open = {this.state.openLearn}
                    onRequestClose={this.dialogToggleLearn}
                    actions = {actionsLearn}
                >
                    <p>
                        I'm glad you want to learn more...but I got nothing to teach!
                    </p>
                </Dialog>

                {/*Accomplishments Dialog Box*/}
                <Dialog
                    title = "You opened Accomplishments!"
                    modal = {false}
                    open = {this.state.openAccomp}
                    onRequestClose={this.dialogToggleAccomp}
                    actions = {actionsAccomp}
                >
                    <p>
                        I'm glad you want to see my Accomplishments...but I have none...
                    </p>
                </Dialog>
            </div>

        );
    }
}

export default Mission;
