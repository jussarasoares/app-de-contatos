import React from "react";
import Button from "./Button";

class ButtonFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classButton: `filters__item ${
        this.props.isSelected ? "is-selected" : ""
      }`,
    };
  }

  render() {
    return (
      <Button
        className={this.state.classButton}
        label={this.props.label}
        icon="sort-down"
      />
    );
  }
}

export default ButtonFilter;
