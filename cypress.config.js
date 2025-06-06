const { defineConfig } = require("cypress");

// Setup env
const dotenv = require("dotenv");
dotenv.config();

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: false
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: true,
  videoCompression: 32,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  e2e: {
    defaultCommandTimeout: 10000,
    env: {
      ...process.env,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
