This project is created to test features on the DentalDoor App. It uses Cypress to verify if the site is up and also verify the links on the homepage. The tests also check for the responsiveness of the page across 11 screen sizes and whether the app can still be used in both landscape and portrait modes. 

Reports are generated via Allure, the installation of which is as follows:

1. Script for Allure installation:
--------------------------------------------------------------------
npm install --save-dev mocha-allure-reporter allure-commandline

3. Script for test execution (chrome):
--------------------------------------------------------------------
"browser:chrome": "npx cypress run --browser=chrome --headed --spec cypress/e2e/Affiliates_Suite/extranet_pages.cy.js --reporter mocha-allure-reporter",

5. Allure report generate script:
--------------------------------------------------------------------
"report:allure": "allure generate allure-results --clean -o allure-report && allure open  allure-report"
