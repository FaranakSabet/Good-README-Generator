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
    message: "What's the title of your project ?",
    validate: function (value) {
      if (value != '') {
        return true;
      }
      return "Please enter a valid title";
    },
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: "
  },
  {
    type: "input",
    name: "installation",
    message: "Write the installation instructions for your project: "
  },
  {
    type: "input",
    name: "usage",
    message: "Write down the usage information for your project: "
  },
  {
    type: "input",
    name: "contribution",
    message: "Write down the contribution guidelines for your project: "
  },
  {
    type: "input",
    name: "test",
    message: "Write down the test instructions for your project: "
  },
  {
    type: "list",
    name: "license",
    message: "Choose the license for your project",
    choices: ["ISC", "MIT", "GPL", "BSD"],
    filter: function (val) {
      return val.toLowerCase();
    },
  },

  /*
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)


  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

 */

