import * as React from "react";
import "./MyButton.css";
import Button from "react-bootstrap/Button";

class MyButton extends React.Component {
  render() {
    const { value, clickHandler } = this.props;
    return (
      <Button
        className={value > 0 ? "my-button" : "my-danger-button"}
        variant={value > 0 ? "outline-success" : "outline-danger"}
        onClick={clickHandler}
      >
        {value}
      </Button>
    );
  }
}

export default MyButton;
