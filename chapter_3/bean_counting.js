function countBs(string) {
	return countChar(string, "B");
}

function countChar(string, character){
	var len = string.length;
	var countin = 0;
    for(var i = 0 ; i < len ; i++){
      if(string.charAt(i) === character){
      	countin ++;
      }
    }
  return countin;
}

console.log(countBs("BBC"));
// → 2
 console.log(countChar("kakkerlak", "k"));
// → 4
