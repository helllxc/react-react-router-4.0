import React, { Component } from 'react';
import BasicExample from './route/index'
import './App.css';



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
