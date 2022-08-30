/// <reference types="Cypress" />

import { data } from "./data";
const { email, pass } = data;

describe("Login", () => {
  it("successfully logs in", () => {
    cy.login(email, pass);
  });
});
