const totalLength = require("../index.js");


test('should return false for exact match of words', () => {
    expect(totalLength('strong', 'strong')).toBe(false);
  });

  test('should return false for more than one letter transformation', () => {
    expect(totalLength('strong', 'stross')).toBe(false);
  });

  test('should return true for only one letter transformation', () => {
    expect(totalLength('strong', 'string')).toBe(true);
  });
  test('should return false for less than 5 letters', () => {
    expect(totalLength('star', 'stay')).toBe(false);
  });
  test('should return false for more than 5 letters', () => {
    expect(totalLength('fizzle', 'fuzzle')).toBe(false);
  });