describe("TryingItOut", function() {
  var tryingitout;

  beforeEach(function() {
    tryingitout = new TryingItOut();
  });

  it("should figure out the max value", function() {
    expect(tryingitout.max(1,4)).toEqual(4);
  });

  it("should figure out the max value of 3 numbers", function() {
    expect(tryingitout.maxOfThree(1,4,7)).toEqual(7);
  });

  it("should return true if character is a vowel", function() {
    expect(tryingitout.isAVowel('e')).toBeTruthy();
  });
});
