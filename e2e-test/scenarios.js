'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('redditClone Application', function() {

  it('should direct `#` when lite-server starts', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/#');
  });

});
