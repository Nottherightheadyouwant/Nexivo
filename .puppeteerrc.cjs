const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the Cache location for Puppeteer on Render
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
