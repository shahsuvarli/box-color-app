import { Component } from "react";

class Box extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
    };
  }
  render() {
    return (
      <div
        className="box"
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{
          backgroundColor: this.state.selected ? "dodgerblue" : "white",
        }}
      ></div>
    );
  }
}
export default Box;
