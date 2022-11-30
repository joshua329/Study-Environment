/**
 * Arary Type Annotations
 * The empty array ([]) is compatible with any array type
 */
let names_arr = ['Danny', 'Samantha'];
let names_list = ['Danny', 'Samantha'];
let arr = [['str1', 'str2'], ['more', 'strings']];
// string[][] is short-hand for (string[])[]
let arr_2d = [['str1', 'str2'], ['more', 'strings']];
// Rest Parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function smush(firstString, ...otherStrings) {
    /*rest of function*/
}
// Spread Parameters 
let codecademyCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates = [25, 0, 'N', 71, 0, 'W'];
