function convertToRoman(num) {
  let dict = {
       1000:"M", 900:"CM", 500:"D", 400:"CD", 100:"C", 90:"XC", 50:"L", 40:"XL", 10:"X", 9:"IX", 5:"V", 4:"IV", 1:"I",
       };
  let arr = Object.keys(dict).reverse();
  let str = "";

  for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < 3; j++){
      if (num / arr[i] >= 1){
        num -= arr[i];
        str = str.concat(dict[arr[i]]);
      }
    }
  }
  return str;
}

console.log(convertToRoman(1999));
