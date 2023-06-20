import WavyText from "@components/WavyText";
import React from "react";
import styles from "./hero.module.css";
import ParallaxMouseMove from "./(components)/ParallaxMouseMove";

const BackgroundTile = () => (
  <div className={styles.bg_grid}>
    <div className={styles.bg_grid_wrapper}>
      <div className={styles.bg_grid_box_wrapper}>
        <div className={styles.bg_grid_overlay} />
        {[...Array(200)].map((_, i) => (
          <div key={i} className={styles.bg_grid_box}></div>
        ))}
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <>
      <BackgroundTile />

      <div
        id="hero"
        className="container z-40 leading-none pd h-screen flex flex-col gap-4 items-center justify-center"
      >
        <ParallaxMouseMove />

        <div className="flex items-center justify-center flex-col lg:flex-row gap-4 lg:gap-0">
          <WavyText as="h1" text="Hii👋, I'm " once />

          <div className="bg-black/20 dark:bg-white/20 rounded-md hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black px-2 sm:px-4 py-2 duration-200">
            <WavyText
              delay={0.5}
              className="group-hover:text-black"
              as="h1"
              text="Sarath Adhithya"
              once
            />
          </div>
        </div>

        <WavyText
          delay={1}
          as="h3"
          text="Full Stack Developer"
          once
          spanClassName="uppercase text-fade"
        />

        <h5 className="text-center capitalize">
          Bringing <span className="text-imp">ideas</span> to life, one{" "}
          <span className="text-imp">pixel</span> at a time.
        </h5>
      </div>
    </>
  );
};

export default HeroSection;
