/// <reference types="Cypress" />

// TODO: clean code
describe("SignUp", () => {
  const name = "karim";
  const email = "karim@gmail.com";
  const pass = "12345678";

  beforeEach(() => {
    cy.exec("yarn wipe:backend-db");
  });
  it("successfully registers", () => {
    cy.visit("/");
    cy.get("#login > .chakra-button").click();
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#password").type(pass);
    cy.get("#rPassword").type(pass);
    cy.get("form").submit();
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard");
  });
});

describe("SignUp", () => {
  const name = "karim";
  const email = "karim@gmail.com";
  const pass = "12345678";

  it("email is taken", () => {
    cy.visit("/");
    cy.get("#login > .chakra-button").click();
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#password").type(pass);
    cy.get("#rPassword").type(pass);
    cy.get("form").submit();
    cy.contains("ایمیل قبلا در سیستم ثبت شده است");
  });
});
