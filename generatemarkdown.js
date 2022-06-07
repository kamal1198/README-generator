// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license=== "MIT"){
        return "[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)"
    }
    else if (license==="BSD"){
        return "[![BSD](https://img.shields.io/badge/license-BSD-blue)](https://opensource.org/licenses/BSD-3-Clause)"
    }
    else if (license==="GPL"){
        return "[![GPL](https://img.shields.io/badge/license-GPL-blue)](https://opensource.org/licenses/GPL-3.0)"
    }
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, author,title) {
    if (license=== "MIT"){
        return "[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)"
    }
    else if (license==="BSD"){
        return "[![BSD](https://img.shields.io/badge/license-BSD-blue)](https://opensource.org/licenses/BSD-3-Clause)"
    }
    else if (license==="GPL"){
        return ` ${title}
        Copyright (C) 2022  ${author}
    
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <http://www.gnu.org/licenses/>.`
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [DESCRIPTION](#description)
  * [INSTALLATION](#installation)
  * [USAGE](#usage)
  * [CONTACT](#contact)
  * [LEGAL](#legal)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contact
  For more information about this project Contacts
  ${data.authors}
  ${data.github}
  ${data.contact}
  
  ${renderLicenseSection(data.license,data.authors,data.title)}

`;
}

module.exports = generateMarkdown;