import React from "react";
import CardSwap, { Card } from "../CardSwap/CardSwap";
import "./About.css";
import mobileDev from "../../assets/images/flutter.jpeg";
import webDev from "../../assets/images/web.jpeg";
import uiux from "../../assets/images/uiux.JPG";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-glowing-container">
          <div className="about-content-grid">
            <div className="about-text">
              <h3 className="about-greeting">Halo, Saya Geraldo!</h3>
              <p>
                Saya seorang pengembang perangkat lunak yang berfokus pada
                pembuatan aplikasi mobile dan web dengan tampilan modern serta
                mudah digunakan.
              </p>
              <p>
                Saya menikmati proses mengubah ide menjadi tampilan dan
                pengalaman yang menarik, fungsional, dan nyaman digunakan oleh
                banyak orang.
              </p>
              <p>
                Di waktu luang, saya suka <b>berpetualang dan berfoto</b> — dua
                hal yang membantu saya menemukan inspirasi baru di setiap tempat
                yang saya kunjungi.
              </p>
            </div>

            <div className="about-visuals">
              <CardSwap
                width={450}
                height={360}
                cardDistance={40}
                verticalDistance={50}
                delay={2000}
                pauseOnHover={true}
                easing="power1.inOut"
              >
                <Card>
                  <img
                    src={mobileDev}
                    alt="Mobile Development"
                    className="card-image"
                  />
                  <h3 style={{ marginTop: "5px" }}>Mobile Development</h3>
                  <p>
                    Pengembangan aplikasi cross-platform performa <br/>tinggi
                    menggunakan Flutter.
                  </p>
                </Card>
                <Card>
                  <img
                    src={webDev}
                    alt="Web Development"
                    className="card-image"
                  />
                  <h3 style={{ marginTop: "5px" }}> Web Development</h3>
                  <p>
                    Membangun situs web yang cepat dan interaktif <br /> dengan React,
                    Laravel, dan Vue.
                  </p>
                </Card>
                <Card>
                  <img src={uiux} alt="uiux" className="card-image" />
                  <h3 style={{ marginTop: "5px" }}> UI/UX Design</h3>
                  <p>Fokus pada desain yang bersih, gampang digunakan</p>
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
