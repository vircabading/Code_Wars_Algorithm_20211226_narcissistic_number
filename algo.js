////////////////////////////////////////////////////////
//  Code Wars: Narcissistic Number
//  By: Virgilio D> Cabading Jr.
////////////////////////////////////////////////////////

// Code me to return true or false
/**
 * Narcissistic Function
 * @param {int} value 
 * Find if value is a narcissistic number
 * @retruns: boolean: True if value is narcissitic number, False otherwise
 */

function narcissistic(value) {
    //  Convert value to a string
    let valueString = value.toString();
    let sum = 0;
    let power = valueString.length;
    console.log("power:",power)

    //  iterate through each character of valueString
    for (let idx=0; idx < power; idx++) {
      sum += parseInt(valueString[idx]);
      console.log("sum:", sum); 
    }

  }

  narcissistic(137);