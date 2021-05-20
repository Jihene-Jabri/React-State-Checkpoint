import "./App.css";
import React, { Component } from "react";
import Profile from "./components/profile";

class person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }
    toggletheshow = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        });
    };

    render() {
        return (
            <div className="App">
                <div className="pro">
                    <div className="btn">
                        <button
                            className="visitiblity-button"
                            onClick={this.toggletheshow}
                        >
                            {this.state.isVisible
                                ? "Hide Profile"
                                : "Show profile"}
                        </button>
                    </div>
                    {this.state.isVisible ? (
                        <Profile />
                    ) : (
                        <img
                            className="showimage"
                            src="/MuskLaunch.png"
                            alt="Elon Musk"
                            width="250px"
                        ></img>
                    )}
                </div>
            </div>
        );
    }
}

export default person;
