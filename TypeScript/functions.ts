/**
 * Function - Parameter typpe annotations 
 */
function triple(value: number) {
    return value * 3;
}
  
function greetTripled(greeting: string, value: number) {
    console.log(`${greeting}, ${triple(value)}!`);
}
  
greetTripled('Hiya', 5);
  
/**
 * Optionals Parameters
 */
function proclaim(status?: string) {
    console.log(`I'm ${status || 'not ready...'}`);
}
  
proclaim();
proclaim('ready?');
proclaim('ready!');

/**
 * Default optional paramaters
 */
function D_proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}

/**
 * Explict Function Return Types
 */
function createGreeting(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    }
    return '';
};

/**
 * Void function return type
 */
function logGreeting(name:string): void{
    console.log(`Hello, ${name}!`)
}

// Documenting functions
/**
 * Returns the sum of two numbers.
 *
 * @param x - The first input number
 * @param y - The second input number
 * @returns The sum of `x` and `y`
 *
 */
function getSum(x: number, y: number): number {
    return x + y;
}