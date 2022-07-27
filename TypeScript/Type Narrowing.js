/* Type Guards
One way that TypeScript can narrow a type is with a conditional statement
that checks if a variable is a specific type. This pattern is called a
type guard. Type guards can use a variety of operators that check for a
variable’s type. One operator we can use is typeof
*/
function formatStatistic(stat) {
    if (typeof stat === 'string') {
        return stat.toUpperCase();
    }
    if (typeof stat === 'number') {
        return stat.toFixed(2);
    }
}
console.log(formatStatistic('Win'));
console.log(formatStatistic(0.364));
const siameseCat = {
    name: 'Proxie',
    run: () => 'pitter pat'
};
const bettaFish = {
    name: 'Neptune',
    swim: () => 'bubble blub'
};
function move(pet) {
    if ('run' in pet) {
        return pet.run();
    }
    if ('swim' in pet) {
        return pet.swim();
    }
}
console.log(move(siameseCat));
