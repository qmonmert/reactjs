import React from "react";
import { render } from "react-dom";

import { Header } from './components/header';
import { Home } from './components/home';

class App extends React.Component {

    render() {
        var user = {
            name: "Thibaud",
            hobbies: ["Soccer", "Basket"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Quentin"} age={27} user={user}>
                            <p>This is a paragraph !</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }

}

render(<App/>, window.document.getElementById("app"));
