/// <reference types="Cypress" />

import { data } from "./data";
const { email, pass } = data;

describe("Logout", () => {
  it("successfully logs out", () => {
    cy.login(email, pass);
    cy.get("#menu-button-\\:r5\\:").click();
    cy.get("#menu-list-\\:r5\\:-menuitem-\\:r7\\:").click();
    cy.contains("گوجه");
  });
});
