import React from "react";
import styles from "./Hero.module.css";
import ProfileCard from "../ui/ProfileCard/ProfileCard";
import myProfilePic from "../../assets/profile-pict.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className={`${styles.hero} container`}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Halo, Saya{" "}
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
            Saya menciptakan pengalaman digital yang indah dan fungsional.
            Selamat datang di portofolio pribadi saya.
          </p>
          <div className={styles.heroActions}>
            <a href="#projects" className={styles.heroButtonPrimary}>
              Lihat Proyek Saya
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
            contactText="Hubungi Saya"
            showUserInfo={true}
            enableTilt={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
