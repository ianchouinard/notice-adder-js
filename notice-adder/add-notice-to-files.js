const fs = require('fs');
const path = require('path');
const addNotice = require('./add-notice');
const constants = require('./constants');

/**
 * Handle a directory of js files
 * @param {string} directory
 */
const addNoticeToFiles = (directory, message) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Could not list the directory: ', err);
      process.exit(1);
    }

    files.forEach((file) => {
      fs.stat(`${directory}/${file}`, (err, stat) => {

        if (err) {
          console.error("Error stating file.", err);
          return;
        }

        if (stat.isFile()) {
          if (constants.jsExtensions.includes(path.extname(file))) {
            addNotice(`${directory}/${file}`, message);
          }
        }

        if (stat.isDirectory()) {
          handleDir(`${directory}/${file}`);
        }
      });
    });

  });
};

const handleDir = (directory) => {
  addNoticeToFiles(directory);
};

module.exports = addNoticeToFiles;
