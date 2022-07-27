/* Type Guards
One way that TypeScript can narrow a type is with a conditional statement 
that checks if a variable is a specific type. This pattern is called a 
type guard. Type guards can use a variety of operators that check for a 
variable’s type. One operator we can use is typeof
*/
function formatStatistic(stat: string | number) {
    if (typeof stat === 'string') {
        return stat.toUpperCase();
    }
    if (typeof stat === 'number') {
        return stat.toFixed(2);
    }
}

console.log(formatStatistic('Win'));
console.log(formatStatistic(0.364));

/* Using in with Type Guards
While using typeof can get us pretty far, sometimes we want to see if a 
specific method exists on a type instead of a type like 'string'. That’s 
where the in operator comes into play. The in operator checks if a property 
exists on an object itself or anywhere within its prototype chain.

Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
*/
type Cat = {
    name: string;
    run: () => string;
  }
  
  type Fish = {
    name: string;
    swim: () => string;
  }
  
  const siameseCat = { 
    name: 'Proxie', 
    run: () => 'pitter pat'
  }
  
  const bettaFish = { 
    name: 'Neptune', 
    swim: () => 'bubble blub'
  }
  
  function move(pet: Cat | Fish) {
    if ('run' in pet) {
      return pet.run();
    } 
  
    if ('swim' in pet) {
      return pet.swim();
    }
  }
  
  console.log(move(siameseCat))


  