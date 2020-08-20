// shuffle elements in array
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);
numbers.sort(() => Math.random() - 0.5);
console.log(numbers);
numbers.sort(() => Math.random() - 0.5);
console.log(numbers);
*/

// kazdy obiekt moze zawierac dwa rodzaje skladnikow:
// -> data properties - 'normalne' skladniki obiektu
// -> accessors properties - settery oraz gettery

const person = {
    name: 'ANDY',
    age: 10,

    get info() {
        return `${this.name} ${this.age}`;
    },

    set nameAndAge(expression) {
        const data = expression.split(' ');
        [this.name, this.age] = [data[0], parseInt(data[1])];
    }
};

console.log(person.info);
person.nameAndAge = 'JOHN 22';
console.log(person.info);

// oprocz tego w obiekcie mamy kilka properties ktore dostajemy od Object

// Object.prototype - to jedna z takich odziedziczonych od Object properties,
// kazdy obiekt posiada ta wlasciwosc, dzieki ktorej mozemy dodawac wlasciwosci
// i metody do wszystkich istniejacych obiektow

// DATA PROPERTY oprocz klucza i wartosci posiada rowniez inne dodatkowe metadata takie jak
// enumerable, configurable, writable

// ACCESSOR PROPERTY nie maja wartosci. Posiadaja funkcje get oraz set ktore kontroluje
// dostepnosc tej property. Oprocz tego te properties maja jeszcze  metadata enumerable oraz
// configurable. Nie posiada writable.

// ----------------------------------------------------------------------------------
// Object.freeze
// ----------------------------------------------------------------------------------

// Konwertuje obiekt przekazany jako argument do "frozen state".
// a. Nie mozemy dalej na tym obiekcie wykonywac zmian
// b. Nie mozesz dodawac nowych properties
// c. Nie mozesz usuwac istniejacych properties
// d. Nie mozesz zmieniac wartosci properties
// e. Writable oraz configurable sa ustawione na false
// f. Nie mozna zmieniac prototype

/*
Object.freeze(person);
console.log(Object.isFrozen(person));
person.name = 'x';
person.salary = 11;
person.nameAndAge = 'JIM 33';
console.log(person);
delete person.age;
console.log(person);
*/

// ----------------------------------------------------------------------------------
// Object.seal
// ----------------------------------------------------------------------------------

// a. Nie mozesz dodawac nowych properties
// b. Nie mozesz usuwac istniejacych properties
// c. Mozesz zmieniac wartosci istniejacych obiektow dopoki ich metadata writable jest true

/*
Object.seal(person);
person.salary = 100;
person.nameAndAge = 'SAM 44';
console.log(person.info);
console.log(person);
delete person.age;
console.log(person);
console.log(Object.isSealed(person));
 */


// ----------------------------------------------------------------------------------
// Object.preventExtensions
// ----------------------------------------------------------------------------------

// a. Nie mozesz dodawac nowych properties
// b. Mozesz zmieniac wartosci istniejacych obiektow dopoki ich metadata writable jest true
// c. Mozesz usuwac istniejace properties

Object.preventExtensions(person);
person.salary = 100;
person.nameAndAge = 'EVE 55';
console.log(person.info);
console.log(person);
delete person.age;
console.log(person);
