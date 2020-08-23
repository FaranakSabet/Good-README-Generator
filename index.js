a;

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
var fs = require("fs");

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
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  fs.open("README.md", "w", function (err, file) {
    if (err) throw err;

    let content = `## Title\n${answers.title}\n\n`;
    if (answers.license == "mit")
      content +=
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n";
    else if (answers.license == "isc")
      content +=
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n\n";
    else if (answers.license == "bsd3")
      content +=
        "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n\n";
    else
      content +=
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n";

    // Description, Installation, Usage, Contributing, and Tests

    let buffer = new Buffer(content);

    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.write(fd, buffer, 0, buffer.length, null, function (err) {
      if (err) throw "error writing file: " + err;
      // fs.close(fd, function() {
      //     console.log('wrote the file successfully');
      // });
    });
  });

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
  {
  title: 'abcd',
  description: '',
  installation: '',
  usage: '',
  contribution: '',
  test: '',
  license: 'mit',
  github: 'abc',
  email: 'abc@d.in'
  }*/
});
