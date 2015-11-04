describe('Serving the dashboard', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should have a heading "Cups"', function() {

    var heading = element(by.css('h1'));
    // expect(heading.getText()).toContain('Cups ');
    expect(heading.getText()).toMatch(/Cups\s\(\d\)/);

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

  describe('When searching a cupper', function() {

    it('should update the value of the heading', function() {

      element(by.css('h1')).getText()
        //              Cups (4)
        .then(function(originalValue){

          element(by.model('cuppersQuery')).sendKeys('G');
          var newValue = element(by.css('h1')).getText();
          //     Cups (1)
          expect(newValue).not.toBe(originalValue);
        });
    });
  });

  // Übung
  // Eingabefeld des filters mit by.model()-Selektor suchen
  // Prüfen, ob das Eingabefeld im DOM verfügbar ist.
});
