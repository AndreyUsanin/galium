console.log("hello world");
import "./scss/main.scss";
import "./scss/fonts.css";


import { tns } from "../node_modules/tiny-slider/src/tiny-slider";
import tippy from 'tippy.js';

if(document.querySelector('.slider')) {
var slider = tns({
  navContainer: '.controls',
  navAsThumbnails: true,
  "controls": false
  
});
}

if(document.querySelector('.doc-slider')) {
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
}


// TIPPY

tippy('.tt-button', {
  content: document.querySelector('.tt-content'),
  delay: 50,
  animation: 'scale',
  animateFill: false,
  trigger: "click",
  theme: 'light'
})



// TABS

window.onload = function() {

  // Variables 	
  var tabLinks = document.querySelectorAll('.tabs__link');
  var tabContents = document.querySelectorAll('.tabs__item');

  // Loop through the tab link
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      var id = this.hash.replace('#', '');

      // Loop through the tab content
      for (var j = 0; j < tabContents.length; j++) {
				var tabContent = tabContents[j];
        tabContent.classList.remove('is-visible');
        tabLinks[j].classList.remove('is-active');
        if (tabContent.id === id) {
          tabContent.classList.add('is-visible');
        }
      }
			
      this.classList.add('is-active');
    });
  }
	
}