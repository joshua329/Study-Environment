/* Defining Unions -- Unions allows the defining of multiple 
// member types by separating each type member with a vertical
   line character |  */
function printNumsAndStrings(statement: string | number) {
    console.log(`ℹ️ LOG:: ${statement}`);
}
printNumsAndStrings(329);
printNumsAndStrings('hello!');


// Type Narrowing
function formatValue(value: string | number) {
    // Write your code here
    if (typeof value === 'string') { // Narrowing to string
        console.log(value.toLowerCase());
    } 

    if (typeof value === 'number') {
        console.log(value.toFixed(2));
}
}
  
formatValue('Hiya');
formatValue(42);


// Inferred Union Return Types
type User = {
    id: number;
    username: string;
};

function createUser() {
    const randomChance = Math.random() >= 0.5;

    if (randomChance) {
        return { id: 1, username: 'nikko' };
    } else {
        return 'Could not create a user.';
    }
}

let userData: User | string = createUser(); // <--- multiple types, inferred in the function


/* Unions and Arrays -- Unions can be combined with arrays.
    To create a union that supports multiple types for an 
    array’s values, wrap the union in parentheses (string | number), 
    then use array notation [].
*/
function formatListings(listings: (string | number)[]) {
    return listings.map((listing) => {
        if (typeof listing === 'string') {
        return listing.toUpperCase();
        }

        if (typeof listing === 'number') {
        return `$${listing.toLocaleString()}`;
        }
    });
}
const result = formatListings([
    '123 Main St',
    226800,
    '580 Broadway Apt 4a',
    337900,
]);

console.log(result);


/* Common key value pairs -- type members in a union, TypeScript 
    will only allow us to use the common methods and properties 
    that all members of the union share */

type Like = {
    username: string;
    displayName: string;
};

type Share = {
    username: string;
    displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
    return event.displayName || event.username;
}

const newEvent = {
    username: 'vkrauss',
    displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);
console.log(`You have an update from ${friendName}.`);


/* Unions with Literal Types -- Literal type unions are 
    useful when we want to create distinct states within 
    a program. 
*/
type Status = 'idle' | 'downloading' | 'complete'

function downloadStatus(status: Status) {
  if (status == 'idle') {
    console.log('Download');
  } else if (status == 'downloading') {
    console.log('Downloading...');
  } else if (status == 'complete') {
    console.log('Your download is complete!');
  }
}

downloadStatus('complete');