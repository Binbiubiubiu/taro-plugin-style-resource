describe("page spec", () => {
  it("should the color of a text is right", () => {
    cy.visit("http://localhost:8080");
    cy.get(".text__primary")
      .should("contain.text", "Hello world!")
      .should("have.css", "color", "rgb(255, 0, 0)");
  });
});
