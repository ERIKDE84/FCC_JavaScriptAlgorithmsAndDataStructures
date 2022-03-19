function checkCashRegister(price, cash, cid) {
  let value = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let changeAmount = cash - price;
  let changeValue = 0;
  let change = [];
  let cidValue = 0;

  for (let i = 0; i < cid.length; i++){ // How much cash is in the drawer
    cidValue += cid[i][1];
  }
  cidValue = parseFloat(cidValue.toFixed(2)); 
  
  if (cidValue == (cash - price)){       // Return "Closed" if cid equals change
    change = [];
    for (let i = 0; i < cid.length; i++){
      change.push(cid[i]);
    }
    return {status: "CLOSED", change: change};
  }

  for (let i = cid.length - 1; i >= 0; i--){
    let cnt = 0;
    while (cid[i][1] > 0 && (changeAmount / value[i]) >= 0.999999){
        cnt ++;
        changeAmount -= value[i];
        cid[i][1] = cid[i][1] - value[i];
        //console.log(value[i]);

    }
    if(cnt > 0){
      change.push([cid[i][0], cnt*value[i]])
    }
  }

  for (let i = 0; i < change.length; i++){ // Value of Change 
    changeValue += change[i][1];
  }
  changeValue = parseFloat(changeValue.toFixed(2)); 
  console.log(changeValue, change);

  if (cidValue < (cash - price) || changeValue < (cash - price) ){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else {
    return {status: "OPEN", change: change}
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
