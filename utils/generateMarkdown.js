// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

//   if (!license) {
//     return "";
//   } else {

//     return `
//     ### Licensing 
//     (Optional)
//     license.licenseChoice
//     `
// }
// };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  const { github, licenseChoice, ...info } = data;

  return `
  # ${info.projectTitle}

  ## Table of Contents
  - [Description](#project-description)
    - [Licensing](#licensing)
    - [Live Site](#live-site)
    - [Demo](#demo)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Project Description
  ${info.description}

  ### Licensing 
  (Optional)
  ${licenseChoice}
  
  ### Live Site 
  (Optional)
  [${info.projectTitle}](${info.liveSiteLink})

  ### Demo 
  (Optional)
  ![Demo/Walkthrough](${info.siteDemoLink})

  ## Installation 
  ${info.installationInstructions}

  ## Usage 
  ${info.usageInstructions}

  ## Contribution
  ${info.contributionInstructions}

  ## Testing
  ${info.testInstructions}

  ## Questions
  Reach out to the repo owner, ${github} at ${info.questionsEmail}.
  `;
}

module.exports = generateMarkdown;



