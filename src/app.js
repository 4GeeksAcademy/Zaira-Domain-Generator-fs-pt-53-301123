/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "one"];
  let adjectives = ["cool", "newbie", "bold", "absurd"];
  let nouns = ["developer", "spirit", "brain"];
  let extensions = [".tech", ".pro"];

  let allArrays = [pronouns, adjectives, nouns, extensions];
  let domains = allArrays.reduce(function totalCombinations(total, arr) {
    return total * arr.length;
  }, 1);

  let allDomains = [];

  for (let i = 0; i < domains; i++) {
    let innerIndex = i;
    let combined = allArrays
      .map(function totalCombinations(arr) {
        let index = innerIndex % arr.length;
        innerIndex = Math.floor(i / arr.length);
        return arr[index];
      })
      .join("");

    allDomains.push(combined);
  }
  document.querySelector("#domainGenerator").innerHTML = allDomains.join(
    "<br>"
  );
};
