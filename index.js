/*
Title
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions
*/

/*

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

var inquirer = require("inquirer");

console.log("Hi, welcome to the README.md generator");

var questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of your project? ",
    validate: function (value) {
      if (value != "") {
        return true;
      }
      return "Please enter a valid title";
    },
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Write the installation instructions for your project: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Write down the usage information for your project: ",
  },
  {
    type: "input",
    name: "contribution",
    message: "Write down the contribution guidelines for your project: ",
  },
  {
    type: "input",
    name: "test",
    message: "Write down the test instructions for your project: ",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the license for your project",
    choices: ["ISC", "MIT", "GPLv3", "BSD3"],
    filter: function (val) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    name: "github",
    message: "What's your GitHub username? ",
    validate: function (value) {
      if (value != "") {
        return true;
      }
      return "Please enter a valid username";
    },
  },
  {
    type: "input",
    name: "email",
    message: "What's your email address? ",
    validate: function (value) {
      var pass = value.match(/^.+@[a-z]+\.[^.1-9]+$/i);
      if (pass) return true;
      return "Please enter a valid email address";
    },
  },

  {
    type: "confirm",
    name: "toBeDelivered",
    message: "Is this for delivery?",
    default: false,
  },
  {
    type: "input",
    name: "phone",
    message: "What's your phone number?",
    validate: function (value) {
      var pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return "Please enter a valid phone number";
    },
  },
  {
    type: "list",
    name: "size",
    message: "What size do you need?",
    choices: ["Large", "Medium", "Small"],
    filter: function (val) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    name: "quantity",
    message: "How many do you need?",
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number,
  },
  {
    type: "expand",
    name: "toppings",
    message: "What about the toppings?",
    choices: [
      {
        key: "p",
        name: "Pepperoni and cheese",
        value: "PepperoniCheese",
      },
      {
        key: "a",
        name: "All dressed",
        value: "alldressed",
      },
      {
        key: "w",
        name: "Hawaiian",
        value: "hawaiian",
      },
    ],
  },
  {
    type: "rawlist",
    name: "beverage",
    message: "You also get a free 2L beverage",
    choices: ["Pepsi", "7up", "Coke"],
  },
  {
    type: "input",
    name: "comments",
    message: "Any comments on your purchase experience?",
    default: "Nope, all good!",
  },
  {
    type: "list",
    name: "prize",
    message: "For leaving a comment, you get a freebie",
    choices: ["cake", "fries"],
    when: function (answers) {
      return answers.comments !== "Nope, all good!";
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log("\nOrder receipt:");
  console.log(JSON.stringify(answers, null, "  "));
});

/*
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)


  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

 */
