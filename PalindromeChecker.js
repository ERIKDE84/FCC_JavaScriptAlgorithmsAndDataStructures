function palindrome(str) {
  let regex = /[^a-zA-Z0-9]/g
  str = str.replace(regex, "").toLowerCase();
  
  for (let i = 0; i < (str.length/2); i++){
    if( str[i] != str[str.length-(1+i)]){
      return false
    }
  }
  return true;
}

console.log(palindrome("eye"));
