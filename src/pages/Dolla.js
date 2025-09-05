import React, { useState, useEffect, useMemo, useRef } from "react";

// import style
import "../assets/css/Dolla.scss";

// import assets
import MoneyImg from "../assets/images/money.png";
import SymbolImg from "../assets/images/symbol.png";

const pad2 = (n) => String(n).padStart(2, "0");

const useCountdown = (target, { interval = 1000, onComplete } = {}) => {
  const targetMs = useMemo(
    () => (target instanceof Date ? target : new Date(target)).getTime(),
    [target]
  );
  const cbRef = useRef(onComplete);
  cbRef.current = onComplete;

  const diffNow = () => Math.max(0, targetMs - Date.now());
  const [msLeft, setMsLeft] = useState(diffNow);

  useEffect(() => {
    if (msLeft === 0) {
      cbRef.current?.();
      return;
    }
    const id = setInterval(() => {
      setMsLeft(diffNow());
    }, interval);
    return () => clearInterval(id);
  }, [targetMs, interval, msLeft]);

  const totalSec = Math.floor(msLeft / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  return {
    dd: pad2(days),
    hh: pad2(hours),
    mm: pad2(minutes),
    ss: pad2(seconds),
    done: msLeft === 0,
  };
};

const Dolla = () => {
  const [progress, setProgress] = useState(20);

  const saleEndsAt = "2025-12-31T23:59:59Z";
  const { dd, hh, mm, ss, done } = useCountdown(saleEndsAt, {
    onComplete: () => console.log("Pre-sale ended"),
  });

  const handleProgress = () => {
    setProgress((p) => (p >= 100 ? 100 : p + 10));
  };

  return (
    <div className="dolla-section" id="dolla">
      <div className="presale-wrapper">
        <div className="presale-title text">
          $Dolla <br /> Pre-Sale
        </div>
        <div className="presale-content">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </div>
        <button
          className="learn-btn medium-text"
          type="button"
          onClick={() => alert("Learn More link is not working yet.")}
        >
          Learn More
        </button>
      </div>
      <div className="buy-wrapper">
        <div className="buy-bar">
          <img src={MoneyImg} alt="money" className="money-img" />
          <div className="buy-title medium-text">Grab your $Dolla</div>
          <div className="countdown-bar">
            <div className="countdown-text medium-text">Pre Sale Ends In:</div>
            <div className="countdown-time-bar">
              <div className="timer-item">
                <div className="timer-time small-text">{dd}</div>
                <div className="timer-day small-text">Days</div>
              </div>
              <div className="timer-slash small-text">:</div>
              <div className="timer-item">
                <div className="timer-time small-text">{hh}</div>
                <div className="timer-day small-text">Hours</div>
              </div>
              <div className="timer-slash small-text">:</div>
              <div className="timer-item">
                <div className="timer-time small-text">{mm}</div>
                <div className="timer-day small-text">Minutes</div>
              </div>
              <div className="timer-slash small-text">:</div>
              <div className="timer-item">
                <div className="timer-time small-text">{ss}</div>
                <div className="timer-day small-text">Seconds</div>
              </div>
            </div>
          </div>
          <div className="raised-bar">
            <div className="raised-text">
              Raised: {50 * progress} Sol / 5000 Sol
            </div>
            <div className="raised-progress-bar">
              <div
                className="raised-progress"
                style={{ width: `${progress}%` }}
              ></div>
              <img
                src={SymbolImg}
                alt="symbol"
                className="symbol-img"
                style={{ left: `${progress}%` }}
              />
            </div>
            <div className="price-item">
              <div className="price-text">Current Price:</div>
              <div className="price-value">$0.00231</div>
            </div>
            <div className="price-item">
              <div className="price-text">Listing Price:</div>
              <div className="price-value">$0.00231</div>
            </div>
          </div>
          <div className="buy-btn-group">
            <button
              type="button"
              className="buy-btn medium-text"
              onClick={() => handleProgress()}
            >
              Buy With Card
            </button>
            <button
              type="button"
              className="buy-btn medium-text"
              onClick={() => handleProgress()}
            >
              Buy With Crypto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dolla;
