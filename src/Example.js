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
    	console.log(originalPhrase.charAt(i));
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