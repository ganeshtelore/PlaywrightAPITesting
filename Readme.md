# Playwright API Testing – Restful Booker

This repository contains **API automation tests using Playwright** for the public demo API **Restful Booker**.  
It demonstrates how to test common HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) using **Playwright’s APIRequestContext**.

The goal of this project is **learning and practicing API testing**, authentication handling, and request/response validation using Playwright.

---

## Tech Stack

- **Playwright**
- **TypeScript**
- **Node.js**
- **dotenv** (for environment configuration)

---

## API Under Test

Base URL: https://restful-booker.herokuapp.com


> ⚠️ This is a public demo API.  
> Some responses and status codes do **not strictly follow REST standards**.  
> Tests are written based on **actual API behavior**, not assumptions.

---

## Project Structure
PlaywrightAPI/
│
├── PageObjects/
│ └── HTTPMethod.page.ts # API request methods
│
├── tests/
│ └── APITests.spec.ts # Test cases
│
├── .env # Environment variables
├── playwright.config.ts
├── package.json
└── README.md