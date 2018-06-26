### Some methods to work with arrays in JavaScript

**JavaScript Array** object is a global object used in the construction of arrays.
We use arrays to store lists of sorted data.


An array can contain any [type of data](https://en.wikipedia.org/wiki/Data_type) (strings, numbers, booleans, objects, or even other arrays). The same array could even contain mixed types of data, although it is not recommended.

Each element within an array is associated with an index. This index will help us to find the element exact position of the element in the array or modify it.

Arrays are mainly used to store a list of related data. In that list of data the order is usually important.

Arrays provide several methods.Let's practice with some of them.

## Prerequisites
In this tutorial, we will use [Atom](https://atom.io/), as code editor.

We use the [Chrome DevTools console](https://developers.google.com/web/tools/chrome-devtools/?hl=es#top_of_page) as a shell to interact with the JavaScript code in the webpage.

## Methods
### Some data
We're working with two variables. The first one contains an array of objects of the Literature Nobel prizes in the 20th century. The second variable contains the names of the mayors of the city of Madrid.

### Example: array.prototype.filter
The **filter()** method creates a new array with all elements that pass the test implemented by the provided function.
1. Filter the list of Nobel prizes for those who were awarded in the 20th century after the Second World War.

``` js
const sXIX = nobels.filter(nobel => (nobel.year >= 1945 && nobel.year < 2000));
console.table(sXIX);
```
1. Filter the list of female Nobel prizes.

Examples:

``` js
const female = nobels.filter(nobel => (nobel.gender == "F"));
console.table(female);
console.log("Nobels women: " + female.length);
```
1. Filter the list of Nobel prizes for those who were written in Spanish
language.

``` js
const spanish = nobels.filter(nobel => (nobel.language == "Español"));
console.table(spanish);
```
1. Filter the list of female Nobel prizes for those who were written in Spanish
language.

``` js
const spanishFemale = nobels.filter(nobel => (nobel.language == "Español" && nobel.gender == "F"));
console.table(spanishFemale);
```

### Example: array.prototype.map
The **map()** method creates a new array with the results of calling a provided function on every element in the calling array.

1. Give us an array of the Nobel prizes first and last names

``` js
const name = nobels.map(nobel => `${nobel.firstName} ${nobel.lastName}`);
console.table(name);
```

### Example: array.prototype.sort
The **sort()** method sorts the elements of an array *"in place"* and returns the array. The default sort order is according to string Unicode code points.

Examples:
1. Sort the Nobel prizes by lastname.

```js
const alphabeticalLastName = nobels.sort(function(a, b) {
  if (a.lastName > b.lastName) {
    return 1;
  }
  if (a.lastName < b.lastName) {
    return -1;
  }
  return 0;
});
console.table(alphabeticalLastName);
```

 or
```js
const alphabeticalLastName = nobels.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
```

1. Sort the mayors of Madrid alphabetically by last name:




### Example: array.prototype.reduce()
The **reduce()** method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

### Example: array.prototype.join()
The **join()** method joins all elements of an array into a string.

Example:

```js
console.log(mayorMadrid.join('\n'));
```

## Resources
> - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
> - https://doesitmutate.xyz/
