import React, { Component } from "react";
import Counter from "./Counter";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Person: {
                fullName: "Elon Musk",
                bio: "South African entrepreneur",
                imageSrc: "ElonMusk.jpg",
            },
        };
    }

    render() {
        return (
            <div>
                <Counter/>
            <div className="profile">
                <img src={this.state.Person.imageSrc} alt="Elon" />
                {/* {this.state.Person.imageSrc} */}
                <div className="profiletext">
                    <h1> {this.state.Person.fullName} </h1>
                    <h3> {this.state.Person.bio} </h3>
                    <p>
                        Elon Musk is a South African-born American entrepreneur
                        and businessman who founded X.com in 1999 (which later
                        became PayPal), SpaceX in 2002 and Tesla Motors in 2003.
                        Musk became a multimillionaire in his late 20s when he
                        sold his start-up company, Zip2, to a division of Compaq
                        Computers. Musk made headlines in May 2012, when SpaceX
                        launched a rocket that would send the first commercial
                        vehicle to the International Space Station.
                    </p>
                </div>
            </div>
            </div>
        );
    }
}

export default Profile;
