import React, {Component} from 'react';
import {Line} from "react-chartjs-2";
import {checkOrientation, getTextArray, option1FinalFormula, option2Formula, option3Final} from "../helpers";


class ChartPage extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            loading: true,
            yVals: null,
            xVals: null
        };
    }

    loadPage = () => {
        this.setState({loading: false});
        this.props.loadImage();
        checkOrientation();
    };

    componentWillMount() {
        let yVals2;
        let i;
        setTimeout(function () {
            this.loadPage();
        }.bind(this), 3200);

        var yVals = null;
        var xVals = null;
        //parseInt()
        //parseFloat()

        if (this.props.buttonSelection === getTextArray()[0]) {
            console.log("IS THIS BUTTON 1");
            //this.props.options
            var initInvestments = parseFloat(this.props.options.option1);
            var option = this.props.options.option2.toLocaleLowerCase();
            var goal = parseFloat(this.props.options.option3);
            var years = parseInt(this.props.options.option4);
            console.log(initInvestments + " " + option + " " + goal + " " + years);
            yVals = option1FinalFormula(initInvestments, option, goal, years);
            if (yVals.length > 25) {
                yVals2 = [];
                for (i = 0; i < yVals.length; i++) {
                    if (i % 12 === 0)
                        yVals2.push(yVals[i]);
                }
                yVals = yVals2;
            }
            xVals = [];
            for (i = 0; i < yVals.length; i++) {
                //yVals[i] = "$"+yVals[i];
                xVals.push(i);
            }
            //xVals.push(xVals[xVals.length-1]+1)
        }
        else if (this.props.buttonSelection === getTextArray()[1]) {
            yVals = option2Formula(parseFloat(this.props.options.option1), this.props.options.option2.toLocaleLowerCase(), parseFloat(this.props.options.option3), parseFloat(this.props.options.option4));
            xVals = [];
            const lastYear = (yVals.length + 1) / 12;
            //Math.max(months, (months%12+1)*12);
            if (yVals.length > 25) {
                yVals2 = [];
                for (i = 0; i < yVals.length; i++) {
                    if (i % 12 === 0)
                        yVals2.push(yVals[i]);
                }
                yVals2.push(yVals[yVals.length - 1]);
                yVals = yVals2;
            }
            for (i = 0; i < yVals.length - 1; i++) {
                //yVals[i] = "$"+yVals[i];
                xVals.push(i);
            }
            xVals.push(lastYear.toFixed(2));
            //xVals.push(xVals[xVals.length-1]+1)
        }
        else if (this.props.buttonSelection === getTextArray()[2]) {
            console.log(this.props.options.option1 + " " + this.props.options.option2 + " " + this.props.options.option3 + " " + this.props.options.option4);
            yVals = option3Final(parseFloat(this.props.options.option1), this.props.options.option2.toLocaleLowerCase(), parseInt(this.props.options.option4), parseFloat(this.props.options.option3));
            ///yVals = option3Final(10000.0, "aggressive", 20, 3500.0);
            xVals = [];
            if (yVals.length > 25) {
                yVals2 = [];
                for (i = 0; i < yVals.length; i++) {
                    if (i % 12 === 0)
                        yVals2.push(yVals[i]);
                }
                yVals = yVals2;
            }
            for (let i = 0; i < yVals.length; i++) {
                //yVals[i] = "$"+yVals[i];
                xVals.push(i);
            }
            //console.log(yVals);
            //console.log(xVals.length);
            //xVals.push(xVals[xVals.length-1]+1)
        }
        this.setState({yVals: yVals, xVals: xVals});
    }

    render() {
        if (this.state.loading) {
            return (
                <div id="animation">
                    <h1 style={{color: "#001f3f"}}>Calculating...Hard At Work...</h1>
                    <svg viewBox="0 0 124 124">
                        <polygon className="hex" fill="none" stroke="#000000"
                                 points="92,48.4575131106 92,15.542486889354095 62,2 32,15.542486889354095 32,48.4575131106"/>
                        <polygon className="hex" fill="none" stroke="#000000"
                                 points="62,94.9150262213 92,108.457513111 122,94.9150262213 122,62 92,48.4575131106"/>
                        <polygon className="hex" fill="none" stroke="#000000"
                                 points="32,48.4575131106 2,62 2,94.9150262213 32,108.457513111 62,94.9150262213"/>
                    </svg>
                </div>
            );
        }
        else {

            const data = () => {
                return {
                    labels: this.state.xVals,
                    datasets: [{
                        label: 'Money Saved',
                        data: this.state.yVals,
                        borderColor: "rgb(207, 207, 209)",
                        borderWidth: 5,
                        cubicInterpolationMode: 'monotone',
                        fill: true,
                        backgroundColor: "rgba(207, 207, 209, 0.3)"
                    }]//,
                    //     {
                    //         label: 'Ideal Money Levels $',
                    //         data: [20, 20, 20, 20, 20],
                    //         borderColor: "rgb(207, 207, 209)",
                    //         borderWidth: 5,
                    //         cubicInterpolationMode: 'monotone'
                    //     }]
                };
            };
            const options = {
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            fontSize: 20
                        },
                        scaleLabel: {
                            display: true,
                            gridLines: {
                                color: "rgb(207, 207, 209)"
                            },
                            labelString: "Time in Months",
                            fontSize: 20
                        }
                    }],
                    yAxes: [{
                        display: true,
                        ticks: {
                            fontSize: 20,
                            callback: function(label, index, labels) {
                                return "$"+label;
                            }
                        },
                        gridLines: {
                            color: "rgb(207, 207, 209)"
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'USD$',
                            fontSize: 20
                        }
                    }]
                }
            };

            var height = window.innerHeight;
            var width = window.innerWidth;

            return (
                <div id="wrapChart">
                    <Line data={data} options={options} width={width} height={height}/>
                    <div className="settings">
                        {/*<img height="48"*/}
                             {/*src="https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Configuration-01-128.png"*/}
                             {/*alt="Settings"/>*/}
                    </div>
                </div>
            );
        }

    }
}

export default ChartPage;

