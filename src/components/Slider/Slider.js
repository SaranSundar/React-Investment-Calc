import React, {Component} from 'react';
import axios from 'axios';
import Slide from './Slide';
import './style.css'
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import ChartPage from "../ChartPage";
import Dot from "./Dot";

export default class Slider extends Component {
    setImageReady = () => {
        this.setState({ready: true});
    };

    constructor(props) {
        super(props);

        this.state = {
            background: [],
            current: undefined,
            ready: false
        };
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.dotClick = this.dotClick.bind(this);
        this.preloadNextImage = this.preloadNextImage.bind(this);
    }

    // Pulls in config data for the slider from .json file
    componentWillMount() {
        axios.get('slider-config.json')
            .then((res) => {
                this.setImageArray(res.data);
            });
    }

    // Sets the background state property to the array of images pulled in from the componentWillMount method
    setImageArray(imageArray) {
        let newArray = [];
        for (let i = 0; i < imageArray.length; i++) {
            newArray.push(imageArray[i].image);
        }
        this.setState({background: newArray, current: 0});
    }

    preloadNextImage() {
        let current = this.state.current;
        let background = this.state.background;

        if ((current !== undefined) && (current < background.length - 1))
            return (
                <div style={{
                    display: 'none',
                    height: '100%',
                    backgroundImage: `url(${(this.state.background[this.state.current + 1])}.jpg)`
                }}></div>
            );
        else
            return null
    }

    render() {


        return (
            <div className="slider">
                {/* The Current Image*/}
                {
                    this.state.ready ?
                        <Slide
                            background={this.state.background}
                            current={this.state.current}
                            ready={this.state.ready}
                        />
                        : null
                }

                {/* Arrows */}
                {
                    this.state.ready ?

                        <div>
                            <LeftArrow previousSlide={this.previousSlide}/>
                            <RightArrow nextSlide={this.nextSlide}/>
                            {/* Dots */}
                            <Dot
                                numberOfDots={this.state.background.length}
                                isCurrent={this.state.current}
                                dotClick={this.dotClick}
                            />
                        </div>
                        :
                        null

                }

                {this.preloadNextImage()}

            <ChartPage loadImage={this.setImageReady} options={this.props.options} buttonSelection={this.props.buttonSelection}/>
            </div>
        );
    }

    /* Handle cLicking of dots */
    dotClick(dotIndex) {
        this.setState({current: dotIndex})
    }

    /* Previous & Next Slide Functionality */
    previousSlide() {
        let current = this.state.current;
        let imageArray = this.state.background.length - 1;

        if (current >= 1)
            this.setState({current: current - 1})
        if (current === 0)
            this.setState({current: imageArray})
    }

    nextSlide() {
        let current = this.state.current;
        let imageArray = this.state.background.length - 1;

        if ((current >= 0) && (current !== imageArray))
            this.setState({current: current + 1});
        if (current === imageArray) {
            this.setState({current: 0})
        }
    }

} // end class
