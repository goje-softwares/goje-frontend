/// <reference types="Cypress" />

import { data } from "./data";
const { email, pass } = data;

describe("Add Product", () => {
  it("successfully delets product", () => {
    cy.login(email, pass);
    cy.get("#productItem").click();
    cy.get("#deleteButton1").click();
    cy.get(".css-f2rl1c").click();
    cy.contains("حذف شد");
  });
});
