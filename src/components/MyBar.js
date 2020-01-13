import * as React from "react";
import { ProgressBar } from "react-bootstrap";
import "./MyBar.css";

class MyBar extends React.Component {
  render() {
    const { percentage, limit, index } = this.props;
    return (
      <div className='bar-container' key={index} data-testid='myBar'>
        <ProgressBar
          className='progress-bar'
          animated
          striped
          variant={percentage > limit ? "danger" : "success"}
          now={percentage <= limit ? percentage : limit}
          label={`${percentage}%`}
          min={0}
          max={limit}
        />
      </div>
    );
  }
}

export default MyBar;
