var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function updateRunGoal(run) {
    console.log(`
    Miles left:       ${50 - run.miles}
    Percent of goal:  ${(run.miles / 50) * 100}% complete
    `);
}
updateRunGoal({
    miles: 5,
});
class DesktopDirectory {
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop = new DesktopDirectory();
Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
class _DesktopDirectory {
    constructor() {
        this.config = {
            default: {
                encoding: 'utf-8',
                permissions: 'drw-rw-rw-',
            }
        };
    }
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const _Desktop = new _DesktopDirectory();
console.log(_Desktop.config);
const mySquare = { sideLength: 10, color: 'blue' };
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
function getBudgetAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return { 'lol': 0 };
    });
}
function getBudget() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield getBudgetAsync();
        console.log(result);
    });
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
function getUserName(options) {
    if (options.firstName && options.lastName) {
        return console.log(`${options.firstName} ${options.lastName}`);
    }
    return console.log(options.username);
}
getUserName({
    firstName: 'Mr.',
    lastName: 'Oshiro',
    username: 'hotelowner304'
});
getUserName({
    firstName: 'Madeline',
    username: 'mountainClimber'
});
