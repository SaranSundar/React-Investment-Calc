import React, {Component} from 'react';
class InputOptions extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            status: "_______",
            investments: 0,
            goals: 0,
            years: 0,
            expenses: 0,
            savings: 0,
        });
    }

    goToDreamCalc = () => {
        const options = {
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        };
        this.props.storeOptions(options);
        this.context.router.transitionTo(`/dream`);
    };

    // changeEvent = (event) => {
    //     this.setState({[event.target.name]: event.target.value});
    // };

    changeStatus = (event) => {
        this.setState({status: event})
    };

    changeInvestments = (event) => {
        this.setState({investments: event})
    };

    changeGoals = (event) => {
        this.setState({goals: event})
    };

    changeYears = (event) => {
        this.setState({years: event})
    };

    changeSavings = (event) => {
        this.setState({savings: event})
    };

    changeExpenses = (event) => {
        this.setState({expenses: event})
    };

    render() {
        // const option = this.props.landingPageOption;
        // var exp = null;
        // var yearsWorked = null;
        // var moneySaved = null;
        // var goal = null;
        // if (option === getTextArray()[0]) {
        //     exp = <h2 className="heading-7-copy">My monthly expenses are ${this.state.expenses}</h2>;
        //     <input className="input" type="text" placeholder="Amount in USD$"
        //            onChange={(event) => this.changeExpenses(event.target.value)}/>
        //     yearsWorked = <h2 className="heading-7-copy">I plan to work for another {this.state.years} years</h2>;
        //     <input className="input" type="text" placeholder="Number of years"
        //            onChange={(event) => this.changeYears(event.target.value)}/>
        // }
        // else if (option === getTextArray()[1]) {
        //     goal = <h2 className="heading-7-copy">I want to reach my goal of ${this.state.plans}</h2>;
        //     <input className="input" type="text" placeholder="Amount in USD$"
        //            onChange={(event) => this.changeGoals(event.target.value)}/>
        //
        //     moneySaved =
        //         <h2 className="heading-7-copy">I want to save and invest a monthly amount of ${this.state.savings}</h2>;
        //     <input className="input" type="text" placeholder="Amount in USD$"
        //            onChange={(event) => this.changeSavings(event.target.value)}/>
        // }
        // else if (option === getTextArray()[2]) {
        //     exp = <h2 className="heading-7-copy">My monthly expenses are ${this.state.expenses}</h2>;
        //     <input className="input" type="text" placeholder="Amount in USD$"
        //            onChange={(event) => this.changeExpenses(event.target.value)}/>
        //     yearsWorked = <h2 className="heading-7-copy">I plan to work for another {this.state.years} years</h2>;
        //     <input className="input" type="text" placeholder="Number of years"
        //            onChange={(event) => this.changeYears(event.target.value)}/>
        // }


        return (
            <div className="container-2 w-container">
                <div className="question">
                    <h1 className="question-title">Dream Calculator</h1>
                    <h2 className="question-subtitle">How much do I need to put aside to reach my goal?</h2>

                    <h2 className="heading-7-copy">My current savings and investments are ${this.state.investments}</h2>
                    <div className="not-clickable option">
                        <input className="input" type="text" placeholder="Amount in USD$"
                               onChange={(event) => this.changeInvestments(event.target.value)}/>
                    </div>

                    {/*{this.status.value !== null && <h2 className="heading-7-copy">I consider myself {this.status.value} with my investments</h2>}*/}
                    {/*{this.status.value === null && <h2 className="heading-7-copy">I consider myself ___ with my investments</h2>}*/}
                    <h2 className="heading-7-copy">I consider myself {this.state.status} with my investments</h2>
                    <div className="not-clickable option">
                        <select className="dropdown" onChange={(event) => this.changeStatus(event.target.value)}>
                            <option value="Conservative">Conservative</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Aggressive">Aggressive</option>
                        </select>
                    </div>
                    <h2 className="heading-7-copy">I want to reach my goal of</h2>
                    <div className="not-clickable option">
                        <input className="input" type="text" placeholder="Amount in USD$"/>
                    </div>

                    <h2 className="heading-7-copy">I plan to work for {this.state.years} years</h2>
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
