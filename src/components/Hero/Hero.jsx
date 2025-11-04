import React from "react";
import styles from "./Hero.module.css";
import ProfileCard from "../ui/ProfileCard/ProfileCard";
import myProfilePic from "../../assets/profile-pict.jpg";
import { TypeAnimation } from "react-type-animation";

import myCV from "../../assets/CV.pdf";

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className={`${styles.hero} container`}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Hello, I’m{" "}
            <span className={styles.heroName}>Geraldo Afrinandi Persada</span>
          </h1>

          <h3 className={styles.heroSubtitle}>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "App Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={50}
            />
          </h3>

          <p className={styles.heroDescription}>
            I create beautiful and functional digital experiences. Welcome to my
            personal portfolio.
          </p>
          <div className={styles.heroActions}>
            <a
              href={myCV}
              className={styles.heroButtonPrimary}
              download="Geraldo_Afrinandi_CV.pdf"
            >
              Download CV
            </a>
            <a href="#contact" className={styles.heroButtonSecondary}>
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className={styles.heroImageContainer}>
          <ProfileCard
            avatarUrl={myProfilePic}
            miniAvatarUrl={myProfilePic}
            name="Geraldo Afrinandi Persada"
            title="App Developer | Web Developer"
            handle="Geraldo"
            status="Online"
            contactText="Contact Me"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={handleContactClick} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
