/* if
2 =="2" =>true
2 ==="2" =>false
false == 0 =>true
false == '' =>true
0 == '' =>true
*/


// *********** switch statements **************
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}