import React, { Component } from 'react';

import Title from "./Components/Title/Title";
import logo from "./Components/Title/Icon/lovereact.svg"
import PaperHeader from "./Components/PaperHeader/PaperHeader";
import Officers from "./Components/LandingComponents/Officers/Officers";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info"


class Home extends Component {
    render() {
        const missionInfo = "The Pre-Health Club exists to facilitate events for the students of\n" +
            "             SPU to further understanding of professional health careers, eligibility\n" +
            "             to professional health schools, and to build a supportive community among\n" +
            "             students and faculty."

        const missionLearnMore = "I'm glad you want to learn more...but I got nothing to teach!";
        const missionLearnMoreTitle = "You've opened MissionLearnMore!";

        const membershipInfo = "All students interested in the Pre-Health Club are eligible to be members. " +
                                "Interested students will be asked to join the club through OrgSync, so that the club can keep " +
                                "track of its members as well as when members attend events and meetings. Members are encouraged " +
                                "to attend meetings and attendance will be taken at the meetings. "

        const officerInfo = "The executive board of PHC consists of a president (or two co-presidents), a vice president" +
            " (or two co-vice presidents), secretary, chief financial officer, an event chair and a Public " +
            "Relations/director of marketing (or two directors of marketing). "

        const electionInfo = "Elections are held at the end of the academic year for the upcoming school year. " +
            "Members can either be nominated by other members or through self-nomination. Candidates must present " +
            "their platform before a general meeting after which all members present will vote."

        const meetingInfo = "All group meetings will be held approximately once a month. Members will be notified via " +
            "email and OrgSync of the time, location, and purpose of every meeting. Members will RSVP to events and" +
            " meetings via OrgSync. Officer meetings will be held as bi-weekly and minutes will be kept. Officer " +
            "meetings will be scheduled for the same times each week for consistency. Officers will be required to" +
            " attend a minimum of one meeting a week. This is due to the fluctuating availability of each officer " +
            "during the school year. "

        const advisorInfo = "PHC will be advised by one or two faculty members (preferably the PPHS advisors) who will" +
            " be welcome at all meetings."

        const amendInfo = "Amendments to this constitution may be presented by any member and must be approved by 2/3 " +
            "of the group submitting votes."

        const ratifInfo = "This constitution will be ratified by ¾ affirmation by the members submitting votes."

        return (
                <div className="Home">
                    <Title/>

                    <PaperHeader
                        headerTitle={"Pre-Health Club"}
                        subHeader={"Our Journey to a Career in Health Care"}
                    />

                    <img className="logoStyle" src={logo}/>

                    <PaperHeader headerTitle={"Our Mission"}/>
                    <Info mainInfo = {missionInfo} learnMore={missionLearnMore} learnMoreTitle={missionLearnMoreTitle} availButton={true}/>

                    <PaperHeader headerTitle={"Membership"}/>
                    <Info mainInfo={membershipInfo} availButton={false}/>

                    <PaperHeader headerTitle={"Current Officers"}/>
                    <Info mainInfo={officerInfo}/>
                    <Officers/>

                    <PaperHeader headerTitle={"Elections"}/>
                    <Info mainInfo={electionInfo}/>

                    <PaperHeader headerTitle={"Meetings"}/>
                    <Info mainInfo={meetingInfo}/>

                    <PaperHeader headerTitle={"Advisor"}/>
                    <Info mainInfo={advisorInfo}/>

                    <PaperHeader headerTitle={"Amendments"}/>
                    <Info mainInfo={amendInfo}/>

                    <PaperHeader headerTitle={"Ratification"}/>
                    <Info mainInfo={ratifInfo}/>

                    <PaperHeader headerTitle={"Contact Us"}/>
                    <Footer/>
                </div>
        );
    }
}

export default Home;
