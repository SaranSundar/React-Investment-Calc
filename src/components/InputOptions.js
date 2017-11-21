import React, {Component} from 'react';
import {getTextArray} from "../helpers";

class InputOptions extends Component {

    isEmpty = (value) => {
        if (value === "____" || value.length <= 0) {
            return false;
        }
        else {
            return true;
        }
    };

    goToDreamCalc = () => {
        const options = {

            option1: ("" + this.state.investments).trim(),
            option2: ("" + this.state.status).trim(),
            option3: ("" + this.state.goals).trim(),
            option4: ("" + this.state.years).trim(),
        };

        console.log("OPTIONS: " + options.option1 + " " + options.option2 + " " + options.option3 + " " + options.option4);

        if (this.props.buttonSelection === getTextArray()[0]) {
            if (parseFloat(options.option1) <= 0) {
                alert("Savings and investments have to be greater than 0")
            }
            else if (parseInt(options.option4) <= 0 || parseInt(options.option4) > 70) {
                alert("Years must be greater than or equal to one and less than or equal to 70")
            }
            else if (parseFloat(options.option3) < parseFloat(options.option1)) {
                alert("Goal Must Be Greater then current savings and investments")
            }
            else if (!this.isEmpty(options.option1) || !this.isEmpty(options.option2) || !this.isEmpty(options.option3) || !this.isEmpty(options.option4)) {
                alert("Please fill in all fields with proper values");
            }
            else {
                //PASS THE OPTIONS AND CALC DREAM
                this.props.storeOptions(options);
                this.context.router.transitionTo(`/dream`);
            }
        }
        else if (this.props.buttonSelection === getTextArray()[1]) {
            if (parseFloat(options.option1) <= 0) {
                alert("Savings and investments have to be greater than 0")
            }
            else if (parseFloat(options.option4) <= 0) {
                alert("Monthly investments must be greater than 0 and less than 70")
            }
            else if (parseFloat(options.option3) < parseFloat(options.option1)) {
                alert("Goal must Be greater than current savings and investments")
            }
            else if (!this.isEmpty(options.option1) || !this.isEmpty(options.option2) || !this.isEmpty(options.option3) || !this.isEmpty(options.option4)) {
                alert("Please fill in all fields with proper values");
            }
            else {
                //PASS THE OPTIONS AND CALC DREAM
                this.props.storeOptions(options);
                this.context.router.transitionTo(`/dream`);
            }
        }
        else if (this.props.buttonSelection === getTextArray()[2]) {

            if (parseFloat(options.option1) <= 0) {
                alert("Savings and investments have to be greater than 0")
            }
            else if (parseInt(options.option4) <= 0  || parseInt(options.option4) > 70) {
                alert("Monthly investments must be greater than 0 and less than 70")
            }
            else if (parseFloat(options.option3) < 0) {
                alert("Monthly investments must be at least 0")
            }
            else if (!this.isEmpty(options.option1) || !this.isEmpty(options.option2) || !this.isEmpty(options.option3) || !this.isEmpty(options.option4)) {
                alert("Please fill in all fields with proper values");
            }
            else {
                //PASS THE OPTIONS AND CALC DREAM
                this.props.storeOptions(options);
                this.context.router.transitionTo(`/dream`);
            }
        }


    };
    changeStatus = (event) => {
        this.setState({status: event})
    };

    // changeEvent = (event) => {
    //     this.setState({[event.target.name]: event.target.value});
    // };
    changeInvestments = (event) => {
        this.setState({investments: event})
    };
    changeGoals = (event) => {
        this.setState({goals: event})
    };
    changeYears = (event) => {
        this.setState({years: event})
    };

    constructor(props) {
        super(props);
        var gap = "____";
        this.state = ({
            status: gap,
            investments: gap,
            goals: gap,
            years: gap
        });
    }

    render() {

        var option1 = option1 =
            <h2 className="heading-7-copy">My current savings and investments are ${this.state.investments}</h2>;
        var option2 = <h2 className="heading-7-copy">I consider myself {this.state.status} with my investments</h2>;
        var option3 = null;
        var option4 = null;

        if (this.props.buttonSelection === getTextArray()[0]) {
            option3 = <h2 className="heading-7-copy">I want to reach my goal of ${this.state.goals}</h2>;
            option4 = <h2 className="heading-7-copy">I plan to work for {this.state.years} years</h2>;
        }
        else if (this.props.buttonSelection === getTextArray()[1]) {
            option3 = <h2 className="heading-7-copy">I want to reach my goal of ${this.state.goals}</h2>;
            option4 = <h2 className="heading-7-copy">I plan to save and invest ${this.state.years} per month</h2>;
        }
        else if (this.props.buttonSelection === getTextArray()[2]) {
            option3 = <h2 className="heading-7-copy">My monthly expenses are ${this.state.goals}</h2>;
            option4 = <h2 className="heading-7-copy">I plan to work for {this.state.years} years</h2>;
        }


        return (
            <div className="container-2 w-container">
                <div className="question">
                    <h1 className="question-title">Dream Calculator</h1>
                    <h2 className="question-subtitle">How much do I need to put aside to reach my goal?</h2>

                    {option1}
                    <div className="not-clickable option">
                        <input className="input" type="text" placeholder="Amount in USD$"
                               onChange={(event) => this.changeInvestments(event.target.value)}/>
                    </div>

                    {/*{this.status.value !== null && <h2 className="heading-7-copy">I consider myself {this.status.value} with my investments</h2>}*/}
                    {/*{this.status.value === null && <h2 className="heading-7-copy">I consider myself ___ with my investments</h2>}*/}
                    {option2}
                    <div className="not-clickable option">
                        <select className="dropdown" onChange={(event) => this.changeStatus(event.target.value)}>
                            <option value="Conservative">Conservative</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Aggressive">Aggressive</option>
                        </select>
                    </div>
                    {option3}
                    <div className="not-clickable option">
                        <input className="input" type="text" placeholder="Amount in USD$"
                               onChange={(event) => this.changeGoals(event.target.value)}/>
                    </div>

                    {option4}
                    <div className="not-clickable option">
                        <input className="input" type="text" placeholder="Number of Years"
                               onChange={(event) => this.changeYears(event.target.value)}/>
                    </div>

                    <a className="next-button w-inline-block" onClick={this.goToDreamCalc}>
                        <h2 className="heading-7">Next -></h2>
                    </a>
                </div>
            </div>
        );
    }
}


InputOptions.contextTypes = {
    router: React.PropTypes.object
};

export default InputOptions;
