describe("Pruebas a formulario", () => {
    it("Podemos rellenar el formulario?", () => {
        cy.visit('/')
        cy.get('form')

        cy.get('input[name="name"]')
            .type("Fulanito moreno")
            .should("have.value", "Fulanito moreno")

        cy.get('input[name="email"]')
            .type("fulanito@gmail.com")
            .should("have.value", "fulanito@gmail.com")

        cy.get('textarea')
            .type("Hola tengo una pregunta")
            .should("have.value", "Hola tengo una pregunta")


        cy.server()
        cy.route({
            url: "users/**",
            method: "POST",
            response: { status: "Form Saved", code: 201 }
        })
        cy.get("form").submit()


        cy.contains("Form Saved")
    })
})