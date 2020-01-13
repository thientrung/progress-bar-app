import * as React from "react";
import { WindMillLoading } from "react-loadingg";
import "./MainContainer.css";
import MyButton from "./MyButton";
import MyBar from "./MyBar";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: null,
      barChecked: "0"
    };
  }

  componentDidMount() {
    fetch("http://pb-api.herokuapp.com/bars")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          bars: data.bars,
          limit: data.limit,
          buttons: data.buttons
        });
      });
  }

  _onClickButton = value => {
    const { bars, barChecked } = this.state;
    bars[barChecked] =
      bars[barChecked] + value >= 0 ? bars[barChecked] + value : 0;
    this.setState({
      bars
    });
  };

  _renderButton = () => {
    return this.state.buttons.map((value, i) => (
      <MyButton
        value={value}
        key={i}
        clickHandler={() => this._onClickButton(value)}
      />
    ));
  };

  _renderPregressBar = () => {
    const { bars, limit } = this.state;
    return bars.map((percentage, i) => (
      <MyBar key={i} percentage={percentage} limit={limit} index={i} />
    ));
  };

  _barCheckedHandler = function(e) {
    this.setState({
      barChecked: e.currentTarget.value
    });
  };

  _renderRadion = () => {
    const { bars } = this.state;
    const radioArray = bars.map((value, i) => {
      const id = i.toString();
      return (
        <label className='radio' key={id}>
          <input
            type='radio'
            name='react-tips'
            value={id}
            checked={id === this.state.barChecked}
            className='form-check-input'
            onChange={e => {
              return this._barCheckedHandler(e);
            }}
          />
          #Progress{i + 1}
        </label>
      );
    });
    return radioArray;
  };

  render() {
    const { bars } = this.state;
    if (!bars) {
      return (
        <div data-testid='loading'>
          <WindMillLoading size='large' />
        </div>
      );
    }
    return (
      <div data-testid='mainContainer'>
        <div className='progress-bar-container'>
          {bars ? this._renderPregressBar() : null}
        </div>
        <div className='radio-container'>
          {bars ? this._renderRadion() : null}
        </div>
        <div className='button-array-container'>
          {bars ? this._renderButton() : null}
        </div>
      </div>
    );
  }
}

export default MainContainer;
