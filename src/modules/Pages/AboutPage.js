import React, { Component } from 'react';
import Navigation from '../../components/Header';
import Footer from '../../components/Footer';
import avatar from '../../assets/images/avatar2.jpg';
import mystory1 from '../../assets/images/project_1 (2).png';
import mystory2 from '../../assets/images/project_2.png';
import mystory3 from '../../assets/images/project_3 (3).png';
import Loading from '../../components/Loading';
import SocialMediaBar from '../../components/SocialMediaBar';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          loading: false,
        }),
      3000
    );
  }

  render() {

    if (this.state.loading) {
        return (<Loading show={this.state.loading} />)
    }
    return (
      <div id="about" className="main">
        <header>
          <Navigation />
          <div className="transparent-container">
            <div className="container">
              <div className="about-avatar">
                <img src={avatar} />
                <h3 style={{textAlign: 'center'}}>Trần Quốc Định</h3>
              </div>
              <div className="about-content">
                <h2>Basic Info</h2>

                <div className="content-block">
                  {/* <div className="row">
                    <div className="title">
                      <i className="fas fa-user" />
                      Name
                    </div>
                    <div className="content">Trần Quốc Định</div>
                  </div> */}
                  <div className="row">
                    <div className="title">
                      <i className="fas fa-birthday-cake" />
                      D.o.B
                    </div>
                    <div className="content">23/12/1998</div>
                  </div>

                  {/* <div className="row">
                    <div className="title">
                      <i className="fas fa-passport" /> Nationality
                    </div>
                    <div className="content">Vietnam</div>
                  </div> */}

                  <div className="row">
                    <div className="title">
                      <i className="fas fa-envelope" />
                      Email
                    </div>
                    <div className="content">tranquocdinhcse98@outlook.com</div>
                  </div>

                  <div className="row">
                    <div className="title">
                      <i className="fas fa-phone-alt" />
                      Phone
                    </div>
                    <div className="content">0983834256</div>
                  </div>

                  <div className="row">
                    <div className="title">
                      <i className="fab fa-skype" />
                      Skype
                    </div>
                    <div className="content">live:tranquocdinhcse98</div>
                  </div>

                  <div className="row">
                    <div className="title">
                      <i className="fab fa-github" />
                      Github
                    </div>
                    <div className="content">https://github.com/tranquocdinhcse98</div>
                  </div>

                  <div className="row">
                    <div className="title">
                      <i className="fab fa-gitlab" />
                      Gitlab
                    </div>
                    <div className="content">https://gitlab.com/users/TopTeo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="dark-container">
          <div className="time-line">
            <ul>
              <li>
                <div className="item-content">
                  <h3>Objective</h3>
                  <p>
                    Desire to work as a Front-end web developer where I coud
                    create creative products and elevate user experience to the
                    next level. In the near future, Full-stack developer is what
                    I desire to become.
                  </p>
                </div>
              </li>
              <li>
                <div className="item-content">
                  <h3>Education</h3>
                  <div className="content-block">
                    <div className="row">
                      <div className="title">
                        <i className="fas fa-circle" />
                        2013 - 2016
                      </div>
                      <div className="content">
                        Nguyen Dinh Chieu High School
                      </div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <i className="fas fa-circle" />
                        2016 - Now
                      </div>
                      <div className="content">
                        <p>Ho Chi Minh University of Technology</p>
                        <p>Major: Computer Science</p>
                        <p>GPA: 7.30</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="time">
                <h4>April 23rd, 2020</h4>
                </div> */}
              </li>
              <li>
                <div className="item-content">
                  <h3>Experience</h3>
                  <div className="content-block">
                    <div className="row">
                      <div className="title">
                        <i className="fas fa-circle" />
                        06/2019 - 03/2020
                      </div>
                      <div className="content">
                        <p>YouNet Media - YouNet Group</p>
                        <p className="muted">Front-end Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="time">
                <h4>April 23rd, 2020</h4>
                </div> */}
              </li>
              <li>
                <div className="item-content">
                  <h3>Skills</h3>
                  <div className="content-block">
                    <div className="row">
                      <div className="title">
                        <i className="fas fa-circle" />
                        Languages
                      </div>
                      <div className="content">
                        <p>HTML & CSS, Javascript, C++</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <i className="fas fa-circle" />
                        Technologies
                      </div>
                      <div className="content">
                        <p>ReactJs, NodeJs, Boostrap</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <i className="fas fa-circle" />
                        Tools
                      </div>
                      <div className="content">
                        <p>Github, Gitlab, Photoshop, Xd</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="time">
                <h4>April 23rd, 2020</h4>
                </div> */}
              </li>
              <li>
                <div className="item-content">
                  <h3>Projects</h3>
                  <div className="content-block">
                    <div className="row">
                      <div className="title">
                        <i className="fas fa-circle" />
                        06/2019 - 04/2020
                      </div>
                      <div className="content">
                        <p>
                          <b>SOCIAL HEAT (Company)</b>
                        </p>
                        <p className="muted">Developer</p>
                        <p>
                          Worked as a part of Product Team. Responsible for
                          building UI for Dashboard Website using ReactJs,
                          Redux. Besides, participating in discussing with
                          members for new features.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <i className="fas fa-circle" />
                        09/2019 - 11/2019
                      </div>
                      <div className="content">
                        <p>
                          <b>ECOMMERCE (School)</b>
                        </p>
                        <p className="muted">Leader & Developer </p>
                        <p>
                          Implement an Ecommerce website named Haneul using
                          ReactJs, NodeJs, ...
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="title">
                        <i className="fas fa-circle" />
                        03/2019 - 05/2019
                      </div>
                      <div className="content">
                        <p>
                          <b>SOFTWARE TECHNOLOGY (School)</b>
                        </p>
                        <p className="muted">Developer</p>
                        <p>
                          Implement Front-end and Back-end of an Admin website
                          for Phook project using Reactjs, Nodejs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="time">
                <h4>April 23rd, 2020</h4>
                </div> */}
              </li>
            </ul>
          </div>
        </div>

        <div className="yellow-container">
          <h2 style={{ textAlign: 'center' }}>Projects</h2>
          <div className="container">
            <ul>
              <li>
                <div className="box-img">
                  <img src={mystory1} alt="Calender icon" />
                </div>
                <div className="content">
                  <h3>SOCIAL HEAT</h3>
                  <p>
                    Worked as a part of Product Team. Responsible for building
                    UI for Dashboard Website using ReactJs, Redux ...
                  </p>
                  <a href="#" className="btn info">
                    Read more
                  </a>
                </div>
              </li>
              <li>
                <div className="box-img">
                  <img src={mystory2} alt="Calender icon" />
                </div>
                <div className="content">
                  <h3>ECOMMERCE</h3>
                  <p>
                    Implement an Ecommerce website named Haneul using ReactJs,
                    NodeJs, ...
                  </p>
                  <a href="#" className="btn info">
                    Read more
                  </a>
                </div>
              </li>
              <li>
                <div className="box-img">
                  <img src={mystory3} alt="Calender icon" />
                </div>
                <div className="content">
                  <h3>SOFTWARE TECHNOLOGY</h3>
                  <p>
                    Implement Front-end and Back-end of an Admin website for
                    Phook project using Reactjs, Nodejs.
                  </p>
                  <a href="#" className="btn info">
                    Read more
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <SocialMediaBar />
        
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
