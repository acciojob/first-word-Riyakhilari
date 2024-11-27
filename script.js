function firstWord(s) {
  // your code here
	s=s.trim;
	const spaceIndex = s.Index = s.indexOf(' ');
	 if (spaceIndex === -1) {
        return s;
    }
	return s.slice(0, spaceIndex);

	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
