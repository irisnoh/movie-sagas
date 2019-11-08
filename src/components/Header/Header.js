import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Router>
      <div className="headerDiv">
        <h1>Movie</h1>
          <ul>
            <li>
              <Link to= "/movie">Home</Link>

            </li>
          </ul>
      </div>
      </Router>
    );
  }
}

export default Header;