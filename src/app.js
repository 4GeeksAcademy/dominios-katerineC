/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };


let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".uy", ".es", ".ar"];

let dominios = [];

pronoun.forEach((start) => {
  adj.forEach((mid) => {
    noun.forEach((end) => {
      extension.forEach((ext) => {
        let domain = `${start}${mid}${end}${ext}`;

        console.log(domain);

        dominios.push(domain);
      });
    });
  });
});

console.log(dominios);
