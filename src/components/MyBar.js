import * as React from "react";
import { ProgressBar } from "react-bootstrap";
import "./MyBar.css";

class MyBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: props.percentage
    };
  }

  modifyPercentage = value => {
    this.setState(prevState => ({
      percentage: prevState.percentage + value
    }));
  };

  render() {
    const { percentage, limit, index } = this.props;
    return (
      <div className="bar-container" key={index}>
        <ProgressBar
          className="progress-bar"
          animated
          striped
          variant="success"
          now={this.state.percentage}
          label={`${percentage}%`}
          min={0}
          max={limit}
        />
      </div>
    );
  }
}

export default MyBar;
