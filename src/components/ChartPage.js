import React, {Component} from 'react';
import {Line} from "react-chartjs-2";
import {getPoints} from "../helpers";


class ChartPage extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            loading: true
        };
    }

    componentWillMount() {
        setTimeout(function () {
            this.setState({loading: false});
        }.bind(this), 3000);
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
            const data = (canvas) => {
                return {
                    datasets: [{
                        label: 'Money Saved',
                        data: getPoints(),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                };
            };
            const options = {
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: "Time in Months"
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'USD$'
                        }
                    }]
                }
            };

            return (

                <Line data={data} options={options} width="600" height="250"/>

            );
        }

    }
}

export default ChartPage;

