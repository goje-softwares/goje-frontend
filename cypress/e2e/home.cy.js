/// <reference types="Cypress" />

describe("Home Page", () => {
  beforeEach(() => {
    // reset database before every test
    cy.exec("yarn wipe:backend-db");
  });
  it("successfully loads", () => {
    cy.visit("/");
  });
});
