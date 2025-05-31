const { defineConfig } = require('cypress');

Mmodule.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supporteFile: 'cypress/support/e2e.js'
  },
});