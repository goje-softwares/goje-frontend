/// <reference types="Cypress" />

import { data } from "./data";
const { email, pass } = data;

describe("Add Product", () => {
  it("successfully adds product", () => {
    cy.login(email, pass);
    cy.visit("/dashboard");
    cy.get("#productItem").click();
    cy.get("#field-\\:r7\\:").type("محصول");
    cy.get("#field-\\:r9\\:").type("۰");
    cy.get("#field-\\:rb\\:").type("۰{enter}");
    cy.contains("محصول اضافه شد");
  });
});
