const constants = require('./constants');

/**
 * Clears any existing notice data from the top of a file
 * @param {string} fileContents
 */
const clearNotice = (fileContents) => {
  const normalized = fileContents.replace(/[\n\r]+/g, '');
  const hasExistingNotice = normalized.startsWith(`/* ${constants.noticeStart}`);
  
  if (!hasExistingNotice) {
    return fileContents;
  }
  
  const stripStartIndex = fileContents.indexOf('/*');
  const stripEndIndex = fileContents.indexOf('*/', 2) + 2;

  const toStrip = fileContents
    .substring(stripStartIndex, stripEndIndex)
    .replace(/[\n\r]+/g, '');

  const startValid = toStrip.startsWith(`/* ${constants.noticeStart}`);
  const endValid = toStrip.endsWith(`${constants.noticeEnd} */`);
  
  if (!startValid || !endValid) {
    return false;
  }
  
  const stripped = fileContents
    .replace(fileContents.substring(stripStartIndex, stripEndIndex), '');
  
  return stripped.replace(/^\s+/g, '');
};

module.exports = clearNotice;
