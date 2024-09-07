function firstChar(text) {
  // your code here

 let chars = text.split('');
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== ' ') {
            return chars[i];
        }
    }
    return `''`;
 const text = prompt("Enter text:");
 alert(firstChar(text));  