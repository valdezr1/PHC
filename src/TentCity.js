import React, { Component } from 'react';

import './App.css';
import Title from "./Components/Title/Title";
import PaperHeader from "./Components/PaperHeader/PaperHeader";
import HowToHelp from "./Components/TentCityComponents/HowToHelp"
import Footer from "./Components/Footer/Footer";


class App extends Component {
    render() {
        return (
                <div>
                    <div className="TentCity">
                        <Title/>
                        <PaperHeader
                            headerTitle={"TENT CITY"}
                            subHeader={"Engaging Homelessness"}
                        />
                        <br/>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Fk08Q1MrDwE?ecver=1" frameborder="0" gesture="media" allowfullscreen></iframe>
                        <PaperHeader headerTitle={"How to Help"}/>
                        <HowToHelp/>
                        <Footer/>
                    </div>
                </div>
        );
    }
}

export default App;
