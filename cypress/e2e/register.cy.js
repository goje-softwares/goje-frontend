/// <reference types="Cypress" />

import { data } from "./data";
const { name, email, pass } = data;

describe("SignUp", () => {
  beforeEach(() => {
    cy.exec("yarn wipe:backend-db");
  });

  it("successfully registers", () => {
    cy.register(name, email, pass);
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard");
  });
});

describe("SignUp", () => {
  it("email is taken", () => {
    cy.register(name, email, pass);
    cy.contains("ایمیل قبلا در سیستم ثبت شده است");
  });
});
