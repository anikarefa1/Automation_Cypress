describe('Login Test', () => {
  it('should log in successfully with valid credentials', () => {
    // Visit the login page
    cy.visit('http://192.168.0.109:96/login');

    // Find the username field and type in a valid username
    cy.get('input[name="email"]').type('mazhar.tiller@gmail.com');

    // Find the password field and type in a valid password
    cy.get('input[name="password"]').type('123456');

    // Find the submit button and click it
    //cy.get('button[type="login"]').click();
    cy.get('.btn-blue-sm').click(),
    cy.get('.w-24 > .w-full').click(),
    cy.get('.space-y-2 > :nth-child(4) > .flex').click(),


    // Verify that the login was successful
    // This can be done by checking for a specific element, like a user profile link
    cy.url().should('include', '/dashboard'); // Example of URL change after login
    cy.get('h1').should('contain', 'Welcome'); // Example of a successful login message or title
  });
  it('should show an error message for invalid credentials', () => {
      // Visit the login page
      cy.visit('http://192.168.0.109:96/login');
  
      // Enter invalid credentials
      cy.get('input[name="email"]').type('gdfdss@gmail.com');
      cy.get('input[name="password"]').type('bfg123');
      
      // Submit the form
      cy.get('.btn-blue-sm').click(),
  
      // Verify that an error message is displayed
      cy.get('.error-message').should('be.visible').and('contain', 'Invalid credentials');
    });
});