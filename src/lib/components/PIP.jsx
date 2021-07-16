import React from "react";
import Draggable from "react-draggable";

import "./PIP.css";

export default class PIP extends React.Component {
  state = {
    activeDrags: 0,
  };

  handleDrag = (e, ui) => {};

  onStart = () => {
    this.setState((state) => ({ activeDrags: ++state.activeDrags }));
  };

  onStop = () => {
    this.setState((state) => ({ activeDrags: --state.activeDrags }));
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div>
        <Draggable onDrag={this.handleDrag} {...dragHandlers}>
          <div className="pip-window">{this.props.content}</div>
        </Draggable>
      </div>
    );
  }
}
