describe('When using /welcome', function() {

  beforeEach(function() {
    browser.get('#/welcome');
  });

  it('should display the title', function() {
    expect(element(
      by.cssContainingText('h1', 'Welcome'))
        .getText()
    ).toBe('Welcome a new cupper');
  });

  describe('When adding a cupper with valid input-values', function() {

    it('should display a "Created"-message', function() {
      var id = Math.floor(Math.random() * 10000000);

      // Eingabefelder
      element(by.model('cupper.identity.name'))
        .sendKeys('Gregor Woiwode');
      element(by.model('cupper.identity.matriculationNumber'))
        .sendKeys(id);

      // Add button clicken
      element(by.buttonText('ADD')).click();

      // Expected Condition, um antwort zu testen...
      var EC = protractor.ExpectedConditions;

      var toastMessage = element(by.css('span.snackbar-content'));
      browser.wait(EC.presenceOf(toastMessage), 1000 * 6);
      expect(toastMessage.getText()).toBe('Created');
    });
  });
});
