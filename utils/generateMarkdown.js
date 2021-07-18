// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const { title } = data;


  return `
  # Project Title ${data.projectTitle}
  ## Table of Contents
  ## Project Description
  ### Licensing Information & Badge
  ### Live Site (Optional)
  ### Embedded Video (Optional)
  ## Installation (Optional)
  ## Usage (Optional)
  ## Contribution (Optional)
  ## Testing (Optional)
  ## Questions?
  Reach out to the repo owner, [NAME] at [EMAIL].
  `;
}

module.exports = generateMarkdown;



