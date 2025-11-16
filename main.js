//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  // convert decimal string to number
  function decimalStringToNumber(str) {
  let value = 0;

  for (let i = 0; i < str.length; i++) {
    let digit = str[i].charCodeAt(0) - '0'.charCodeAt(0);
    value = value * 10 + digit;
  }

  return value;
  }

  let currentValue = decimalStringToNumber(inputNumber);
  let binary = "";

  // main conversion loop
  while (currentValue > 0){
      if(currentValue % 2 === 1){
          binary = "1" + binary;
      }
      else{
          binary = "0" + binary;
      }

      currentValue = Math.floor(currentValue / 2);
  }
  //let dtoOut = exMain(inputNumber, inputNumberSystem, outputNumberSystem);
  return binary;
}
export function permittedInputSystems() {
	return [10];
}
export function permittedOutputSystems() {
	return [2];
}