import React, { useState } from "react";
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
    "snow-top-ghost.png"
  ]),
  middles: shuffle([
    "snow-middle-plain.png",
    "snow-middle-magic.png",
    "snow-middle-melt.png",
    "snow-middle-wacky.png",
    "snow-middle-father.png",
    "snow-middle-baseball.png",
    "snow-middle-samurai.png",
    "snow-middle-ghost.png"
  ]),
  bottoms: shuffle([
    "snow-bottom-plain.png",
    "snow-bottom-magic.png",
    "snow-bottom-melt.png",
    "snow-bottom-wacky.png",
    "snow-bottom-father.png",
    "snow-bottom-baseball.png",
    "snow-bottom-samurai.png",
    "show-bottom-ghost.png"
  ])
};

const renderSnowmanSegment = (imgArray, activeIndex) =>
  imgArray.map((img, i) => (
    <img
      key={i}
      src={`img/holiday/${img}`}
      className={activeIndex === i ? "is-active" : ""}
      alt="Snowman Top"
    />
  ));

const getNextIndex = (arr, current) => (current + 1) % arr.length;

export default () => {
  const [topItemIndex, setTopItemIndex] = useState(0);
  const [middleItemIndex, setMiddleItemIndex] = useState(0);
  const [bottomItemIndex, setBottomItemIndex] = useState(0);

  const handleTopItemClick = () => {
    const nextIndex = getNextIndex(snowman.tops, topItemIndex);
    setTopItemIndex(nextIndex);
  };
  const handleMiddleItemClick = () => {
    const nextIndex = getNextIndex(snowman.middles, middleItemIndex);
    setMiddleItemIndex(nextIndex);
  };
  const handleBottomItemClick = () => {
    const nextIndex = getNextIndex(snowman.bottoms, bottomItemIndex);
    setBottomItemIndex(nextIndex);
  };

  return (
    <div className="holiday-app">
      <header className="page-header">
        <h1>Happy Holidays</h1>
      </header>
      <main className="snowman">
        <div className="snowman__top" onClick={handleTopItemClick}>
          {renderSnowmanSegment(snowman.tops, topItemIndex)}
        </div>
        <div className="snowman__middle" onClick={handleMiddleItemClick}>
          {renderSnowmanSegment(snowman.middles, middleItemIndex)}
        </div>
        <div className="snowman__bottom" onClick={handleBottomItemClick}>
          {renderSnowmanSegment(snowman.bottoms, bottomItemIndex)}
        </div>
      </main>
      <footer className="page-footer">
        <p>From Your Friends in Online Learning</p>
        <p>James, Alex, and Yuta</p>
      </footer>
    </div>
  );
};
