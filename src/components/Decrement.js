import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.start,
    };
  }

  handleClick = () => {
    if (this.state.number > 0) {
      this.setState({ number: this.state.number - 1 });
    } else {
      alert("Cannot be less than zero");
    }
  };

  render() {
    return (
      <>
        <h3>{this.state.number}</h3>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Decrement
        </button>
      </>
    );
  }
}

Decrement.propTypes = { start: PropTypes.number.isRequired };

export default Decrement;
