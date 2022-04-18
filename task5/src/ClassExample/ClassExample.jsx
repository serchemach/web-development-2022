import { Component } from "react";
import './ClassExample.css';

export class ClassExample extends Component{
    click(){
        console.log("Hi!!!!!!!!!!!!!!!!!!!!!!!!!!")
        alert("Goodbye!!!!!!!!!!")
    }

    render(){
        return (<button class="class-example" onClick={this.click}>
            Super class
            </button>)
    }
}

