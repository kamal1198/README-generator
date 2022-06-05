// function to generate markdown for README

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

function generateMarkdown(data) {
    return `
    # ${data.Title}
    https://github.com/${data.Username}/${data.Title}
    # Description
    ${data.Description}
    # Table of Contents 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    # Installation
    The following necessary dependencies must be installed to run the application properly: ${data.Installation}
    # Usage
    In order to use this app, ${data.Usage}
    # License
    This project is licensed under the ${data.License} license. 
    ${renderLicenseSection(data.License, data.Contributing, data.Title)}
    # Contributing
    ​Contributors: ${data.Contributing}
    # Tests
    The following is needed to run the test: ${data.Tests}
    # Questions
    If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}.
    `
}

module.exports = generateMarkdown;