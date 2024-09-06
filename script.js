function firstChar(text) {
  // your code here
	str =text
	  str = str.trim();
    if(str.length === 0) {
        return ''; 
    } else {
        return str[0];
    }
 
 const text = prompt("Enter text:");
 alert(firstChar(text));  
