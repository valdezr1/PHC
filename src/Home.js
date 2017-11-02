import React, { Component } from 'react';

import Title from "./Components/Title/Title";
import logo from "./Components/Title/Icon/lovereact.svg"
import PaperHeader from "./Components/PaperHeader/PaperHeader";
import Mission from "./Components/LandingComponents/Mission/Mission";
import Officers from "./Components/LandingComponents/Officers/Officers";
import Footer from "./Components/Footer/Footer";


class Home extends Component {
    render() {
        return (
                <div className="Home">
                    <Title/>
                    <PaperHeader
                        headerTitle={"Pre-Health Club"}
                        subHeader={"Our Journey to a Career in Health Care"}
                    />
                    <img className="logoStyle" src={logo}/>
                    <PaperHeader headerTitle={"Our Mission"}/>
                    <Mission/>
                    <PaperHeader headerTitle={"Current Officers"}/>
                    <Officers/>
                    <PaperHeader headerTitle={"Contact Us"}/>
                    <Footer/>
                </div>
        );
    }
}

export default Home;
