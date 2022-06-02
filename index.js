// TODO: Include packages needed for this application
const fs=require("fs");
const path=require("path");
const { prompt }=require("inquirer")
const generateMarkdown = require("./generatemarkdown")
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type:"input",
        name:"title",
        message:"Portfolio?",
    },
    {
        type:"list",
        name:"license",
        message:"license?",
        choices:["MIT","BSD","GPL"]
    },
    {
        type:"input",
        name:"description",
        message:"description?",
    },
    {
        type:"input",
        name:"installation",
        message:"installation?",
    },
    {
        type:"input",
        name:"usage",
        message:"usage?",
    },
    {
        type:"input",
        name:"authors",
        message:"authors?",
    },
    {
        type:"input",
        name:"github",
        message:"github-username?",
    },
    {
        type:"input",
        name:"contact",
        message:"contact?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(),"/example/",fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(answers =>{
       writeToFile("README.md",generateMarkdown(answers))
    })
}

// Function call to initialize app
init();