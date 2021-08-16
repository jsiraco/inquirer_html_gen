const inquirer = require("inquirer");
const fs = require("fs");

const literalHTML = ({name, location, github, linkedIn, stack}) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css">
  <title>My Page</title>
</head>
<body>
  <div class="hero is-primary">
    <div class="hero-body">
        <h1 class="Title">My name is ${name}</h1>
        <p class="subtitle">I'm from ${location}.</p>
    </div>
    </div>
    <div class="hero is-warning">
        <div class="hero-body">
            <h3 class="title">Contact</h3>
            <ul class="subtitle">
                <li>GitHub: ${github}</li>
                <li>LinkedIn: ${linkedIn}</li>
            </ul>
        </div>
    </div>
    <div class="hero is-danger">
        <div class="hero-body">
            <h3 class="title">Skills</h3>
            <h3 class="subtitle">${stack}</h3>
        </div>
    </div>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "location",
            message: "Where are you located?",
        },
        {
            type: "input",
            name: "linkedIn",
            message: "What is your LinkedIn?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub ID?",
        },
        {
            type: "input",
            name: "bio",
            message: "Tell us about yourself",
        },
        {
            type: "checkbox",
            name: "stack",
            message: "What languages do you know?",
            choices: ["HMTL", "CSS", "Javascript", "Node.js" , "cat"],
        },
    ])
    .then((data) => {
        const filename = "index.html";
        const contentHTML = literalHTML(data);
        fs.writeFile(filename, contentHTML, (err) =>
            err ? console.log(err) : console.log("Success")
        );
    });
    //fs.existsSync