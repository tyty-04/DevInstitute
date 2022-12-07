import React, { Component } from "react";
import Countries from "./Countries";
import List from "./List";

export class AutoCompletedText extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
    this.setState({
      suggestions: Countries.filter(
        (country) =>
          country.toLowerCase().indexOf(this.state.text.toLowerCase()) == 0
      ),
    });
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <List list={this.state.suggestions} />
      </div>
    );
  }
}

export default AutoCompletedText;
