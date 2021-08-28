import Header from '../header/Header';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RouterURL from '../RouterURL/RouterURL';



class App extends Component {

  render() {
    return (
      <div>
        <Router>
          {/* header */}
          < Header />
          {/* end header */}
          <RouterURL></RouterURL>
          {/* footer */}
        </Router>
      </div >
    );
  }
}

export default App;