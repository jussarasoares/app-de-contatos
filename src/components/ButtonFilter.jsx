import React from "react";
import Button from "./Button";

class ButtonFilter extends React.Component {
  handleSelected() {
    return `filters__item ${this.props.isSelected ? "is-selected" : ""}`;
  }

  render() {
    return (
      <Button
        className={this.handleSelected()}
        label={this.props.label}
        icon="sort-down"
        onClick={this.props.onClick}
      />
    );
  }
}

export default ButtonFilter;
