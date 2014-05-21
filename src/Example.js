function TryingItOut() {
}
TryingItOut.prototype.max = function(num1, num2){
	if(num1 > num2) return num1;
	else return num2;
};

TryingItOut.prototype.maxOfThree = function(num1, num2, num3){
	var larger;
	if(num1 > num2) larger = num1;
	else larger = num2;
	if(num3 > larger) larger = num3;
	return larger;
};

TryingItOut.prototype.isAVowel = function(inputCharacter){
	if(inputCharacter.length == 1){
		var vowels = ['a','e','i','o','u'];
		for(var i in vowels){
			if(inputCharacter === vowels[i]){
				return true;
				break;
			}
		}
	}
	return false;
};

TryingItOut.prototype.translateIntoRovarspraket = function(originalPhrase){
	var finalPhrase = '';
	for (var i = 0; i < originalPhrase.length; i++) {
		var isAVowel = 0;
		var vowels = ['a','e','i','o','u',' '];
		for(var x in vowels){
			if(originalPhrase.charAt(i) === vowels[x]){
				isAVowel = 1;
				break;
			}
		}
		if(isAVowel === 0){
			finalPhrase += originalPhrase.charAt(i) + 'o' + originalPhrase.charAt(i);
		}else{
			finalPhrase += originalPhrase.charAt(i);
		}
	}
	return finalPhrase;
};

TryingItOut.prototype.sumOfNumbersInArray = function(arrayOfNumbers){
    var sumOfNumbers = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sumOfNumbers += arrayOfNumbers[i];
    }
    return sumOfNumbers;
};

TryingItOut.prototype.multiplyNumbersInArray = function(arrayOfNumbers){
    var multiplicationOfNumbers = 1;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        multiplicationOfNumbers = multiplicationOfNumbers * arrayOfNumbers[i];
    }
    return multiplicationOfNumbers;
};

TryingItOut.prototype.reverseLettersInString = function(initialString){
    var reversedString = '';
    for (var i = 1; i <= initialString.length; i++) {
        var currentPositionFromEnd = initialString.length - i;
        reversedString += initialString[currentPositionFromEnd];
    }
    return reversedString;
};

TryingItOut.prototype.englishToSwedishTranslation = function(englishString){
    var swedishWords = {
        "merry" : "god",
        "christmas" : "jul",
        "and" : "och",
        "happy" : "gott",
        "new" : "nytt",
        "year" : "&134;r"
    };
    var swedishString = '';
    var englishArray = englishString.split(" ");
    for (var i = 0; i < englishArray.length; i++) {
        var englishWord = englishArray[i];
        swedishString += swedishWords[englishWord];
        if(!(i === englishArray.length - 1)){
            swedishString += " ";
        }
    }
    return swedishString;
};

TryingItOut.prototype.findLongestWord = function(arrayOfWords){
    var currentLongestNumber = 0;
    for (var i = 0; i < arrayOfWords.length; i++) {
        if(arrayOfWords[i].length > currentLongestNumber){
            currentLongestNumber = arrayOfWords[i].length;
        }
    }
    return currentLongestNumber;
};

TryingItOut.prototype.filterLongWords = function(arrayOfWords, integer){
    var arrayOfWordsThatPass = [];
    for (var i = 0; i < arrayOfWords.length; i++) {
        if(arrayOfWords[i].length > integer){
            arrayOfWordsThatPass.push(arrayOfWords[i]);
        }
    }
    return arrayOfWordsThatPass;
};

TryingItOut.prototype.charFreq = function(stringGiven){
    var frequencyObjects = {};
    var arrayOfAlphabetChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < arrayOfAlphabetChars.length; i++){
        if(stringGiven.indexOf(arrayOfAlphabetChars[i]) >= 0 && typeof(stringGiven.indexOf(arrayOfAlphabetChars[i])) === 'number'){
            var characterRegEx = new RegExp( arrayOfAlphabetChars[i], 'g' );
            var numberOfOccurrences = stringGiven.match(characterRegEx).length;
            frequencyObjects[arrayOfAlphabetChars[i]] = numberOfOccurrences;
        }
    }
    return frequencyObjects;
};