var slider = document.getElementById("dateSelector");

// Update the current slider value (each time you drag the slider handle)

import ds1 from './assets/uk_interest_AI-Art.json' assert { type: 'json' };
// console.log(ds1);
document.addEventListener("DOMContentLoaded", function () {
const ctx = document.getElementById("chart1");
const chart1 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});
});