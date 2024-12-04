describe('User Registration Test', () => {
    beforeEach(() => {
      // Navigate to the registration page
      cy.visit('http://192.168.0.109:96/register'); // Replace with your registration page URL
    });
  
    it('Should successfully register a new user', () => {
      // Fill out the registration form
      cy.get('input[name="firstName"]').type('Test'); // First Name field
      cy.get('input[name="middleName"]').type('Qa'); // Middle Name field
      cy.get('input[name="lastName"]').type('Example'); // Last Name field
      
       // Select a department from a dropdown
       cy.get(':nth-child(4) > .relative > .w-full').click(), //department selection path 
       cy.get('.z-10 > :nth-child(2)').click(),//chif engineer selection path
    //cy.get('select[name="department"]').select('EngChief Engineer'); // Replace with actual department value

    // Select a designation from a dropdown
    cy.get(':nth-child(5) > .relative > .w-full').click(), //designation selection path
    cy.get('.z-10 > :nth-child(2)').click(), //civil engineering selection path
    //cy.get('select[name="designation"]').select('Civil Engineering'); // Replace with actual designation value

      cy.get('input[name="email"]').type('testuser@gmail.com');
      cy.get('input[name="password"]').type('Password123!');
      cy.get('input[name="confirmPassword"]').type('Password123!');
  
      // Submit the form
      cy.get('.btn-blue-full').click();
      //cy.get('button[type="submit"]').click();
  
      // Assert successful registration
      cy.url().should('include', '/dashboard'); // Verify redirection to dashboard or another success page
      cy.contains('Welcome, testuser').should('be.visible'); // Verify success message
    });
  
    //it('Should show an error for already registered email', () => {
      // Fill out the registration form with an existing email
      //cy.get('input[name="firstName"]').type('Test'); // First Name filled
    //cy.get('input[name="lastName"]').type('example'); // Last Name filled
      //cy.get('input[name="email"]').type('testuser@gmail.com'); // Existing email
      //cy.get('input[name="password"]').type('Password123!');
      //cy.get('input[name="confirmPassword"]').type('Password123!');
  
      // Submit the form
      //cy.get('button[type="submit"]').click();
  
      // Assert error message
      //cy.contains('Email is already registered').should('be.visible');
    });
  