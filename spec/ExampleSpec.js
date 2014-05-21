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

  it("should translate phrases into rovarspraket", function() {
    expect(tryingitout.translateIntoRovarspraket('this is fun')).toEqual('tothohisos isos fofunon');
  });

    it("should sum all numbers in an array", function() {
        var arrayOfNumbers = [1,2,3,4];
        expect(tryingitout.sumOfNumbersInArray(arrayOfNumbers)).toEqual(10);
    });

    it("should multiply all numbers in an array", function() {
        var arrayOfNumbers = [1,2,3,4];
        expect(tryingitout.multiplyNumbersInArray(arrayOfNumbers)).toEqual(24);
    });

    it("should reverse all letters in a string", function() {
        var string = 'jag testar';
        expect(tryingitout.reverseLettersInString(string)).toEqual('ratset gaj');
    });

    it("should translate christmas card from english to swedish", function() {
        var englishVersion = 'merry christmas and happy new year';
        expect(tryingitout.englishToSwedishTranslation(englishVersion)).toEqual('god jul och gott nytt &134;r');
    });

    it("should return the length of the longest word", function() {
        var arrayOfWords = ['test', 'testing', 'testing123', 'test1'];
        expect(tryingitout.findLongestWord(arrayOfWords)).toEqual(10);
    });

    it("should return the words that are longer than the integer", function() {
        var arrayOfWords = ['test', 'testingforthewin', 'testing1234', 'test1'];
        var integer = 10;
        var arrayOfWordsThatShouldPass = ['testingforthewin', 'testing1234'];
        expect(tryingitout.filterLongWords(arrayOfWords, integer)).toEqual(arrayOfWordsThatShouldPass);
    });

    it("should return the frequency of each character in the string", function() {
        var stringToPass = 'abbabcbdbabdbdbabababcbcbab';
        var objectTheShouldBeReturned = {
            a : 7,
            b : 14,
            c : 3,
            d : 3
        };
        expect(tryingitout.charFreq(stringToPass)).toEqual(objectTheShouldBeReturned);
    });
});
