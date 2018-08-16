import React, { Component } from 'react';
import Joke from '../elements/Joke';

class Detail extends Component {
  render() {
    return (
      <div className="joke_detail">
        <Joke />
      </div>
    );
  }
}

export default Detail;
