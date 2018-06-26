'use strict';

var nobels = [{
  year: 1901,
  firstName: "Sully",
  lastName: "Prudhomme",
  gender: "M",
  language: "Francés"
}, , {
  year: 1902,
  firstName: "Theodor",
  lastName: "Mommsen",
  gender: "M",
  language: "Alemán"
}, {
  year: 1903,
  firstName: "Bjørnstjerne",
  lastName: "Bjørnson",
  gender: "M",
  language: "Noruego"
}, {
  year: 1904,
  firstName: "Frédéric",
  lastName: "Mistra",
  lgender: "M",
  language: "Occitano"
}, {
  year: 1904,
  firstName: "José",
  lastName: "De Echegaray",
  gender: "M",
  language: "Español"
}, {
  year: 1905,
  firstName: "Henryk",
  lastName: "Sienkiewicz",
  gender: "M",
  language: "Polaco"
}, {
  year: 1906,
  firstName: "Giosuè",
  lastName: "Carducci",
  gender: "M",
  language: "Italiano"
}, {
  year: 1907,
  firstName: "Rudyard",
  lastName: "Kipling",
  gender: "M",
  language: "Inglés"
}, {
  year: 1908,
  firstName: "Rudolf Christoph",
  lastName: "Eucken",
  gender: "M",
  language: "Alemán"
}, {
  year: 1909,
  firstName: "Selma",
  lastName: "Lagerlöf",
  gender: "F",
  language: "Sueco"
}, {
  year: 1910,
  firstName: "Paul",
  lastName: "Von Heyse",
  gender: "M",
  language: "Alemán"
}, {
  year: 1911,
  firstName: "Maurice",
  lastName: "Maeterlinck",
  gender: "M",
  language: "Francés"
}, {
  year: 1912,
  firstName: "Gerhart",
  lastName: "Hauptmann",
  gender: "M",
  language: "Alemán"
}, {
  year: 1913,
  firstName: "Rabindranath",
  lastName: "Tagore",
  gender: "M",
  language: "Bengalí"
}, {
  year: 1915,
  firstName: "Romain",
  lastName: "Rolland",
  gender: "M",
  language: "Francés"
}, {
  year: 1916,
  firstName: "Verner",
  lastName: "Von Heidenstam",
  gender: "M",
  language: "Sueco"
}, {
  year: 1917,
  firstName: "Karl Adolph",
  lastName: "Gjellerup",
  gender: "M",
  language: "Danés"
}, {
  year: 1917,
  firstName: "Henrik",
  lastName: "Pontoppidan",
  gender: "M",
  language: "Danés"
}, {
  year: 1919,
  firstName: "Carl",
  lastName: "Spitteler",
  gender: "M",
  language: "Alemán"
}, {
  year: 1920,
  firstName: "Knut",
  lastName: "Hamsun",
  gender: "M",
  language: "Noruego"
}, {
  year: 1921,
  firstName: "Anatole",
  lastName: "France",
  gender: "M",
  language: "Francés"
}, {
  year: 1922,
  firstName: "Jacinto",
  lastName: "Benavente",
  gender: "M",
  language: "Español"
}, {
  year: 1923,
  firstName: "William Butler",
  lastName: "Yeats",
  gender: "M",
  language: "Inglés"
}, {
  year: 1924,
  firstName: "Wladyslaw",
  lastName: "Reymont",
  gender: "M",
  language: "Polaco"
}, {
  year: 1925,
  firstName: "George Bernard",
  lastName: "Shaw",
  gender: "M",
  language: "Inglés"
}, {
  year: 1926,
  firstName: "Grazia",
  lastName: "Deledda",
  gender: "F",
  language: "Italiano"
}, {
  year: 1927,
  firstName: "Henri",
  lastName: "Bergson",
  gender: "M",
  language: "Francés"
}, {
  year: 1928,
  firstName: "Sigrid",
  lastName: "Undset",
  gender: "F",
  language: "Noruego"
}, {
  year: 1929,
  firstName: "Thomas",
  lastName: "Mann",
  gender: "M",
  language: "Alemán"
}, {
  year: 1930,
  firstName: "Sinclair",
  lastName: "Lewis",
  gender: "M",
  language: "Inglés"
}, {
  year: 1931,
  firstName: "Erik Axel",
  lastName: "Karlfeldt",
  gender: "M",
  language: "Sueco"
}, {
  year: 1932,
  firstName: "John",
  lastName: "Galsworthy",
  gender: "M",
  language: "Inglés"
}, {
  year: 1933,
  firstName: "Iván",
  lastName: "Bunin",
  gender: "M",
  language: "Ruso"
}, {
  year: 1934,
  firstName: "Luigi",
  lastName: "Pirandello",
  gender: "M",
  language: "Italiano"
}, {
  year: 1936,
  firstName: "Eugene",
  lastName: "O'Neill",
  gender: "M",
  language: "Inglés"
}, {
  year: 1937,
  firstName: "Roger",
  lastName: "Martin du Gard",
  gender: "M",
  language: "Francés"
}, {
  year: 1938,
  firstName: "Pearl",
  lastName: "S.Buck",
  gender: "F",
  language: "Inglés"
}, {
  year: 1939,
  firstName: "Frans Eemil",
  lastName: "Sillanpää",
  gender: "M",
  language: "Finés"
}, {
  year: 1944,
  firstName: "Johannes Vilhelm",
  lastName: "Jensen",
  gender: "M",
  language: "Danés"
}, {
  year: 1945,
  firstName: "Gabriela",
  lastName: "Mistral",
  gender: "F",
  language: "Español"
}, {
  year: 1946,
  firstName: "Herman",
  lastName: "Hesse",
  gender: "M",
  language: "Alemán"
}, {
  year: 1947,
  firstName: "André",
  lastName: "Gide",
  gender: "M",
  language: "Francés"
}, {
  year: 1948,
  firstName: "T.",
  lastName: "S.Eliot",
  gender: "M",
  language: "Inglés"
}, {
  year: 1949,
  firstName: "William",
  lastName: "Faulkner",
  gender: "M",
  language: "Inglés"
}, {
  year: 1950,
  firstName: "Bertrand",
  lastName: "Russell",
  gender: "M",
  language: "Inglés"
}, {
  year: 1951,
  firstName: "Pär Fabien",
  lastName: "Lagerkvist",
  gender: "M",
  language: "Sueco"
}, {
  year: 1952,
  firstName: "François",
  lastName: "Mauriac",
  gender: "M",
  language: "Francés"
}, {
  year: 1953,
  firstName: "Winston",
  lastName: "Churchill",
  gender: "M",
  language: "Inglés"
}, {
  year: 1954,
  firstName: "Ernest",
  lastName: "Hemingway",
  gender: "M",
  language: "Inglés"
}, {
  year: 1955,
  firstName: "Halldór",
  lastName: "Laxness",
  gender: "M",
  language: "Islandés"
}, {
  year: 1956,
  firstName: "Juan Ramón",
  lastName: "Jiménez",
  gender: "M",
  language: "Español"
}, {
  year: 1957,
  firstName: "Albert",
  lastName: "Camus",
  gender: "M",
  language: "Francés"
}, {
  year: 1958,
  firstName: "Borís",
  lastName: "Pasternak",
  gender: "M",
  language: "Ruso"
}, {
  year: 1959,
  firstName: "Salvatore",
  lastName: "Quasimodo",
  gender: "M",
  language: "Italiano"
}, {
  year: 1960,
  firstName: "Saint - John",
  lastName: "Perse",
  gender: "M",
  language: "Francés"
}, {
  year: 1961,
  firstName: "Ivo",
  lastName: "Andric",
  gender: "M",
  language: "Serbocroata"
}, {
  year: 1962,
  firstName: "John",
  lastName: "Steinbeck",
  gender: "M",
  language: "Inglés"
}, {
  year: 1963,
  firstName: "Giorgos",
  lastName: "Seferis",
  gender: "M",
  language: "Griego"
}, {
  year: 1964,
  firstName: "Jean - Paul",
  lastName: "Sartre",
  gender: "M",
  language: "Francés"
}, {
  year: 1965,
  firstName: "Mijaíl",
  lastName: "Shólojov",
  gender: "M",
  language: "Ruso"
}, {
  year: 1966,
  firstName: "Shmuel Yosef",
  lastName: "Agnon",
  gender: "M",
  language: "Hebreo"
}, {
  year: 1966,
  firstName: "Nelly",
  lastName: "Sachs",
  gender: "M",
  language: "Alemán"
}, {
  year: 1967,
  firstName: "Miguel Ángel",
  lastName: "Asturias",
  gender: "M",
  language: "Español"
}, {
  year: 1968,
  firstName: "Yasunari",
  lastName: "Kawabata",
  gender: "M",
  language: "Japonés"
}, {
  year: 1969,
  firstName: "Samuel",
  lastName: "Beckett",
  gender: "M",
  language: "Inglés-Francés",
}, {
  year: 1970,
  firstName: "Aleksandr Isaevich",
  lastName: "Solzhenitsyn",
  gender: "M",
  language: "Ruso"
}, {
  year: 1971,
  firstName: "Pablo",
  lastName: "Neruda",
  gender: "M",
  language: "Español"
}, {
  year: 1972,
  firstName: "Heinrich",
  lastName: "Böll",
  gender: "M",
  language: "Alemán"
}, {
  year: 1973,
  firstName: "Patrick",
  lastName: "White",
  gender: "M",
  language: "Inglés"
}, {
  year: "1974",
  firstName: "Eyvind",
  lastName: "Johnson",
  gender: "M",
  language: "Sueco"
}, {
  year: 1974,
  firstName: "Harry",
  lastName: "Martinson",
  gender: "M",
  language: "Sueco"
}, {
  year: 1975,
  firstName: "Eugenio",
  lastName: "Montale",
  gender: "M",
  language: "Italiano"
}, {
  year: 1976,
  firstName: "Saul",
  lastName: "Bellow",
  gender: "M",
  language: "Inglés"
}, {
  year: 1977,
  firstName: "Vicente",
  lastName: "Aleixandre",
  gender: "M",
  language: "Español"
}, {
  year: 1978,
  firstName: "Isaac Bashevis",
  lastName: "Singer",
  gender: "M",
  language: "Yiddish"
}, {
  year: 1979,
  firstName: "Odysseus",
  lastName: "Elytis",
  gender: "M",
  language: "Griego"
}, {
  year: 1980,
  firstName: "Czeslaw",
  lastName: "Milosz",
  gender: "M",
  language: "Polaco"
}, {
  year: 1981,
  firstName: "Elias",
  lastName: "Canetti",
  gender: "M",
  language: "Alemán"
}, {
  year: 1982,
  firstName: "Gabriel",
  lastName: "García Márquez",
  gender: "M",
  language: "Español"
}, {
  year: 1983,
  firstName: "William",
  lastName: "Golding",
  gender: "M",
  language: "Inglés"
}, {
  year: 1984,
  firstName: "Jaroslav",
  lastName: "Seifert",
  gender: "M",
  language: "Checo"
}, {
  year: 1985,
  firstName: "Claude",
  lastName: "Simon",
  gender: "M",
  language: "Francés"
}, {
  year: 1986,
  firstName: "Wole",
  lastName: "Soyinka",
  gender: "M",
  language: "Inglés"
}, {
  year: 1987,
  firstName: "Joseph",
  lastName: "Brodsky",
  gender: "M",
  language: "Ruso / Inglés"
}, {
  year: 1988,
  firstName: "Naguib",
  lastName: "Mahfouz",
  gender: "M",
  language: "Árabe"
}, {
  year: 1989,
  firstName: "Camilo José",
  lastName: "Cela",
  gender: "M",
  language: "Español"
}, {
  year: 1990,
  firstName: "Octavio",
  lastName: "Paz",
  gender: "M",
  language: "Español"
}, {
  year: 1991,
  firstName: " Nadine",
  lastName: "Gordimer",
  gender: "F",
  language: "Inglés"
}, {
  year: 1992,
  firstName: "Derek",
  lastName: "Walcott",
  gender: "M",
  language: "Inglés"
}, {
  year: 1993,
  firstName: "Toni",
  lastName: "Morrison",
  gender: "F",
  language: "Inglés"
}, {
  year: 1994,
  firstName: "Kenzaburo",
  lastName: "Oe",
  gender: "M",
  language: "Japonés"
}, {
  year: 1995,
  firstName: "Seamus",
  lastName: "Heaney",
  gender: "M",
  language: "Inglés"
}, {
  year: 1996,
  firstName: "Wislawa",
  lastName: "Szymborska",
  gender: "F",
  language: "Polaco"
}, {
  year: 1997,
  firstName: "Dario",
  lastName: "Fo",
  gender: "M",
  language: "Italiano"
}, {
  year: 1998,
  firstName: "José",
  lastName: "Saramago",
  gender: "M",
  language: "Portugués"
}, {
  year: 1999,
  firstName: "Günter",
  lastName: "Grass",
  gender: "M",
  language: "Alemán"
}, {
  year: 2000,
  firstName: "Gao",
  lastName: "Xingjian",
  gender: "M",
  language: "Chino"
}, {
  year: 2001,
  firstName: "Vidiadhar Surajprasad",
  lastName: "Naipaul",
  gender: "M",
  language: "Inglés"
}, {
  year: 2002,
  firstName: "Imre",
  lastName: "Kertész",
  gender: "M",
  language: "Húngaro"
}, {
  year: 2003,
  firstName: "John Maxwell",
  lastName: "Coetzee",
  gender: "M",
  language: "Inglés"
}, {
  year: 2004,
  firstName: "Elfriede",
  lastName: "Jelinek",
  gender: "F",
  language: "Alemán"
}, {
  year: 2005,
  firstName: "Harold",
  lastName: "Pinter",
  gender: "M",
  language: "Inglés"
}, {
  year: 2006,
  firstName: "Orhan",
  lastName: "Pamuk",
  gender: "M",
  language: "Turco"
}, {
  year: 2007,
  firstName: "Doris",
  lastName: "Lessing",
  gender: "F",
  language: "Inglés"
}, {
  year: 2008,
  firstName: "Jean - Marie Gustave",
  lastName: "Le Clézio",
  gender: "M",
  language: "Francés"
}, {
  year: 2009,
  firstName: "Herta",
  lastName: "Müller",
  gender: "F",
  language: "Rumano / Alemán"
}, {
  year: 2010,
  firstName: "Mario",
  lastName: "Vargas Llosa",
  gender: "M",
  language: "Español"
}, {
  year: 2011,
  firstName: "Tomas",
  lastName: "Tranströmer",
  gender: "M",
  language: "Sueco"
}, {
  year: 2012,
  firstName: "Mo",
  lastName: "Yan",
  gender: "M",
  language: "Chino"
}, {
  year: 2013,
  firstName: "Alice",
  lastName: "Munro",
  gender: "F",
  language: "Ingles"
}, {
  year: 2014,
  firstName: "Patrick",
  lastName: "Modiano",
  gender: "M",
  language: "Francés"
}, {
  year: 2015,
  firstName: "Svetlana",
  lastName: "Alexievich",
  gender: "F",
  language: "Francés"
}];

