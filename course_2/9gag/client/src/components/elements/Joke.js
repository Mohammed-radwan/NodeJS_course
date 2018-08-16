import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

class Joke extends Component {
  render() {
    return (
      <section className="joke">
        <h2>This is a joke</h2>
        <Link to="/detail">
          <img className="joke_img" src="https://img-9gag-fun.9cache.com/photo/aq7ExAR_700bwp.webp" />
        </Link>
        <div className="joke_actions">
          <Button imgSrc={"/icons/up_arrow.svg"} />
          <Button imgSrc={"/icons/down_arrow.svg"} />
          <p>0 votes</p>
        </div>
      </section>
    );
  }
}

export default Joke;
