import React from "react";
import CardSwap, { Card } from "../CardSwap/CardSwap";
import "./About.css";

import { FiLayout, FiSearch } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";

import { SiFlutter, SiReact, SiLaravel, SiVuedotjs } from "react-icons/si";

import mobileDev from "../../assets/images/flutter.jpeg";
import webDev from "../../assets/images/web.jpeg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-glowing-container">
          <div className="about-content-grid">
            
            <div className="about-text">
              <h3 className="about-greeting">Hello, I’m Geraldo!</h3>
              <p>
                I’m a <b>software developer</b> focused on building <b>mobile</b> and <b>web</b> applications 
                with modern, interactive, and user-friendly designs.
              </p>
              <p>
                I enjoy transforming ideas into engaging user experiences that are both 
                visually appealing and highly functional.
              </p>
              <p>
                In my free time, I love <b>exploring new places and photography</b> — 
                two things that inspire me to find creativity in every journey.
              </p>
            </div>

            <div className="about-visuals">
              <CardSwap
                width={450}
                height={360}
                cardDistance={40}
                verticalDistance={50}
                delay={2500}
                pauseOnHover={true}
                easing="power1.inOut"
              >
                <Card>
                  <ul className="services-list">
                    <li className="service-item">
                      <div className="service-icon">
                        <FiLayout size={20} />
                      </div>
                      <div className="service-text">
                        <h4 className="service-title">UI/UX Design</h4>
                        <p className="service-desc">
                          Clean and intuitive interface design.
                        </p>
                      </div>
                    </li>
                    <li className="service-item">
                      <div className="service-icon">
                        <BsCodeSlash size={20} />
                      </div>
                      <div className="service-text">
                        <h4 className="service-title">Front-End Development</h4>
                        <p className="service-desc">
                          Interactive and responsive websites.
                        </p>
                      </div>
                    </li>
                    <li className="service-item">
                      <div className="service-icon">
                        <FiSearch size={20} />
                      </div>
                      <div className="service-text">
                        <h4 className="service-title">User Research</h4>
                        <p className="service-desc">
                          Data-driven user insights and improvements.
                        </p>
                      </div>
                    </li>
                  </ul>
                </Card>

                <Card>
                  <div className="project-card-content">
                    <img
                      src={mobileDev}
                      alt="Mobile Development"
                      className="project-card-bg"
                    />
                    <div className="project-card-overlay"></div>
                    
                    <div className="project-card-text">
                      <h3 className="project-card-title">Mobile Development</h3>
                      <div className="project-card-tech">
                        <SiFlutter title="Flutter" />
                      </div>
                      <p className="project-card-desc">
                        Building <b>high-performance cross-platform</b> applications using <b>Flutter</b>.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="project-card-content">
                    <img
                      src={webDev}
                      alt="Web Development"
                      className="project-card-bg"
                    />
                    <div className="project-card-overlay"></div>

                    <div className="project-card-text">
                      <h3 className="project-card-title">Web Development</h3>
                      <div className="project-card-tech">
                        <SiReact title="React" />
                        <SiVuedotjs title="Vue.js" />
                        <SiLaravel title="Laravel" />
                      </div>
                      <p className="project-card-desc">
                        Building fast and dynamic websites with 
                        <b> React</b>, <b>Laravel</b>, and <b>Vue</b>.
                      </p>
                    </div>
                  </div>
                </Card>

              </CardSwap>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
