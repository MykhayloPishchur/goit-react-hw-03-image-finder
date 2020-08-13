import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.keyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyPress);
  }

  keyPress = (e) => {
    if (e.code === "Escape") {
      this.props.onClick();
    }
  };

  render() {
    const { src, alt, onClick } = this.props;
    return (
      <div className="Overlay" onClick={onClick}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
