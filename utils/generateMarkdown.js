// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
   const urlencoded = encodeURIComponent(license);
   return `[![License: ${license}](https://img.shields.io/badge/license-${urlencoded}-blue.svg)](https://opensource.org/licenses/${urlencoded})`;
}
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {const urlencoded = encodeURIComponent(license);
    return `https://www.google.com/search?q=${urlencoded}`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === 'None') {
  return  '';
} else {
  return `## License
  Licensed under the ${license} license.`;
//${renderLicenseSection(license)}
}


}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, tests, license, github, email, links }) => {
  return `# ${title}
  ## Description
  ${description}
  ## Steps required for installation
  ${installation}
  ## Usage
  ${usage}
  ## Tests
  ${tests}
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}). 
   ${links}
   ${renderLicenseBadge(license)}
   ${renderLicenseSection(license)}
  `};
module.exports = generateMarkdown;
