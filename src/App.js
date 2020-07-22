import React, {Component} from 'react';
import Header from './containers/header/header';
import LeftNav from './containers/leftNav/leftNav';
import RightNav from './containers/rightNav/rightNav';

import './App.css';
import './assets/bootstrap.min.css'

//const Fragment = React.Fragment;

class App extends Component {
  render () {
    return (
      <div className="container-fluid">
        <Header></Header>
        
        <div className="row">
          <div className="col-sm-3">
            <LeftNav></LeftNav>
          </div>
          <div className="col-sm-6">
            <h2>hi</h2>
          </div>
          <div className="col-sm-3">
            <RightNav></RightNav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
