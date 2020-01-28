import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const nemo = ["Nemo", "Orange", "Madidson"];

const findNemo = array => {
  //const performance = require('perf_hooks');
  let start = performance.now();

  for (let i = 0; i < array.length; i++) {
    return array[i] === "Nemo" ? "Nemo found!" : "No Nemo";
  }
  let end = performance.now();
  console.log(`It took ${end - start} milliseconds`);
};

findNemo(nemo);
