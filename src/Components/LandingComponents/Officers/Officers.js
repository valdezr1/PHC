import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList'
import {Card, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import OfficerDialog from './OfficerDialog/OfficerDialog'

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
            dialogOpenKey7 : false,
            dialogOpenKey8 : false,
            dialogOpenKey9 : false,
        };

        this.dialogToggleKey1 = this.dialogToggleKey1.bind(this);
        this.dialogToggleKey2 = this.dialogToggleKey2.bind(this);
        this.dialogToggleKey3 = this.dialogToggleKey3.bind(this);
        this.dialogToggleKey4 = this.dialogToggleKey4.bind(this);
        this.dialogToggleKey5 = this.dialogToggleKey5.bind(this);
        this.dialogToggleKey6 = this.dialogToggleKey6.bind(this);
        this.dialogToggleKey7 = this.dialogToggleKey7.bind(this);
        this.dialogToggleKey8 = this.dialogToggleKey8.bind(this);
        this.dialogToggleKey9 = this.dialogToggleKey9.bind(this);
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
    dialogToggleKey7(){
        this.setState({
            dialogOpenKey7 : !this.state.dialogOpenKey7
        });
    }
    dialogToggleKey8(){
        this.setState({
            dialogOpenKey8 : !this.state.dialogOpenKey8
        });
    }
    dialogToggleKey9(){
        this.setState({
            dialogOpenKey9 : !this.state.dialogOpenKey9
        });
    }

    render() {
        const officerName = [
            "President: Nicholas Lee",
            "OfficerName2",
            "OfficerName3",
            "OfficerName4",
            "OfficerName5",
            "OfficerName6",
            "OfficerName7",
            "OfficerName8",
            "OfficerName9",
        ]

        const officerImage = [
            "http://seokitty.net/wp-content/uploads/2014/10/Blue_Robot.png",
            "http://seokitty.net/wp-content/uploads/2014/10/Blue_Robot.png",
            "http://seokitty.net/wp-content/uploads/2014/10/Blue_Robot.png",
            "http://seokitty.net/wp-content/uploads/2014/10/Blue_Robot.png",
            "http://seokitty.net/wp-content/uploads/2014/10/Blue_Robot.png",
            "http://seokitty.net/wp-content/uploads/2014/10/Blue_Robot.png",
            "http://seokitty.net/wp-content/uploads/2014/10/Blue_Robot.png",
            "http://seokitty.net/wp-content/uploads/2014/10/Blue_Robot.png",
            "http://seokitty.net/wp-content/uploads/2014/10/Blue_Robot.png",
        ]

        const officerBackground = [
            "Background1",
            "Background2",
            "Background3",
            "Background4",
            "Background5",
            "Background6",
            "Background7",
            "Background8",
            "Background9",
        ]

        const officerResponsibilities = [
            "Calling and running meetings, general organization of club tasks, and planning events.",
            "Assisting the president, assuming the role of the president in his or her absence.",
            "Managing club accounts and petitioning ASSP for financial resources as needed.",
            "Keeping meeting minutes and corresponding via email with group members.",
            "Assists in planning events, putting together materials for events, and communicating relevant club information.",
            "Event advertisement, tracking of event size, and also communicating relevant club information.",
            "...",
            "...",
            "...",
        ]

        const tilesData = [
            {
                key : 1,
                title : <FlatButton onClick={this.dialogToggleKey1} fullWidth={true} rippleColor="blue"><span className='white'>{officerName[0]}</span></FlatButton>,
                img: officerImage[0]
            },
            {
                key : 2,
                title : <FlatButton onClick={this.dialogToggleKey2} fullWidth={true} rippleColor="blue"><span className='white'>{officerName[1]}</span></FlatButton>,
                img: officerImage[1]
            },
            {
                key : 3,
                title : <FlatButton onClick={this.dialogToggleKey3} fullWidth={true} rippleColor="blue"><span className='white'>{officerName[2]}</span></FlatButton>,
                img: officerImage[2]
            },
            {
                key : 4,
                title : <FlatButton onClick={this.dialogToggleKey4} fullWidth={true} rippleColor="blue"><span className='white'>{officerName[3]}</span></FlatButton>,
                img: officerImage[3]
            },
            {
                key : 5,
                title : <FlatButton onClick={this.dialogToggleKey5} fullWidth={true} rippleColor="blue"><span className='white'>{officerName[4]}</span></FlatButton>,
                img: officerImage[4]
            },
            {
                key: 6,
                title : <FlatButton onClick={this.dialogToggleKey6} fullWidth={true} rippleColor="blue"><span className='white'>{officerName[5]}</span></FlatButton>,
                img: officerImage[5]
            },
            {
                key: 7,
                title : <FlatButton onClick={this.dialogToggleKey7} fullWidth={true} rippleColor="blue"><span className='white'>{officerName[6]}</span></FlatButton>,
                img: officerImage[6]
            },
            {
                key: 8,
                title : <FlatButton onClick={this.dialogToggleKey8} fullWidth={true} rippleColor="blue"><span className='white'>{officerName[7]}</span></FlatButton>,
                img: officerImage[7]
            },
            {
                key: 9,
                title : <FlatButton onClick={this.dialogToggleKey9} fullWidth={true} rippleColor="blue"><span className='white'>{officerName[8]}</span></FlatButton>,
                img: officerImage[8]
            },
        ]

        return (
            <div className="gridStyle">
                <Card>
                    <CardText>
                        <GridList
                            cellHeight = {180}
                            padding = {5}
                            cols = {3}
                        >
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

                <OfficerDialog
                    dialogToggleKey={this.dialogToggleKey1}
                    dialogOpenKey={this.state.dialogOpenKey1}
                    officerName={officerName[0]}
                    officerImage={officerImage[0]}
                    officerBackground={officerBackground[0]}
                    officerResponsibilities={officerResponsibilities[0]}
                />
                <OfficerDialog
                    dialogToggleKey={this.dialogToggleKey2}
                    dialogOpenKey={this.state.dialogOpenKey2}
                    officerName={officerName[1]}
                    officerImage={officerImage[1]}
                    officerBackground={officerBackground[1]}
                    officerResponsibilities={officerResponsibilities[1]}
                />
                <OfficerDialog
                    dialogToggleKey={this.dialogToggleKey3}
                    dialogOpenKey={this.state.dialogOpenKey3}
                    officerName={officerName[2]}
                    officerImage={officerImage[2]}
                    officerBackground={officerBackground[2]}
                    officerResponsibilities={officerResponsibilities[2]}
                />
                <OfficerDialog
                    dialogToggleKey={this.dialogToggleKey4}
                    dialogOpenKey={this.state.dialogOpenKey4}
                    officerName={officerName[3]}
                    officerImage={officerImage[3]}
                    officerBackground={officerBackground[3]}
                    officerResponsibilities={officerResponsibilities[3]}
                />
                <OfficerDialog
                    dialogToggleKey={this.dialogToggleKey5}
                    dialogOpenKey={this.state.dialogOpenKey5}
                    officerName={officerName[4]}
                    officerImage={officerImage[4]}
                    officerBackground={officerBackground[4]}
                    officerResponsibilities={officerResponsibilities[4]}
                />
                <OfficerDialog
                    dialogToggleKey={this.dialogToggleKey6}
                    dialogOpenKey={this.state.dialogOpenKey6}
                    officerName={officerName[5]}
                    officerImage={officerImage[5]}
                    officerBackground={officerBackground[5]}
                    officerResponsibilities={officerResponsibilities[5]}
                />
                <OfficerDialog
                    dialogToggleKey={this.dialogToggleKey7}
                    dialogOpenKey={this.state.dialogOpenKey7}
                    officerName={officerName[6]}
                    officerImage={officerImage[6]}
                    officerBackground={officerBackground[6]}
                    officerResponsibilities={officerResponsibilities[6]}
                />
                <OfficerDialog
                    dialogToggleKey={this.dialogToggleKey8}
                    dialogOpenKey={this.state.dialogOpenKey8}
                    officerName={officerName[7]}
                    officerImage={officerImage[7]}
                    officerBackground={officerBackground[7]}
                    officerResponsibilities={officerResponsibilities[7]}
                />
                <OfficerDialog
                    dialogToggleKey={this.dialogToggleKey9}
                    dialogOpenKey={this.state.dialogOpenKey9}
                    officerName={officerName[8]}
                    officerImage={officerImage[8]}
                    officerBackground={officerBackground[8]}
                    officerResponsibilities={officerResponsibilities[8]}
                />


            </div>
        );
    }
}

export default Officers;
