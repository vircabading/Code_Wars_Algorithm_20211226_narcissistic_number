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

    //  iterate through each character of valueString
    for (let idx=0; idx < power; idx++) {
      let num = Math.pow(parseInt(valueString[idx]), power);
      sum += num;
    }

    // Determine if value is a narcissistic number
    if (sum === value) {
      return true;
    }
    return false;
  }

  console.log("Testing 7:",narcissistic(7));
  console.log("Testing 153:",narcissistic(153));
  console.log("Testing 371:",narcissistic(371));
  console.log("Testing 8:",narcissistic(8));
  console.log("Testing 154:",narcissistic(154));
  console.log("Testing 372:",narcissistic(372));