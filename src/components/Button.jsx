import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classIcon: `fa fa-${this.props.icon}`,
    };
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.label} <i className={this.state.classIcon} />
      </button>
    );
  }
}

export default Button;
