/** Interfaces and Types
 * In TypeScript, we can define types in a variety of ways 
 * to fit our code. We’ve used the type keyword to define 
 * types, however, there’s another way to define types with 
 * the interface keyword.
*/
interface Run {
    miles: number;
}
  
function updateRunGoal(run: Run) {
    console.log(`
    Miles left:       ${50 - run.miles}
    Percent of goal:  ${(run.miles / 50) * 100}% complete
    `)
}
  
updateRunGoal({
    miles: 5,
})


// Interfaces and Classes
interface Directory {
    addFile: (name: string) => void;
}
  
class DesktopDirectory implements Directory {
    addFile(name: string) {
        console.log(`Adding file: ${name}`);
    }
  
    showPreview(name: string) {
        console.log(`Opening preview of file: ${name}`);
    }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');


// Deep Types
interface _Directory {
    addFile: (name: string) => void;
    // Define a config type member here
    config: {
        default: {
            encoding: string,
            permissions: string,
        }
    }
}

class _DesktopDirectory implements _Directory {
    config = {
        default: {
            encoding: 'utf-8',
            permissions: 'drw-rw-rw-',
        }
    }
    
    addFile(name: string) {
        console.log(`Adding file: ${name}`);
    }
    
    showPreview(name: string) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const _Desktop = new _DesktopDirectory();
console.log(_Desktop.config);


// Composed Types
interface About {
    general: General;
}

interface General {
    id: number;
    name: string;
    version: Version;
}

interface Version {
    versionNumber: number;
}


/** Extending Interfaces
 * In TypeScript, it’s not always enough to be able to 
 * compose types together. Sometimes it’s convenient to 
 * copy all the type members from one type into another 
 * type. We can accomplish this with the extends keyword, 
 * like in this example:
*/
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

const mySquare: Square = { sideLength: 10, color: 'blue' };

/** Index Signature
 * When typing objects in TypeScript, sometimes it’s not 
 * possible to know the property names for an object, like 
 * when we get back information from an outside data source/API. 
 * While we may not know the exact property names at 
 * compile-time, we may know what the data will look like 
 * in general. In that case, it’s useful to write an object 
 * type that allows us to include a variable name for the 
 * property name. This feature is called index signatures.
 */
async function getBudgetAsync() {
    return { 'lol': 0 };
}

 interface Budget {
   [category: string]: number;
 }
 
 async function getBudget() {
   const result: Budget = await getBudgetAsync();
   console.log(result);
 }
 
 getBudget();

 /** Optional Type Members
  * A common scenario in programming is creating a function or class 
  * that can take in many arguments, some of which are required, and 
  * some that are optional. Every interface within this lesson so far
  * assumes that every type member is required, however, TypeScript 
  * allows us to make some type members optional. 
  */
 // Write an interface here

function getUserName(options: UserNameOptions) {
    if (options.firstName && options.lastName) {
      return console.log(`${options.firstName} ${options.lastName}`);
    }
  
    return console.log(options.username);
  }
  
  getUserName({
    firstName: 'Mr.',
    lastName: 'Oshiro',
    username: 'hotelowner304'
  })
  
  getUserName({
    firstName: 'Madeline',
    username: 'mountainClimber'
  })
  
  interface UserNameOptions {
    firstName?: string;
    lastName?: string;
    username: string;
  }