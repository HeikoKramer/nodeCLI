const axios       = require('axios');
const handleError = require('cli-handle-error');

const apiURL = `https://api.github.com/users/HeikoKramer`;

module.exports = async isDebug => {

  try {
    const res  = await axios.get(apiURL);
    const publicRepos = res.data.public_repos;
    console.log(`
Public Github Repos: ${publicRepos}
    `);
  } catch (error) {
    if (isDebug) {
      handleError(`API CALL FAILED`, error, true, false)
  } else {
      handleError(`API CALL FAILED`, error, false, false)
    }
  }
}