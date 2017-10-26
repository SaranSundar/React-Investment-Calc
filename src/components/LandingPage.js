import React, {Component} from 'react';
import {getTextArray, option2Formula} from "../helpers";

class LandingPage extends Component {

    goToGoalsPage = () => {
        if (this.id === "") {
            alert("Please Select An Option");
        }
        else {
            this.context.router.transitionTo(`/goals`);
        }
    };
    updateChoice = (id) => {
        this.id = id;
        if (id === "Button1") {
            this.props.selectChoice(getTextArray()[0]);
        }
        else if (id === "Button2") {
            this.props.selectChoice(getTextArray()[1]);
            //this.props.selectChoice(text2);
        }
        else if (id === "Button3") {
            this.props.selectChoice(getTextArray()[2]);
        }
    };

    constructor(props) {
        super(props);
        this.id = "";
        // WORKING CODE
        //alert(option1Formula(10000,100000, 1100, 5,"aggressive").pop());
        //alert(option2Formula(25000, 1000000, 1100, "moderate"));
    }

    render() {
        return (
            <div className="container-2 w-container">
                <div className="question">
                    <h1 className="question-title">Dream Calculator</h1>
                    <a href="#" className="option w-inline-block" onClick={() => this.updateChoice("Button1")}>
                        <img
                            src="https://daks2k3a4ib2z.cloudfront.net/588ced82c498fd3f484a861d/59ecd4719d16950001e296a5_003-mountain.png"
                            width="64" className="option-image" alt="Mountains"/>
                        <h2 className="heading-7" ref={(input) => this.button1 = input}>{getTextArray()[0]}</h2>
                    </a>
                    <a href="#" className="option w-inline-block" onClick={() => this.updateChoice("Button2")}>
                        <img
                            src="https://daks2k3a4ib2z.cloudfront.net/588ced82c498fd3f484a861d/59ecd471e8bbc50001a51f17_001-clock.png"
                            width="64" className="option-image" alt="Watch"/>
                        <h2 className="heading-7" ref={(input) => this.button2 = input}>{getTextArray()[1]}</h2>
                    </a>
                    <a href="#" className="option w-inline-block" onClick={() => this.updateChoice("Button3")}>
                        <img
                            src="https://daks2k3a4ib2z.cloudfront.net/588ced82c498fd3f484a861d/59ecd47136e5a0000168e9a1_002-money.png"
                            width="64" className="option-image" alt="Wallet"/>
                        <h2 className="heading-7" ref={(input) => this.button3 = input}>{getTextArray()[2]}</h2>
                    </a>
                    <a className="next-button w-inline-block" onClick={this.goToGoalsPage}>
                        <h2 className="heading-7">Next -></h2>
                    </a>
                </div>
            </div>
        );
    }
}

LandingPage.contextTypes = {
    router: React.PropTypes.object
};

export default LandingPage;
