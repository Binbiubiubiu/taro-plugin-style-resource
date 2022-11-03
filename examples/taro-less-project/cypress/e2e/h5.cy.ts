describe("H5 spec", () => {
  it("should the color of a text is right", () => {
    cy.visit("/");
    cy.get(".text__primary")
      .should("contain.text", "Hello world!")
      .should("have.css", "color", "rgb(255, 0, 255)");
  });
});
