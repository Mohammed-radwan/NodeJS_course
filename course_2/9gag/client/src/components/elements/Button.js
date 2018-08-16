import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { imgSrc } = this.props;
    return (
      <form>
        <button>
          <img src={imgSrc} />
        </button>
      </form>
    );
  }
}

export default Button;
