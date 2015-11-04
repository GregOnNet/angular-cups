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

  


})
