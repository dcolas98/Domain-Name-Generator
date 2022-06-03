/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#Domain-Names").innerHTML = generateExcuse();
  });
  let randomNumber = Math.random() * 10;
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["The", "It"];
  let subject = ["TallRaccon", "Shortdude", "Chicken", "Poop", "Toilet"];
  let action = ["Peed", "fought", "ran", "yelled"];
  let possion = ["homework", "car", "wii", "watermelon"];
  let where = ["room", "thegarbage can", "purplehouse"];
  let website = [".net", ".org", ".com", ".gov", ".edu"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possionIndex = Math.floor(Math.random() * possion.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  let websiteIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    subject[subjectIndex] +
    action[actionIndex] +
    possion[possionIndex] +
    where[whereIndex] +
    website[websiteIndex]
  );
};
