// TODO: Include packages needed for this application

const inqirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = () => {

    return inqirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the usage instructions?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the tests for your project?'
        },
        {

            type: 'list',
            name: 'license',
            message: 'What license should your project have?',
            choices:    ['MIT', 'Apache 2.0', 'GPL 3.0', ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'links',
            message: 'What are some useful links for your project?',
        }

    ]);
};

// TODO: Create a function to write README file


  writeToFile = (fileName, data) => {

    return writeFile(fileName, data);
  }
    // Generate the README content with the user's responses
   
   

    // Write the README content to a file
    


  



// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answers => {
      return writeToFile('README.md', generateMarkdown(answers));
    })
    .then(() => {
      console.log('Successfully wrote to README.md')
    })
    .catch(err => {
      console.log(err)
    });
  }

// Function call to initialize app
init();
