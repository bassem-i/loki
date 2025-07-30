const fs = require('fs');
const path = require('path');

/**
 * Storybook V8 builds includes an index.json file that contains all the stories for the project.
 * This function reads the index.json file and returns the content of the file.
 *
 * @param {string} baseUrl - The base url of the storybook build.
 * @returns {string} - The content of the index.json file.
 */
function getStoriesFromIndex(baseUrl) {
  const absoluteUrl = baseUrl.startsWith('file:')
    ? baseUrl.replace('file:', '')
    : baseUrl;

  const indexJsonContent = fs.readFileSync(
    path.join(absoluteUrl, 'index.json'),
    'utf8'
  );

  return JSON.stringify(JSON.parse(indexJsonContent));
}

module.exports = { getStoriesFromIndex };
