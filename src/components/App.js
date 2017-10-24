import React, {Component} from 'react';
import {BrowserRouter, Match, Miss} from "react-router";
import NotFound from "./NotFound";
import LandingPage from "./LandingPage";
import InputOptions from "./InputOptions";
import ChartPage from "./ChartPage";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = (
            {
                landingPageOption: "",
                options: {option1: "option1", option2: "option2", option3: "option3", option4: "option4"}
            }
        );
    }



    landingPageButtonSelection = (buttonText) => {
        console.log("BUTTON SELECTED IS " + buttonText);
        this.setState({
            landingPageOption: buttonText
        });

    };

    inputPageOptions = (optionsObject) => {
        this.setState({options: optionsObject});
    };


    render() {
        return (
            <BrowserRouter>
                <div>

                    <Match exactly pattern="/" exact render={(props) => (
                        <LandingPage {...props} storePage={this.storeWorkingPageObject} selectChoice={this.landingPageButtonSelection}/>)}/>

                    <Match exactly pattern="/goals" exact render={(props) => (
                        <InputOptions {...props} storeOptions={this.inputPageOptions} goToDreamCalc={this.loadDreamCalc} buttonSelection={this.state.landingPageOption} selectChoice={this.inputPageOptions}/>)}/>

                    <Match exactly pattern="/dream" exact render={(props) => (
                        <ChartPage {...props} />)}/>


                    <Miss component={NotFound}/>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;