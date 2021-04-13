import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import shuffle from "../lib/shuffle";

import "./HolidayPage.css";

const snowman = {
  tops: shuffle([
    "snow-top-plain.png",
    "snow-top-magic.png",
    "snow-top-melt.png",
    "snow-top-wacky.png",
    "snow-top-father.png",
    "snow-top-baseball.png",
    "snow-top-samurai.png",
    "snow-top-ghost.png",
  ]),
  middles: shuffle([
    "snow-middle-plain.png",
    "snow-middle-magic.png",
    "snow-middle-melt.png",
    "snow-middle-wacky.png",
    "snow-middle-father.png",
    "snow-middle-baseball.png",
    "snow-middle-samurai.png",
    "snow-middle-ghost.png",
  ]),
  bottoms: shuffle([
    "snow-bottom-plain.png",
    "snow-bottom-magic.png",
    "snow-bottom-melt.png",
    "snow-bottom-wacky.png",
    "snow-bottom-father.png",
    "snow-bottom-baseball.png",
    "snow-bottom-samurai.png",
    "snow-bottom-ghost.png",
  ]),
  backgrounds: shuffle([
    "snow-bg-sunset.png",
    // "snow-bg-wintery.png",
  ]),
};

const HolidayPage = () => {
  return (
    <div className="holiday-app">
      <main className="snowman">
        <div className="snowman__top">
          <ImageCarousel images={snowman.tops} />
        </div>
        <div className="snowman__middle">
          <ImageCarousel images={snowman.middles} />
        </div>
        <div className="snowman__bottom">
          <ImageCarousel images={snowman.bottoms} />
        </div>
        <div className="snowman__background">
          <ImageCarousel images={snowman.backgrounds} nav={false} />
        </div>
      </main>
      <header className="page-header">
        <h1>Happy Holidays</h1>
      </header>

      <footer className="page-footer">
        <p>From your friends in Online Learning</p>
        <p>James, Alex, and Yuta</p>
      </footer>
    </div>
  );
};

export default HolidayPage;
