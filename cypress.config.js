const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dei7ym',
  watchForFileChanges: false,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 600,
  waitForAnimations: true,
  animationDistanceThreshold: 20,
  defaultCommandTimeout: 6000,
  execTimeout: 600000,
  pageLoadTimeout : 60000,
  requestTimeout: 15000,
  responseTimeout : 15000,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
