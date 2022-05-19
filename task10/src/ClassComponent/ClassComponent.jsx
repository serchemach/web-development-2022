import { Component } from "react";

export class ClassComponent extends Component {
  state = "red";

  click() {
    if (this.state == "red") {
      alert("AF");
    }
  }

  componentDidMount() {}

  render() {
    return (
      <button onClick={this.click} style={{ backgroundColor: this.state }}>
        My second button
      </button>
    );
  }
}
