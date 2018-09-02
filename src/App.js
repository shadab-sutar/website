import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="banner">
          <div id="imgprofile">
            <img src="http://shadabsutar.com/assets/profile.JPG" alt="prof-image" className="profile-image" />
          </div>
          <div id="title">
            <span className="title">Shadab <span className="primary-color">Sutar</span></span>
            <p className="description">
              Front End Programmer, Technical blogger, Programming Tutor and Creative.
            </p>
            <p className="social-media">
              <a href="http://www.github.com/shadab-sutar"><i class="fab fa-github"></i></a>
              <a href="https://stackoverflow.com/users/3209874/shadab?tab=profile"><i class="fab fa-stack-overflow"></i></a>
              <a href="https://www.linkedin.com/in/shadab-jabbar-81a39b95/"><i class="fab fa-linkedin"></i></a>
              <a href="http://www.github.com/shadab-sutar"><i class="fab fa-twitter-square"></i></a>
            </p>
            <p className="action-btn">
              <a href="http://www.shadabsutar.com/blogs" className="act-btn">Visit Blog</a>
              <a href="#contact" className="act-btn">Contact Me</a>
            </p>
          </div>
        </div>
        <div id="main-content">
          <div className="main-content">
            <p className="subtitle">About Me</p>
            <p className="dataelement">
            - Post Graduate in Computer Applications 
            - 6 Years of extensive work experience under my belt 
            - Propose solutions which can make your business run smoother 
            - Provide software solutions which increases your revenue 
            - Provide high quality softwares 
            - Engaging and satisfying user interface designs.  
            I have been working for large scale enterprises for over 6 years 
            now and providing solutions which generate more revenue and increases user productivity.   
            With SAP Fiori and SAPUI5 technology, your business will benefit the power of user centric 
            designs and easy data management and representation for decision makers in your organization.
            </p>

            <p className="subtitle">My Skills</p>
            <p className="dataelement">
              <p className="skill">SAPUI5 ( 88% )</p>
              <p className="sapui5-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill">SAP Fiori( 85% )</p>
              <p className="fiori-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill">HTML5( 80% )</p>
              <p className="html-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill">CSS3( 80% )</p>
              <p className="css-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill">JavaScript( 91% )</p>
              <p className="js-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill">jQuery( 85% )</p>
              <p className="jq-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill">AJAX( 90% )</p>
              <p className="ajax-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill">Angular( 60% )</p>
              <p className="aj-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill">ReactJS( 80% )</p>
              <p className="rjs-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill">PHP( 85% )</p>
              <p className="php-line line"></p>
            </p>
            <p className="dataelement">
              <p className="skill"></p>
              <p className="line"></p>
            </p>
          </div>
        </div>
        <div id="project-section">
          <div className="project-section">
          <div className="project">
              <p className="proj-title">Leave Approval</p>
              <p className="proj-desc">
                Approve leave requests from your team on the go,
                it's now even better with SAPUI5, access your data on the mobile.
              </p>
              <p className="view-demo-btn">
                <a href="#">View Demo</a>
              </p>
            </div>
            <div className="project">
              <p className="proj-title">Project One</p>
              <p className="proj-desc">
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
              </p>
              <p className="view-demo-btn">
                <a href="#">View Demo</a>
              </p>
            </div>
            <div className="project">
              <p className="proj-title">Project One</p>
              <p className="proj-desc">
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
              </p>
              <p className="view-demo-btn">
                <a href="#">View Demo</a>
              </p>
            </div>
            <div className="project">
              <p className="proj-title">Project One</p>
              <p className="proj-desc">
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
              </p>
              <p className="view-demo-btn">
                <a href="#">View Demo</a>
              </p>
            </div>
            <div className="project">
              <p className="proj-title">Project One</p>
              <p className="proj-desc">
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
              </p>
              <p className="view-demo-btn">
                <a href="#">View Demo</a>
              </p>
            </div>
            <div className="project">
              <p className="proj-title">Project One</p>
              <p className="proj-desc">
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
              </p>
              <p className="view-demo-btn">
                <a href="#">View Demo</a>
              </p>
            </div>
            <div className="project">
              <p className="proj-title">Project One</p>
              <p className="proj-desc">
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
              </p>
              <p className="view-demo-btn">
                <a href="#">View Demo</a>
              </p>
            </div>
            <div className="project">
              <p className="proj-title">Project One</p>
              <p className="proj-desc">
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
                Lorem Ipsum lorem ipsum lorem ipsum
              </p>
              <p className="view-demo-btn">
                <a href="#">View Demo</a>
              </p>
            </div>
          </div>
        </div>
        <div className="contact" id="contact">
          <p className="subtitle">Contact Me</p>
          <input name="name" placeholder="Enter your name..." className="input" />
          <input name="email" placeholder="Enter your email..." className="input" />
          <textarea name="message" placeholder="Enter your message..." className="txtarea" rows="5" />
          <p>
            <a href="#" className="send-btn">Send</a>
          </p>
        </div>
        <div id="footer">
          <div className="footer">
            &copy; www.shadabsutar.com, 2018.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
