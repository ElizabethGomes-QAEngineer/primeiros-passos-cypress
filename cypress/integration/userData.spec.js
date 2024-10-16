/// <reference types="cypress" />

describe('Testando o userData', () => {
    it('Deve carregar o arquivo userData', () => {
        cy.fixture('userData.json').then((userData) => {
            // Aqui você pode usar os dados de userData
            console.log(userData);
        });
    });
});
