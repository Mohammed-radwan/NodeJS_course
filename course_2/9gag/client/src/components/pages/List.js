import React, { Component } from 'react';
import Joke from '../elements/Joke';

class List extends Component {
  render() {
    return (
      <ul className="joke_list">
        <li>
          <Joke />
        </li>
        <li>
          <Joke />
        </li>
        <li>
          <Joke />
        </li>
      </ul>
    );
  }
}

export default List;
