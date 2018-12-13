console.log("hello world");
import "./scss/main.scss";
import "./scss/fonts.css";

import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
  container: ".doc-slider",
  items: 4,
  gutter: 40,
  controls: true,
  controlsContainer: ".doc-slider__controls",
  nav: false,
  responsive: {
    "1280": {
      items: 4,
      controls: true,
    },
    "980": {
      items: 3,
      controls: true,
    },
    "763": {
      items: 2
    },
    "480": {
      items: 1
    },
    "0": {
      items: 1
    }
  }
});
