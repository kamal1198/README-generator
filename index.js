// TODO: Include packages needed for this application
const fs=require("fs");
const path=require("path");
const { prompt }=require("inquirer")
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(),"/example/",fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(answers =>{
       writeToFile("README.md","answers")
    })
}

// Function call to initialize app
init();