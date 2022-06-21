import { Component } from "react";
import "./App.css";
import Box from "./Box";

class BoxList extends Component {
  constructor() {
    super();
    this.state = {
      boxList: null,
    };
  }
  componentDidMount() {
    this.setState({
      boxList: new Array(25).fill(),
    });
  }
  render() {
    return (
      <div className="box-board">
        {this.state.boxList?.map((box, index) => (
          <Box key={index} />
        ))}
      </div>
    );
  }
}

export default BoxList;
