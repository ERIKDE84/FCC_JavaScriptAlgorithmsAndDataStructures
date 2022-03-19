function telephoneCheck(str) {
  let validChar = /[^)0-9-(\s]/g;
  let countryCode = /[^0-9]/g.exec(str);
  let index = countryCode? countryCode.index : 0; 
  let strStripped = "";
  let arr_regex = [/[^)0-9-(\s]/g];
  let parRegex = /[\(\)]/;
  let parIndex = [];

  for (let i = 0; i < str.length; i++){ //Find Position of "(" & ")" if exist
    if (parRegex.test(str[i])){
      parIndex.push(i);
    }
  }

  if (parIndex.length % 2 != 0 || parIndex[1] - parIndex[0] > 4){ //Check if Parenthesis are used incorrectly
    return false;
  }

  if ( arr_regex[0].test(str) ){             // Check for Invalid Characters
    return false;
  } 
  if ( 0 < index && index <= 2){           // Check for country code  
    let strCountryCode = str.slice(0, index);
    if (strCountryCode != "1"){           // Check if country code unequal to 1 
      return false;
    }
  }

  for (let i = index < 3? index: 0; i < str.length ; i++){    //Check correct number of digits
    if(/[0-9]/.test(str[i])){
      strStripped = strStripped.concat(str[i]);
    }
  }
  if (strStripped.length != 10){
    return false;
  }else 
    return true;
}

telephoneCheck("1 (555) 555-5555");
