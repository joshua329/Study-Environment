/**
 * Arary Type Annotations
 * The empty array ([]) is compatible with any array type
 */
let names_arr: string[] = ['Danny', 'Samantha'];
let names_list: Array<string> = ['Danny', 'Samantha'];
let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];

// string[][] is short-hand for (string[])[]
let arr_2d: string[][] = [['str1', 'str2'], ['more', 'strings']];

// Rest Parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function smush(firstString, ...otherStrings: string[]){
    /*rest of function*/
}

// Spread Parameters 
let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];