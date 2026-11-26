# Playwright + TypeScript Automation Framework
 
[![Playwright Tests](https://github.com/ShiranK90/playwright-ts-automation-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/ShiranK90/playwright-ts-automation-framework/actions/workflows/playwright.yml)
 
An end-to-end test automation framework built with **Playwright** and **TypeScript**, developed in public as a hands-on project. The goal is a clean, maintainable framework that follows the practices I use in professional QA work: Page Object Model, reusable fixtures, UI and API tests, and CI on every push.
 
> **Status: in progress.** I'm building this step by step and documenting what I learn along the way. The roadmap below shows what's done and what's next.
 
## Application under test
 
[SauceDemo](https://www.saucedemo.com), a public demo e-commerce site designed for test automation practice.
 
## Tech stack
 
- [Playwright](https://playwright.dev) (test runner, assertions, tracing, HTML reports)
- TypeScript
- Node.js 22
- GitHub Actions (CI)
## Getting started
 
**Prerequisites:** Node.js 18 or newer (developed on Node 22) and Git.
 
```bash
# 1. Clone the repository
git clone https://github.com/ShiranK90/playwright-ts-automation-framework.git
cd playwright-ts-automation-framework
 
# 2. Install dependencies
npm ci
 
# 3. Install Playwright browsers
npx playwright install
```
 
## Running the tests
 
```bash
# Run all tests (headless)
npx playwright test
 
# Run in headed mode
npx playwright test --headed
 
# Run in UI mode (watch, step through, time travel)
npx playwright test --ui
 
# Run a single file
npx playwright test tests/example.spec.ts
 
# Open the last HTML report
npx playwright show-report
```
 
## Roadmap
 
- [x] Project scaffolded with Playwright and TypeScript
- [x] GitHub Actions workflow running tests on push and pull requests
- [ ] Real UI tests for SauceDemo: login and inventory
- [ ] Page Object Model
- [ ] Custom fixtures
- [ ] API tests
- [ ] Reporting and trace/screenshot-on-failure setup
- [ ] Test data management and environment config
- [ ] Portfolio case study
## What I'm learning as I build
 
I'm writing every line myself and keeping notes on what I learn: how locators behave, how to read failure reports and traces, and how to structure tests so they stay maintainable as the suite grows. I share short write-ups on [LinkedIn](https://www.linkedin.com/in/shiran-karunasena-702283185/).
 
## About me
 
I'm Shiran Karunasena, a Senior QA / Test Automation Engineer with 7+ years of experience and ISTQB Advanced Level certifications in Test Analysis and Test Automation Engineering. I'm based in Denmark and focus on Playwright, CI/CD integration, and E2E test automation.
 
- LinkedIn: [shiran-karunasena](https://www.linkedin.com/in/shiran-karunasena-702283185/)
- GitHub: [ShiranK90](https://github.com/ShiranK90)
 