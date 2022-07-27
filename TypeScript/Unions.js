/* Defining Unions -- Unions allows the defining of multiple
// member types by separating each type member with a vertical
   line character |  */
function printNumsAndStrings(statement) {
    console.log(`ℹ️ LOG:: ${statement}`);
}
printNumsAndStrings(329);
printNumsAndStrings('hello!');
// Type Narrowing
function formatValue(value) {
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
function createUser() {
    const randomChance = Math.random() >= 0.5;
    if (randomChance) {
        return { id: 1, username: 'nikko' };
    }
    else {
        return 'Could not create a user.';
    }
}
let userData = createUser(); // <--- multiple types, inferred in the function
/* Unions and Arrays -- Unions can be combined with arrays.
    To create a union that supports multiple types for an
    array’s values, wrap the union in parentheses (string | number),
    then use array notation [].
*/
function formatListings(listings) {
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
function getFriendNameFromEvent(event) {
    return event.displayName || event.username;
}
const newEvent = {
    username: 'vkrauss',
    displayName: 'Veronica Krauss',
};
const friendName = getFriendNameFromEvent(newEvent);
console.log(`You have an update from ${friendName}.`);
function downloadStatus(status) {
    if (status == 'idle') {
        console.log('Download');
    }
    else if (status == 'downloading') {
        console.log('Downloading...');
    }
    else if (status == 'complete') {
        console.log('Your download is complete!');
    }
}
downloadStatus('complete');
