import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Route path={"/home"} component={List} />
        <Route path={"/detail"} component={Detail} />
      </div>
    );
  }
}

export default Main;
