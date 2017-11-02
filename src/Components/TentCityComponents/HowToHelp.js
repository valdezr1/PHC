import React, { Component } from 'react';
import {Card, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

class HowToHelp extends Component {

    constructor(){
        super();
        this.state = {
            openLearn : false,
            openImpact : false,
        }

        this.dialogToggleLearn = this.dialogToggleLearn.bind(this);
        this.dialogToggleImpact = this.dialogToggleImpact.bind(this);
    }

    dialogToggleLearn(){
        this.setState({
            openLearn : !this.state.openLearn,
        });
    }

    dialogToggleImpact(){
        this.setState({
            openImpact: !this.state.openImpact,
        });
    }

    render() {
        let actionsLearn = [
            <FlatButton
                label="Close Learn More"
                primary={true}
                onClick={this.dialogToggleLearn}
            />
        ];
        let actionsImpact = [
            <FlatButton
                label="Close Impact"
                primary={true}
                onClick={this.dialogToggleImpact}
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
                        <FlatButton onClick={this.dialogToggleLearn} label="Learn More"/>
                        <FlatButton onClick={this.dialogToggleImpact} label="Impact"/>
                    </CardActions>
                </Card>

                {/*Learn More Dialog Box*/}
                <Dialog
                    title="You opened Learn More!"
                    modal={false}
                    open={this.state.openLearn}
                    onRequestClose={this.dialogToggleLearn}
                    actions={actionsLearn}
                >
                    <p>
                        I'm glad you want to learn more...but I got nothing to teach!
                    </p>
                </Dialog>

                {/*Impact Dialog Box*/}
                <Dialog
                    title="You opened Impact!"
                    modal={false}
                    open={this.state.openImpact}
                    onRequestClose={this.dialogToggleImpact}
                    actions={actionsImpact}
                >
                    <p>
                        I'm glad you want to see my Impact...but I didn't do anything yet...
                    </p>
                </Dialog>
            </div>
        )
    }
}

export default HowToHelp;
