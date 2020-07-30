import React, {Component} from 'react';
import Header from './containers/header/header';
import MainContent from './components/mainContent/mainContent'
import LeftNav from './containers/leftNav/leftNav';
import Details from './containers/details/details';

import './App.css';
import './assets/bootstrap.min.css'

//const Fragment = React.Fragment;

class App extends Component {
  render () {
    return (
      <div className="container-fluid">
        <Header></Header>
        
        <div className="row">
          <div className="col-sm-2">
            <LeftNav></LeftNav>
          </div>
          <div className="col-sm-7">
            <MainContent></MainContent>
          </div>
          <div className="col-sm-3">
            <Details></Details>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
