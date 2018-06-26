# Open Source Weekend

This is a summary of the talks and workshops given during the [OpenSourceWeekends](https://osweekends.com/) event on May 19, 2018.

- [Github OSW](https://github.com/osweekends)
- [Slack OSW](http://invitations-osweekends.herokuapp.com/)


### Sponsors

- [Fictizia](https://www.fictizia.com/): Company dedicated to training, trough the delivery of master's degrees, specialization courses and workshops. Organizers: [Fictizia teachers](https://www.fictizia.com/profesorado):
    - Jose Gallego Chamorro ([Twitter](https://twitter.com/josheriff))
    - Ulises Gascón ([Twitter](https://twitter.com/kom_256))
    - Theba Gómez ([Twitter](https://twitter.com/KoolTheba))
    - Carlos Hernández ([Twitter](https://twitter.com/codingcarlos))
    - Borja Godoy ([Twitter](https://twitter.com/gody11))
    - And surely more...
- [OVH: Innovation Is Freedom](https://www.ovh.es/): Company that offers dedicated servers, hosting, network and security solutions, storage and data backup...
- [Malt](https://www.malt.es/):  Platform that connects freelancers with companies. It also manages projects. (Something similar to Linkedin).


### Opening Session

They have announced the event  [Human-In-The-Loop: Artificial Intelligence](https://www.campus.co/madrid/es/events/ag1zfmd3ZWItY2FtcHVzckkLEgpDYW1wdXNOYW1lIgRSb290DAsSCkNhbXB1c05hbWUiBm1hZHJpZAwLEgdFdmVudFYyIhJhMmhmMTAwMDAwMGM1V2xBQUkM) next May 25th. It will be presented by [Paco Nathan](https://www.oreilly.com/people/6cb5c-paco-nathan) ([Linkedin](https://www.linkedin.com/in/ceteri/)), an expert in AI (Artificial Intelligence) and [O'Reilly](https://www.oreilly.com/).

They have also announced the event [OpenExpo Europe](https://openexpoeurope.com/es/) on June 6 and 7, the largest Congress and professional Fair on Open Source & Free Software and Open World Economy (Open Data and Open Innovation) of Europe.


##### Talk 1: *From the hell of the callbacks to the sky of asynchrony in JS with [Pablo Carmona](https://twitter.com/_pablocarmona).*

Pablo Carmona has put several examples on how synchrony works in *JavaScript*. Specifically, he has used the API of [Harry Potter] (https://www.potterapi.com/), through which, he has generated code that, when executed, simulates being the selector hat, which chooses which house of Hogwarts you belong (randomly).


First of all, he gave examples with [*callbacks*](http://anexsoft.com/p/112/javascript-que-son-como-usar-y-ejemplos-del-uso-de-callbacks), investigating a little about what problems they can cause, and the need to establish, in some cases, the [*setTimeOut()*](https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setTimeout) method.

Second, he has shown several examples on how to simplify the code by using the  [*Promises*](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise), using the  [*fetch()*](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch) method, and some other derived properties and methods.

Finally, he has shown an example, but in this case, using the promises [*Async/await*](https://javascript.info/async-await), mentioning some of the advantages of using them.

*This talk requires some general knowledge about JavaScript, about asynchrony and about promises. The examples were not very extensive, but they were not for novices.*


##### Talk 2: *Beyond Arduino in the #ArduinoDay2018 with Ulises Gascón.*

In this talk, he spoke mainly about [Arduino](https://www.arduino.cc/), an open-source electronic resources platform, based on easy-to-use hardware and software.

Ulises spoke mainly about the utilities that the Arduino devices provide, showing projects in which he has personally collaborated. For example: Experiments with robots, starting from an electric car; LED lighting of a musical drum while playing the instrument; Vending machine for prepared cocktails (preprogrammed); and several others.
He has mentioned the [Instructables](https://www.instructables.com/) website as support for these projects, where you can find things as varied as recipes for making a cake, even instructions on how to assemble a complex electronic device.


##### Talk 3: *CSS GRID LAYOUT Live en Madrid! with [Diana Aceves](https://twitter.com/diana_aceves_).*

During this talk, tricks have been shown to make  *layouts* in a very simple way, by using *Grid* and *Flex*, together.

He has made a concrete example, in which he has generated layouts based on existing ones, in [Theme Fuze Layouts](http://themes.themewaves.com/fuze/all-layouts/#!layout-1) (by clicking on the squares of number 2, you access the different *layouts*). For this, she started from an *HTML* document that she had generated, with its corresponding labels, and has been showing, step by step, the styles *CSS* applied to create those *layouts*.

The used properties of *Grid* and *Flex* are the basic ones and most used, enough to create multiple *layouts*.

In particular, some *CSS* very useful tricks are:
- [repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat): used to avoid repeating a property many times.
For example: `grid-template-columns: repeat(11, 1fr)`
- [span](https://alligator.io/css/css-grid-layout-span-keyword/): used for a grid to occupy the size of more than one grid. It means that it overlaps as many times as specify, by column or row.
For example: `grid-column: 2 / span 3`
- [Fractional Units (fr)](https://alligator.io/css/css-grid-layout-fr-unit/): Used to divide the size of the grids proportionally.
For example: `grid-template-columns: 1fr 1fr 2fr`

Additionally, she has shown the usefulness of a [SublimeText](https://www.sublimetext.com/) plugin, which allows to copy all the classes of an *HTML* to a *CSS* document in an orderly manner, being very useful to avoid having to be copying classes every time you want to add styles. The same plugin in atom is this one: [Atom Plugin: Auto HTML class or ID identifier](https://atom.io/packages/html-to-css), which allows you to select a part of the *HTML* and copy the classes of said part in the *CSS*  (using *.Tab*).

For this example, Diana Aceves has used the FireFox browser, because the latest versions contains a tool in the  *Dev Tools* that allows to visualize all the *Grid* elements of the document segmented with lines that separate the rows and columns (very useful when you intend to work with *Grid*).
