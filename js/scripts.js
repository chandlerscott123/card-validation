
function isOne(string){
  if(string.length ===1){
    return true;
  }
  else{
    return false;
  }
}

function sumCardDigits(cardNumStr){
  let sum=0;
  let num;
  let cardNumArr = cardNumStr.split(""); //make array
 
  
  //check length of cardNumArr
  if(isOne(cardNumStr)){
    
    //convert to int and return sum if length is 1
    sum = parseInt(cardNumStr[0]);
    return sum;
  }

  else if (cardNumStr.length>0){
    //iterate through the array
    cardNumArr.forEach(function(number){
      num = parseInt(number); //change each char to int
      sum += num; //add each num to sum
    });
    return sum;
  }

}


function doubleAlternatingCardDigits(cardNum){
  let currentNum, sum, toSumArr, processed, cardNumArr;
  let numStr=cardNum;

  if (isOne(cardNum)){
    sum=cardNum[0];
    return sum;
  }

  else{
    cardNumArr = cardNum.split("");
    for (let i = cardNumArr.length-1; i>=0; i=i-2){

      currentNum=cardNumArr[i];
      sum = (parseInt(currentNum)*2).toString();
      cardNumArr[i] = isOne(sum) ? sum : (parseInt(sum[0]) + parseInt(sum[1])).toString();
    }
  }
  processed = cardNumArr.join("");
  return processed;

}


function isValid(num){
  return num.endsWith('0');
}



