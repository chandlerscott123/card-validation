

function sumCardDigits(cardNumStr){
  let sum=0;
  let num;
  let cardNumArr = cardNumStr.split(""); //make array
  
  //check length of cardNumArr
  if(cardNumStr.length===1){
    
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