export default class Configuracion {
  checkUserAgent = function (name) {
    if (navigator.userAgent.indexOf(name) != -1) {
      return true;
    } else {
      return false;
    }
  };

  getDeviceName = function () {
    "use strict";

    let device = "n/a";

    if (
      this.checkUserAgent("Android") ||
      (this.checkUserAgent("iPhone") && !window.MSStream)
    ) {
      device = true;
    } else if (
      this.checkUserAgent("Mac OS") ||
      this.checkUserAgent("Macintosh") ||
      this.checkUserAgent("Windows")
    ) {
      device = false;
    } else {
      device = undefined;
    }

    return device;
  };

  constructor(gameCanvas) {
    this.isMobile = this.getDeviceName();
    this.canvas = gameCanvas;
  }

  resize = function () {
    if (this.canvas.requestFullscreen) {
      this.canvas.requestFullscreen();
    } else if (this.canvas.mozRequestFullScreen) {
      /* Firefox */
      this.canvas.mozRequestFullScreen();
    } else if (this.canvas.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.canvas.webkitRequestFullscreen();
      /* IE/Edge */
      this.canvas.msRequestFullscreen();
    }

    screen.orientation.lock("landscape");

    /*let canvas = document.querySelector("canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windwRatio = windowWidth / windowHeight;
    let gameRatio = game.config.width / game.config.height;

    if (windwRatio < gameRatio) {
      canvas.style.width = windowWidth + "px";
      canvas.style.height = windowHeight + "px";
    } else {
      canvas.style.width = windowHeight * gameRatio + "px";
      canvas.style.height = windowHeight + "px";
    }*/
  };
}
