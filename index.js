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
  //console.log(answers);

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

    content += `## Description\n${answers.description}\n\n`;

    content += `## Table of Contents\n\n* [Title](#title)\n* [Description](#description)\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n\n`;

    content += `## Installation\n${answers.installation}\n\n`;
    content += `## Usage\n${answers.usage}\n\n`;

    content += `## License\nThis project is covered under the ${answers.license.toUpperCase()} license.\n\n`;

    content += `## Contributing\n${answers.contribution}\n\n`;
    content += `## Tests\n${answers.test}\n\n`;
    content += `## Questions\nFor questions please reach me at my [email](mailto:${answers.email}) or you can visit my [GitHub profile](https://github.com/${answers.github}) for additional resources.\n\n`;

    let buffer = new Buffer.from(content);

    // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
    fs.write(file, buffer, 0, buffer.length, null, function (err) {
      if (err) throw "Error writing file: " + err;
      fs.close(file, function () {
        console.log("Wrote the file successfully");
      });
    });
  });
});
