This project is created to test features on the DentalDoor App. It uses cypress to verify if the site is up and also verify the links on the homepage. The site also check for the responsiveness of the page across different screen 11 screen sizes and whether the app can still be used in the lanscape mode. 

Reports are generated via Allure, the installation of which is as below:
npm install --save-dev mocha-allure-reporter allure-commandline

Script for test execution:
-------------------------------------------
"browser:chrome": "npx cypress run --browser=chrome --headed --spec cypress/e2e/advanced-examples/actions.cy.js --reporter mocha-allure-reporter",

Allure report generate script:
-------------------------------------------------------
"report:allure": "allure generate allure-results --clean -o allure-report && allure open  allure-report"
