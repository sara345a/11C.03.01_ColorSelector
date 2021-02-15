"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  const input = document.querySelector("input"); // const for the input tag
  input.addEventListener("input", getInput); // when input tag gets input the getInput function starts
  getInput(input); // brings input parameter to next function
}

function getInput(input) {
  input = document.querySelector("input");

  // let hex == hexvalue
  let hex = input.value;

  //make the div same color as in the selector
  document.querySelector("#color").style.backgroundColor = `${hex}`;

  //display HEX on site
  document.querySelector("#hexcode").textContent = "HEX: " + hex; 

  //call next function and bring parameter with it
  fromHexToRGB(hex);
}

function fromHexToRGB(hex) {

  let r = parseInt(hex.substring(1, 3), 16); 
  let g = parseInt(hex.substring(3, 5), 16); 
  let b = parseInt(hex.substring(5, 7), 16); 

  // write out the values for RGB...
  const rgbOutput = `RGB: (${r}, ${g}, ${b})`;
  // .. and place it into html
  document.querySelector("#rgb").textContent = rgbOutput;

  // call next function and bring parameters with it
  fromRGBToHSL(r, g, b);
}



function fromRGBToHSL(r, g, b) {

    // code from teachers
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }
  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  // amount of decimal is getting shortened to 2 and output is inserset to html
  let hslOutput = `HSL: (${h.toFixed(2)}, ${s.toFixed(2)}%, ${l.toFixed(2)}%)`;
  document.querySelector("#hsl").textContent = hslOutput;
}

