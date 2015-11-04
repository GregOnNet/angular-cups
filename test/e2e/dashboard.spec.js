describe('Serving the dashboard', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should have a heading "Cups"', function() {

    var heading = element(by.css('h1'));
    expect(heading.getText()).toBe('Cups');

  });

  it('should have a navigation button to /welcome', function() {

    var navigationButton = element(by.css('a'));
    expect(navigationButton.isPresent()).toBeTruthy();

  });

  describe('When clicking on the navigation button', function() {

    it('should navigate to /welcome', function() {

      element(by.css('a#lnk-to-welcome')).click();
                                              // #/welcome
      expect(browser.getCurrentUrl()).toMatch(/#\/welcome/);
    });
  });

  // Übung
  // Eingabefeld des filters mit by.model()-Selektor suchen
  // Prüfen, ob das Eingabefeld im DOM verfügbar ist.
});
