import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList'
import {Card, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

class Officers extends Component {
    constructor(){
        super();
        this.state = {
            dialogOpenKey1 : false,
            dialogOpenKey2 : false,
            dialogOpenKey3 : false,
            dialogOpenKey4 : false,
            dialogOpenKey5 : false,
            dialogOpenKey6 : false,
        };

        this.dialogToggleKey1 = this.dialogToggleKey1.bind(this);
        this.dialogToggleKey2 = this.dialogToggleKey2.bind(this);
        this.dialogToggleKey3 = this.dialogToggleKey3.bind(this);
        this.dialogToggleKey4 = this.dialogToggleKey4.bind(this);
        this.dialogToggleKey5 = this.dialogToggleKey5.bind(this);
        this.dialogToggleKey6 = this.dialogToggleKey6.bind(this);
    }

    dialogToggleKey1(){
        this.setState({
            dialogOpenKey1 : !this.state.dialogOpenKey1
        });
    }
    dialogToggleKey2(){
        this.setState({
            dialogOpenKey2 : !this.state.dialogOpenKey2
        });
    }
    dialogToggleKey3(){
        this.setState({
            dialogOpenKey3 : !this.state.dialogOpenKey3
        });
    }
    dialogToggleKey4(){
        this.setState({
            dialogOpenKey4 : !this.state.dialogOpenKey4
        });
    }
    dialogToggleKey5(){
        this.setState({
            dialogOpenKey5 : !this.state.dialogOpenKey5
        });
    }
    dialogToggleKey6(){
        this.setState({
            dialogOpenKey6 : !this.state.dialogOpenKey6
        });
    }

    render() {
        const tilesData = [
            {
                key : 1,
                title : <FlatButton onClick={this.dialogToggleKey1} fullWidth={true} rippleColor="blue"><span className='white'>Officer 1</span></FlatButton>,
                img: "http://i0.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg"
            },
            {
                key : 2,
                title : <FlatButton onClick={this.dialogToggleKey2} fullWidth={true} rippleColor="blue"><span className='white'>Officer 2</span></FlatButton>,
                img: "http://i0.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg"
            },
            {
                key : 3,
                title : <FlatButton onClick={this.dialogToggleKey3} fullWidth={true} rippleColor="blue"><span className='white'>Officer 3</span></FlatButton>,
                img: "http://i0.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg"
            },
            {
                key : 4,
                title : <FlatButton onClick={this.dialogToggleKey4} fullWidth={true} rippleColor="blue"><span className='white'>Officer 4</span></FlatButton>,
                img: "http://i0.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg"
            },
            {
                key : 5,
                title : <FlatButton onClick={this.dialogToggleKey5} fullWidth={true} rippleColor="blue"><span className='white'>Officer 5</span></FlatButton>,
                img: "http://i0.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg"
            },
            {
                key: 6,
                title : <FlatButton onClick={this.dialogToggleKey6} fullWidth={true} rippleColor="blue"><span className='white'>Okay bye!"</span></FlatButton>,
                img: "https://static1.squarespace.com/static/507dba43c4aabcfd2216a447/t/5244609de4b0d08691bdc2ee/1380212895097/Troll+Face.jpg"
            }
        ]

        const actionsKey1 = [
            <FlatButton
                label = "Close"
                primary = {true}
                onClick={this.dialogToggleKey1}
            />
        ];
        const actionsKey2 = [
            <FlatButton
                label = "Close"
                primary = {true}
                onClick={this.dialogToggleKey2}
            />
        ];
         const actionsKey3 = [
            <FlatButton
                label = "Close"
                primary = {true}
                onClick={this.dialogToggleKey3}
            />
        ];
         const actionsKey4 = [
            <FlatButton
                label = "Close"
                primary = {true}
                onClick={this.dialogToggleKey4}
            />
        ];
         const actionsKey5 = [
            <FlatButton
                label = "Close"
                primary = {true}
                onClick={this.dialogToggleKey5}
            />
        ];
         const actionsKey6 = [
            <FlatButton
                label = "Close"
                primary = {true}
                onClick={this.dialogToggleKey6}
            />
        ];


        return (
            <div className="gridStyle">
                <Card>
                    <CardText>
                        <GridList
                            cellHeight = {180}
                        >
                            {/*<Subheader><br/></Subheader>*/}
                            {tilesData.map((tile) => (
                                <GridTile
                                    key = {tile.key}
                                    title = {tile.title}
                                >
                                    <img src = {tile.img}/>
                                </GridTile>
                            ))}
                        </GridList>
                    </CardText>
                </Card>

                {/*Officer 1*/}
                <Dialog
                    title = "OfficerName of Key:1"
                    modal = {false}
                    open = {this.state.dialogOpenKey1}
                    onRequestClose={this.dialogToggleKey1}
                    actions = {actionsKey1}
                >
                    OFFICER 1 SIR
                    <hr/>
                    <strong>Background:</strong>
                    <br/>
                    Background info goes here
                    <hr/>
                    <strong>Goals:</strong>
                    <br/>
                    Goals go here
                </Dialog>

                {/*Officer 2*/}
                <Dialog
                    title = "OfficerName of Key:2"
                    modal = {false}
                    open = {this.state.dialogOpenKey2}
                    onRequestClose={this.dialogToggleKey2}
                    actions = {actionsKey2}
                >
                    OFFICER 2 READY TO SERVE
                    <hr/>
                    <strong>Background:</strong>
                    <br/>
                    Background info goes here
                    <hr/>
                    <strong>Goals:</strong>
                    <br/>
                    Goals go here
                </Dialog>

                {/*Officer 3*/}
                <Dialog
                    title = "OfficerName of Key:3"
                    modal = {false}
                    open = {this.state.dialogOpenKey3}
                    onRequestClose={this.dialogToggleKey3}
                    actions = {actionsKey3}
                >
                    OFFICER 3 SALUTE
                    <hr/>
                    <strong>Background:</strong>
                    <br/>
                    Background info goes here
                    <hr/>
                    <strong>Goals:</strong>
                    <br/>
                    Goals go here
                </Dialog>

                {/*Officer 4*/}
                <Dialog
                    title = "OfficerName of Key:4"
                    modal = {false}
                    open = {this.state.dialogOpenKey4}
                    onRequestClose={this.dialogToggleKey4}
                    actions = {actionsKey4}
                >
                    OFFICER 4 HOORAH
                    <hr/>
                    <strong>Background:</strong>
                    <br/>
                    Background info goes here
                    <hr/>
                    <strong>Goals:</strong>
                    <br/>
                    Goals go here
                </Dialog>

                {/*Officer 5*/}
                <Dialog
                    title = "OfficerName of Key:5"
                    modal = {false}
                    open = {this.state.dialogOpenKey5}
                    onRequestClose={this.dialogToggleKey5}
                    actions = {actionsKey5}
                >
                    OFFICER 5 PRESENT
                    <hr/>
                    <strong>Background:</strong>
                    <br/>
                    Background info goes here
                    <hr/>
                    <strong>Goals:</strong>
                    <br/>
                    Goals go here
                </Dialog>

                {/*Officer 6*/}
                <Dialog
                    title = "OfficerName of Key:6"
                    modal = {false}
                    open = {this.state.dialogOpenKey6}
                    onRequestClose={this.dialogToggleKey6}
                    actions = {actionsKey6}
                >
                    OFFICER 6 RESPONDING BABY!
                    <hr/>
                    <strong>Background:</strong>
                    <br/>
                    Background info goes here
                    <hr/>
                    <strong>Goals:</strong>
                    <br/>
                    Goals go here

                </Dialog>
            </div>
        );
    }
}

export default Officers;
