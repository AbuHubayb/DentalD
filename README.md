---

# 🦷 DentalMat App – Test Automation Project

This repository contains an automated testing project created specifically for validating core features and behaviors of the **DentalMat App**.

The purpose of this project is to ensure that the application remains reliable, user-friendly, and functional across a wide range of environments and devices.

The test suite is implemented using **[Cypress](https://www.cypress.io/)**, a modern JavaScript end-to-end testing framework that enables fast, reliable, and consistent test execution in the browser.

---

## 🚀 Key Features

* **✅ Site Availability Check**
  Verifies that the DentalMat application is up and running — acting as a health check for the homepage and critical entry points.

* **🔗 Link Validation**
  Ensures all homepage links are valid, preventing broken or misdirected navigation.

* **📱 Responsive Design Testing**
  Tests across **11 different screen resolutions** (from small mobiles to large desktops) to confirm a consistent, optimized user experience.

* **📲 Orientation Testing**
  Validates that the app adapts seamlessly between **portrait** and **landscape** modes on mobile and tablets.

* **📊 Test Reporting with Allure**
  Generates rich, interactive reports with execution history, test pass/fail stats, and detailed case breakdowns.

---

## 📊 Allure Reporting Setup

Allure provides visually rich reports for tracking test outcomes.

### 🔹 Installation

```bash
npm install -g allure-commandline --save-dev
```

Verify installation:

```bash
allure --version
```

### 🔹 Generating Reports

After running Cypress tests, generate the report:

```bash
allure generate allure-results --clean
```

### 🔹 Serving Reports

To open the report locally in your browser:

```bash
allure open
```

---

## 📂 Project Structure

```
.
├── cypress/              # Cypress tests
│   ├── e2e/              # End-to-end test specs
│   ├── fixtures/         # Test data
│   ├── support/          # Custom commands and setup
├── allure-results/       # Raw Allure results (after test runs)
├── README.md             # Project documentation
└── package.json          # Dependencies and scripts
```

---

## 🛠️ Tech Stack

* [Cypress](https://www.cypress.io/) – Test automation framework
* [Allure](https://docs.qameta.io/allure/) – Test reporting
* JavaScript / Node.js – Runtime environment

---

## ✨ Outcome

With this setup, the **DentalMat Test Automation Project** ensures functionality, responsiveness, and reliability of the app while producing clear reports for both developers and stakeholders.

---

⚡ *Tip:* You can also add a **badge** like this at the top for polish:

```markdown
![Cypress](https://img.shields.io/badge/Tested_with-Cypress-04C38E?logo=cypress&logoColor=white)
![Allure Report](https://img.shields.io/badge/Reporting-Allure-FF4E4E?logo=allure&logoColor=white)
```

---

👉 Do you want me to **include the Cypress installation & run instructions** (so someone cloning your repo knows exactly how to set it up from scratch)?

1. Script for Allure installation command line. This should add Allure to the package.json file:
npm install --save-dev mocha-allure-reporter allure-commandline

2. Script for test execution (Chrome). This should be added to the script object in the package.json file. It contains the exact spec we want to run the report for:
"browser:chrome": "npx cypress run --browser=chrome --headed --spec cypress/e2e/Affiliates_Suite/extranet_pages.cy.js --reporter mocha-allure-reporter",

3. Script for test execution (Chrome). This should also be added to the script object in the package.json file. 
"report:allure": "allure generate allure-results --clean -o allure-report && allure open  allure-report"

4. Run 'npm run browser:chrome' in the command line. This should add the allure report folder to the test structure

5. run 'npm run allure:report' in the command line. This would generate the report in another browser.


