const addNotice = require('./notice-adder/add-notice-to-files');

// public method for using from within js file.
const public = (targetDirectory, message) => {
  if (!targetDirectory || targetDirectory === '') {
    console.error('"copyrightAdderTargetDir" must be set.');
    return;
  }
  
  if (!message || message === '') {
    console.error('"copyrightAdderMessage" must be set.');
    return;
  }

  return addNotice(targetDirectory, message);
};

// command line args for use from command line or package json
// ex: node index.js ./src some_message
const commandArguments = [];

process.argv.forEach((val) => {
  commandArguments.push(val);
});

if (commandArguments.length == 4) {
  public(commandArguments[2], commandArguments[3]);
}

module.exports = public;
