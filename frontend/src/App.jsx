import React, {Component} from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component{
    render(){
        return(
            <React.Fragment>
            <NavBar/>
            <ShoppingCart x="5"/>
            </React.Fragment>
        );
    }
}