
function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decoded = "";

  for ( let i = 0; i < str.length; i++ ){
    let index = alphabet.indexOf(str[i]);
    if ( index == -1 ){                             // If char is not a Letter 
      decoded = decoded.concat(str[i]);
    }
    else if ( index <= 12 ){                        // If char is A-M
      decoded = decoded.concat(alphabet[index+13]) 
    }
    else if ( index >= 13 ){                        // If char is N-Z
      decoded = decoded.concat(alphabet[index-13])
    }
  }
  return decoded;
}

console.log(rot13("SERR PBQR PNZC"));
