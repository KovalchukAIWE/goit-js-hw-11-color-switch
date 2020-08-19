'use strict';

const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const switcher = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]'),
  };
  
  const colorSwitcher = {
    isActive: false,
    start() {
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      const min = 0;
      const max = colors.length - 1;
      this.intervalId = setInterval(() => {
        document.body.style.background =
          colors[randomIntegerFromInterval(min, max)];
      }, 1000);
    },
    stop() {
      clearInterval(this.intervalId);
      this.isActive = false;
    },
  };
  switcher.buttonStart.addEventListener(
    "click",
    colorSwitcher.start.bind(colorSwitcher)
  );
  switcher.buttonStop.addEventListener(
    "click",
    colorSwitcher.stop.bind(colorSwitcher)
  );