const fs = require('fs');
const clearNotice = require('./clear-notice');

/**
 * Adds a copyright notice to the top of a file
 * @param {string} file 
 * @param {string} message 
 */
const addNotice = (file, message) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${file}`);
      return;
    }
    
    const formatted = clearNotice(data);
    
    if (formatted === false) {
      console.error(`Could not add notice to ${file}`);
      return;
    }
    
    let contents = '';
    
    contents += '/* \r\n';
    contents += '*** Notice *** \r\n';
    contents += `${message} \r\n`;
    contents += '************** \r\n';
    contents += '*/\r\n';
    
    contents += formatted;
    
    fs.writeFile(file, contents, 'utf8', (err) => {
      console.log(`Added notice to ${file}`);
    });
  });
};

module.exports = addNotice;
