Cypress.Commands.add("fillRegisterForm", (name, email, pass) => {
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get("#password").type(pass);
  cy.get("#rPassword").type(pass);
});

Cypress.Commands.add("register", (name, email, pass) => {
  cy.visit("/");
  cy.get("#login > .chakra-button").click();
  cy.fillRegisterForm(name, email, pass);
  cy.get("form").submit();
});

Cypress.Commands.add("login", (email, pass) => {
  cy.visit("/");
  cy.get("#signup > .chakra-button").click();
  cy.get("#email").type(email);
  cy.get("#password").type(pass);
  cy.get("form").submit();
  cy.url().should("include", "/dashboard");
  cy.contains("Dashboard");
});
