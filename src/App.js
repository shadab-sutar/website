import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="banner">
          <div id="title">
            <span className="title">Shadab <span className="primary-color">Sutar</span></span>
            <p className="description">
              Front End Developer, Author, Trainer and Creative.
            </p>
            <p className="social-media">
              <a href="http://www.github.com/shadab-sutar"><i class="fab fa-github"></i></a>
              <a href="http://www.github.com/shadab-sutar"><i class="fab fa-stack-overflow"></i></a>
              <a href="http://www.github.com/shadab-sutar"><i class="fab fa-linkedin"></i></a>
              <a href="http://www.github.com/shadab-sutar"><i class="fab fa-twitter-square"></i></a>
            </p>
          </div>
          <div>
          <img src="http://shadabsutar.com/assets/profile.JPG" alt="prof-image" className="profile-image" />
          </div>
        </div>
        <div className="main-content">
          main-content
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    );
  }
}

export default App;
