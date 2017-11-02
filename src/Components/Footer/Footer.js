import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Footer extends Component {
    render() {
        return (
            <div>
                <br/>
                <Paper
                    zDepth = {1}
                >
                    <span className="footerColor">
                        <p>
                            Attend our regular club meetings at [Day and Time of Club Meetings].
                            <br/>
                            If you have any questions, comments, or just want to grab coffee
                            <br/>
                            contact the officers above or our club email: [Enter Club Email].
                        </p>
                        <p className='smallFont'>
                            Webpage was created by Rafael Valdez using React.js and Materialize-UI.
                        </p>
                    </span>
                </Paper>
            </div>
        );
    }
}

export default Footer;
