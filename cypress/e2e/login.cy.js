/// <reference types="Cypress" />

// TODO: clean code
describe("Login", () => {
  const email = "karim@gmail.com";
  const pass = "12345678";

  it("successfully logs in", () => {
    cy.visit("/");
    cy.get("#signup > .chakra-button").click();
    cy.get("#email").type(email);
    cy.get("#password").type(pass);
    cy.get("form").submit();
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard");
  });
});
