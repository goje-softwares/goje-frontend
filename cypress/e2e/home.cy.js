/// <reference types="Cypress" />

describe("Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.contains("گوجه");
  });
});
