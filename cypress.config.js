const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ddstaging.byteproducts.com',
    // baseUrl: 'https://dentaldoor.com',
    chromeWebSecurity: false,
    viewportHeight: 1000,
    viewportWidth: 1600,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
