// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = readmeData => {

    console.log(`
    =================
    Welcome to the ReadMe Generator! 
    Answer the following question prompts to feed information to the generator.
    =================
    `);

    if (!readmeData) {
        readmeData = [];
      }    
    
    return inquirer
    .prompt([
        
        // GITHUB USER NAME
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter your GitHub username!');
            return false;
            }
    }
    },

        // QUESTIONS EMAIL
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Enter an email users can reach out to if they have questions. (Required)',
        validate: questionsEmailInput => {
            if (questionsEmailInput) {
            return true;
            } else {
            console.log('Please enter an email!');
            return false;
            }
    }
    },    
    
        // PROJECT TITLE
    {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project? (Required)',
    validate: projectTitleInput => {
        if (projectTitleInput) {
        return true;
        } else {
        console.log('Please enter the title of your project!');
        return false;
        }
    }
    },

        // PROJECT DESCRIPTION - INPUT
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
    }
    },

        // PROJECT DESCRIPTION - LINK TO LIVE SITE
    {
        type: 'confirm',
        name: 'confirmLiveLInk',
        message: 'Would you like to enter enter a link to the live site, if it exists?',
        default: false,
    },
    {
        type: 'input',
        name: 'liveSiteLink',
        message: 'Provide a link to the live site.',
        when: ({ confirmLiveLInk }) => confirmLiveLInk,
        validate: liveSiteLink => {
            if (liveSiteLink) {
            return true;
            } else {
            console.log('You need to enter a link to the live site!');
            return false;
            }
    }
    },

        // PROJECT DESCRIPTION - LINK TO WALKTHROUGH
    {
        type: 'confirm',
        name: 'confirmDemoLInk',
        message: 'Would you like to embed a video or gif walkthrough or demo, if it exists?',
        default: false,
    },
    {
        type: 'input',
        name: 'siteDemoLink',
        message: 'Provide a link to embed the gif or video.',
        when: ({ confirmDemoLInk }) => confirmDemoLInk,
        validate: siteDemoLink => {
            if (siteDemoLink) {
            return true;
            } else {
            console.log('You need to enter a link to embed a video or gif walkthrough or demo!');
            return false;
            }
    }
    },  

        // LICENSE INFORMATION
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have? Go to choosealicense.com for more information on licenses. (Select One)',
        choices: ['Apache License 2.0', 'ISC', 'MIT', 'GNU GPLv3', 'Other', 'None']
    },

        // PROJECT INSTALLATION
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to enter some installation instructions?',
        default: true,
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Provide instructions to install your project.',
        when: ({ confirmInstallation }) => confirmInstallation,
        validate: installationInstructions => {
            if (installationInstructions) {
            return true;
            } else {
            console.log('You need to provide instructions to install your project!');
            return false;
            }
    }
    },  

        // PROJECT USAGE
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter some usage instructions?',
        default: true,
    },
    {
        type: 'input',
        name: 'usageInstructions',
        message: 'Provide instructions to use your project.',
        when: ({ confirmInstallation }) => confirmInstallation,
        validate: installationInstructions => {
            if (installationInstructions) {
            return true;
            } else {
            console.log('You need to provide instructions to use your project!');
            return false;
            }
        }
    },  
        
        // PROJECT CONTRIBUTION INSTRUCTIONS
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to enter instructions on how users can contribute to your project?',
        default: false,
    },
    {
        type: 'input',
        name: 'contributionInstructions',
        message: 'Provide instructions on how users can contribute to your project.',
        when: ({ confirmContribution }) => confirmContribution,
        validate: contributionInstructions => {
            if (contributionInstructions) {
            return true;
            } else {
            console.log('You need to provide instructions on how users can contribute to your project!');
            return false;
            }
        }
    },  
    
        // PROJECT TESTS
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to enter instructions on how users can test your project?',
        default: false,
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Provide instructions on how users can test your project.',
        when: ({ confirmTests }) => confirmTests,
        validate: testInstructions => {
            if (testInstructions) {
            return true;
            } else {
            console.log('You need to provide instructions on how users can test your project!');
            return false;
            }
        }
    }  
    ])
    
    .then(projectData => {
        readmeData.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(readmeData);
        } else {
          return readmeData;
        }
    });
  };

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
questions()
.then(readmeData => {
    console.log(readmeData)
})
  ;
