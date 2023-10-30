describe('start', () => {
	it('user can enter a name, start the quiz, answer questions and get the highscore', () => {
		cy.visit('');
		cy.get('#name-input').should('be.visible').type('testuser');
		cy.get('#start-button').click();
		cy.get('#loading-container').should('be.visible');
		cy.get('#answers-container').should('be.visible');
		for (let i = 0; i < 15; i++) {
			cy.get('#answer-0').click();
		}
		cy.get('#loading-container').should('be.visible');
		cy.get('#highscore-list').should('be.visible');
	});
});
