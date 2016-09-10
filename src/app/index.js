import React from "react";
import { render } from "react-dom";

import { Header } from './components/header';
import { Home } from './components/home';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }

    onGreet() {
        alert("Hello");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        let homeCmp = "";
        if (this.state.homeMounted) {
            homeCmp = (
                <Home 
                    name={"Quentin"} 
                    initialAge={27} 
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)} 
                    initialLinkName={this.state.homeLink}
                />
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} 
                                className="btn btn-primary">
                            (Un)mount Home Component
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

render(<App/>, window.document.getElementById("app"));