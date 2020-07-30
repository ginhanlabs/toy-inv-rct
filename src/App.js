import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './containers/header/header';
import MainContent from './components/mainContent/mainContent'
import CatalogBrowser from './components/catalogBrowser/catalogBrowser';
import LeftNav from './containers/leftNav/leftNav';
import Details from './containers/details/details';

import './App.css';
import './assets/bootstrap.min.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    }
 
  }

  onCollectionHandler = (val)=> {
      this.setState({category: val});
      console.log(val);
  }

  render () {
   
    return (
     
      <div className="container-fluid">
        <Header></Header>
        
        <div className="row">
          <div className="col-sm-2">
            <LeftNav category={this.state.category}></LeftNav>
          </div>
          <div className="col-sm-7">
            <MainContent click={this.onCollectionHandler}></MainContent>
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
