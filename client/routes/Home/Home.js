import React, { Component } from 'react';
import './Home.css';
import logo from './logo.svg';
import Button from '../../components/Button/Button';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Home-title">MERN Starter</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>client/routes/Home/Home.js</code>.
        </p>
        <Button text="Git Repo!" onClick={() => window.location.href='https://github.com/NSuri1/mern-boilerplate.git'}/>
      </div>
    );
  }
}

export default Home;
