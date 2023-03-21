
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
  let cardNumArr = cardNumStr.split(""); 
 
  
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
  let currentNum, doubled, processed, cardNumArr;

  //return cardNum if its length is 1
  if (isOne(cardNum)){
    doubled=cardNum[0];
    return doubled;
  }

  else{
    //split into char array, iterate from left to right
    cardNumArr = cardNum.split("");
    for (let i = cardNumArr.length-1; i>=0; i=i-2){
      
      //double every other char
      currentNum=cardNumArr[i];
      doubled = (parseInt(currentNum)*2).toString();
      
      //if the result is 2 digits, add them together
      cardNumArr[i] = isOne(doubled) ? doubled : (parseInt(doubled[0]) + parseInt(doubled[1])).toString();
    }
  }
  //turn char array back into string and return it
  processed = cardNumArr.join("");
  return processed;

}




//check that cardNum ends in 0
function isValid(num){
  return num.endsWith(0);
}


function processCard(cardNum){

  //process card number, return true if valid
  let cardNum1 = doubleAlternatingCardDigits(cardNum);
  let cardNum2 = sumCardDigits(cardNum1).toString();
  if(isValid(cardNum2)){
    return true;
  }

  return false;


}


function getCardType(cardNum){
  let cardType;
  let cardIdArr = ['3', '4', '5', '6'];
  let cardTypeArr = ["American Express", "Visa", "Mastercard", "Discover"];

  //card number starts with an element in cardIdArr, 
  //match the index in cardTypeArr
  if(cardIdArr.indexOf(cardNum[0])+1){
    cardType = cardTypeArr[cardIdArr.indexOf(cardNum[0])];
  }

  return cardType;

}


function handleSubmission(event){
  event.preventDefault();
  const cardNum = document.getElementById("card-num").value;
  const isCardValid = processCard(cardNum);
  const cardType = getCardType(cardNum);
  const cardDiv = document.getElementById("result");
  cardDiv.removeAttribute("class");
  const typeSpan = document.querySelector("span#type");
  const validSpan = document.querySelector("span#valid");

  typeSpan.innerText = cardType;
  validSpan.innerText= isCardValid ? "valid" : "invalid";

}

window.addEventListener("load", function(){

  let cardForm = document.getElementById("card-form");
  cardForm.addEventListener("submit", handleSubmission);

});