var mayorMadrid = ["José, Moreno Torres",
  "José, Finat y Escrivá de Romaní", "Carlos, Arias Navarro", "Miguel Angel, García Lomas", "Juan, de Arespacochaga y de Felipe", "José Luis, Alvarez Alvarez", "Luis María, Huete Morillo", "Enrique, Tierno Galván", "Juan, Barranco Gallardo", "Agustín, Rodríguez Sahagún", "José María, Alvarez del Manzano y López del Hierro", "Alberto, Ruiz - Gallardón Jiménez", "Ana María, Botella Serrano", "Manuela, Carmena Castrillo"
]


// Array.prototype.filter()
// const sXIX = nobels.filter(nobel => (nobel.year >= 1945 && nobel.year < 2000));
// console.table(sXIX);

//const female = nobels.filter(nobel => (nobel.gender == "F"));
// console.table(female);
//console.log("Nobels women: " + female.length);

// const spanish = nobels.filter(nobel => (nobel.language == "Español"));
// console.table(spanish);
// const spanishFemale = nobels.filter(nobel => (nobel.language == "Español" && nobel.gender == "F"));
// console.table(spanishFemale);

// Array.prototype.map()
// Give us an array of the Noberl prizes first and last names
// const name = nobels.map(nobel => `${nobel.firstName} ${nobel.lastName}`);
// console.table(name);

// Array.prototype.sort()
//Sort the Nobel prizes by lastname.

// const alphabeticalLastName = nobels.sort(function(a, b) {
//   if (a.lastName > b.lastName) {
//     return 1;
//   }
//   if (a.lastName < b.lastName) {
//     return -1;
//   }
//   return 0;
// });
// console.table(alphabeticalLastName);

//or

// const alphabeticalLastName = nobels.sort((a, b) => a.lastName > b.lastName ? 1 : -1);


// Sort the mayor Madrid alphabetically by last name
const alpha = mayorMadrid.sort(function(lastName, nextName) {
  const [aLast, aFirst] = lastName.split(', ');
  const [bLast, bFirst] = nextName.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// const mayors = mayorMadrid.sort(function(lastName, nextName) {
//   const [aLast, aFirst] = lastName.split(', ');
//   const [bLast, bFirst] = nextName.split(', ');
//   return aLast > bLast ? 1 : -1;
// });


// Array.prototype.reduce()
// const female = nobels.filter(nobel => (nobel.gender == "F"));
// console.table(female);

//Array.prototype.join()
// console.log(mayorMadrid.join('\n'));