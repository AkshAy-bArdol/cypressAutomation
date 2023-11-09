const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'ssihyj',
    reporter: 'cypress-mochawesome-reporter',//for html report
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
          screenshotOnFailure = true
          require('cypress-mochawesome-reporter/plugin')(on);
          

    },
  },
});

