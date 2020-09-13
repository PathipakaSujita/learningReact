import React from 'react';

class Toggle2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h1> Yes-No-Button </h1>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'YES' : 'NO'}
        </button>
      </div>
    );
  }
}

export default Toggle2;
