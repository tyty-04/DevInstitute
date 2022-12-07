import React, { Component } from "react";

export class Calculator extends Component {
  constructor() {
    super();
    this.state = { display: "", newEquation: true };
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeOperator = this.handleChangeOperator.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clear = this.clear.bind(this);
  }
  handleChangeNumber(event) {
    if (this.state.newEquation) {
      if (event.target.innerText == "(-)") {
        if (
          this.state.display.charAt(this.state.display.length) == " " ||
          this.state.display == ""
        ) {
          this.setState({ display: "-" });
        }
      } else {
        this.setState({ display: event.target.innerText });
      }
      this.setState({ newEquation: false });
    } else {
      if (event.target.innerText == "(-)") {
        if (
          this.state.display.charAt(this.state.display.length - 1) == " " ||
          this.state.display == ""
        ) {
          this.setState({ display: this.state.display + "-" });
        }
      } else {
        this.setState({ display: this.state.display + event.target.innerText });
      }
    }
  }
  handleChangeOperator(event) {
    if (
      !(this.state.display == "") &&
      !(this.state.display.charAt(this.state.display.length - 1) == " ")
    ) {
      this.setState({
        display: this.state.display + " " + event.target.innerText + " ",
      });
      this.setState({ newEquation: false });
    }
  }
  calculate() {
    this.setState({ display: eval(this.state.display) });
    this.setState({ newEquation: true });
  }
  clear() {
    this.setState({ display: "" });
    this.setState({ newEquation: true });
  }
  render() {
    return (
      <div id="container">
        <div id="display">{this.state.display}</div>
        <div id="numPad">
          <div className="button" id="7" onClick={this.handleChangeNumber}>
            7
          </div>
          <div className="button" id="8" onClick={this.handleChangeNumber}>
            8
          </div>
          <div className="button" id="9" onClick={this.handleChangeNumber}>
            9
          </div>
          <div
            className="button"
            id="divide"
            onClick={this.handleChangeOperator}
          >
            /
          </div>
          <div className="button" id="4" onClick={this.handleChangeNumber}>
            4
          </div>
          <div className="button" id="5" onClick={this.handleChangeNumber}>
            5
          </div>
          <div className="button" id="6" onClick={this.handleChangeNumber}>
            6
          </div>
          <div
            className="button"
            id="multiply"
            onClick={this.handleChangeOperator}
          >
            *
          </div>
          <div className="button" id="1" onClick={this.handleChangeNumber}>
            1
          </div>
          <div className="button" id="2" onClick={this.handleChangeNumber}>
            2
          </div>
          <div className="button" id="3" onClick={this.handleChangeNumber}>
            3
          </div>
          <div
            className="button"
            id="minus"
            onClick={this.handleChangeOperator}
          >
            -
          </div>
          <div className="button" id="0" onClick={this.handleChangeNumber}>
            0
          </div>
          <div className="button" id="point" onClick={this.handleChangeNumber}>
            .
          </div>
          <div
            className="button"
            id="negative"
            onClick={this.handleChangeNumber}
          >
            (-)
          </div>
          <div className="button" id="plus" onClick={this.handleChangeOperator}>
            +
          </div>
          <div className="button" id="equals" onClick={this.calculate}>
            =
          </div>
          <div className="button" id="clear" onClick={this.clear}>
            Clear
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
