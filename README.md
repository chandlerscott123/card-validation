Describe: isValid()
Test: “it should return valid if the card number is 0.”
Code: isValid("0");
Expected Output: “Your card number is valid.”


Test: "It should return invalid if the card number is 1."
Code: isValid("1");
Expected Output: "Your card number is invalid."


Describe: sumCardDigits()

Test: "It should return 0 if the card number is 0."
Code: sumCardDigits(0);
Expected Output: "0"

Test: "It should return 21 if the card number is 11."
Code: sumCardDigits(11);
Expected Output: "21"

Test: "It should return 50 if the card number is 70."
Code: sumCardDigits(70);