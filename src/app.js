/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#domainGenerator").innerHTML = generateDomain();
};
function generateDomain() {
  let pronouns = ["i", "you", "the", "we", "one", "our"];
  let adjectives = ["cool", "newbie", "ingenious", "bold", "sharp", "absurd"];
  let nouns = ["cat", "developer", "person", "spirit", "brain", "senior"];
  let extensions = [".com", ".tech", ".pro", ".zed", ".info", ".web"];

  let domain = "";

  let domainParts = [pronouns, adjectives, nouns, extensions];

  for (let wholeDomain of domainParts) {
    let randomIndex = Math.floor(Math.random() * wholeDomain.length);
    domain += wholeDomain[randomIndex];
  }
  return domain;
}

console.log(generateDomain());
