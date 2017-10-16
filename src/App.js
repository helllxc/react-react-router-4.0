import React, { Component } from 'react';
import BasicExample from './route/index'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Toggle from './components/toggle'
import Foucus from './components/home/ref'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicExample></BasicExample>
      </div>
    );
  }
}

// ReactDOM.render((
//     <Router history={hashHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute component={Toggle} />
//         <Route path="/login" component={Foucus} />
//
//       </Route>
//     </Router>
// ), document.getElementById('root'))

export default App;
