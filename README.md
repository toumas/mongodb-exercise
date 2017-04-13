## Tietokanta
Tietokannassa on kolme kokoelmaa: band, musician ja release. Band sisältää yksittäiset artistit sekä yhtyeet, musician listaa kaikki muusikot ja release luonnollisesti tallettaa kaiken datan levyistä. 


## Rakenne
### Band -kokoelman dokumentti sisältää seuraavanlaiset kentät (‘_id’ -kenttä tavanomaisesti sisältyy vaikkei sitä mainita):
* name : artistin tai yhtyeen nimi
* members[] : viittaa musician -kokoelman dokumentteihin
* releases[] : viittaa release -kokoelman dokumentteihin


### Musician -kokoelma koostuu kentistä:
* fname : muusikon etunimi
* lname : muusikon sukunimi
* associated_acts[] : viittaa band -kokoelman dokumentteihin


### Release -kokoelman rakenne:
* title : julkaisun nimi
* releaseDate :  julkaisupäivämäärä  Date -tyyppisenä
* genres[] : String -tyyppinen taulukko julkaisun genreistä
* tags[] : String -tyyppinen taulukko käyttäjän syöttämistä tageista
* stars : käyttäjän antama arvosana julkaisulle
* tracks[] : sisältää tiedot kappaleista (tarkennettu alla)
* musicians[] : viittaa musician -kokoelman dokumentteihin
* band_id : viittaus band -kokoelman dokumenttiin


### Kappale-olio:
* title : kappaleen nimi
* releaseDate : julkaisupäivämäärä  Date -tyyppisenä
* genres[] : String -tyyppinen taulukko kappaleen genreistä
* tags[] : String -tyyppinen taulukko käyttäjän syöttämistä tageista
* stars : käyttäjän antama arvosana kappaleelle




Tietokannassa on indeksoitu release -kokoelmasta tags, stars sekä vastaavat kentät kappale-oliosta. 




## Haut
Mitä levyjä, yhtyeitä/sooloartisteja ja muusikoita (ts. yhtyeiden jäseniä) kokoelmasta löytyy?
```
db.release.find({}, {_id: 0, title: 1});
```
```
{ "title" : "Found in Far Away Places" }
{ "title" : "Get What You Give" }
{ "title" : "Prism" }
{ "title" : "Rescue & Restore" }
{ "title" : "Headspace" }
{ "title" : "Leave Your Love" }
```
```
db.band.find({}, {_id: 0, name: 1});
```
```
{ "name" : "August Burns Red" }
{ "name" : "The Ghost Inside" }
{ "name" : "Issues" }
{ "name" : "Tyler Carter" }
{ "name" : "Katy Perry" }
```
```
db.musician.find({}, {_id: 0, fname: 1, lname: 1});
```
```
{ "fname" : "Jake", "lname" : "Luhrs" }
{ "fname" : "John Benjamin", "lname" : "Brubaker" }
{ "fname" : "Brent", "lname" : "Rambler" }
{ "fname" : "Dustin", "lname" : "Davidson" }
{ "fname" : "Matt", "lname" : "Greiner" }
{ "fname" : "Jonathan", "lname" : "Vigil" }
{ "fname" : "Aaron", "lname" : "Brooks" }
{ "fname" : "Jim", "lname" : "Riley" }
{ "fname" : "Zack", "lname" : "Johnson" }
{ "fname" : "Andrew", "lname" : "Tkaczyk" }
{ "fname" : "Tyler", "lname" : "Carter" }
{ "fname" : "Michael", "lname" : "Bohn" }
{ "fname" : "Adrian", "lname" : "Rebollo" }
{ "fname" : "Skyler", "lname" : "Acord" }
{ "fname" : "Josh", "lname" : "Manuel" }
{ "fname" : "Tyler", "lname" : "Acord" }
{ "fname" : "Katy", "lname" : "Perry" }
```
```
```
Mitä levyjä tietyltä yhtyeeltä löytyy?
```
var band = db.band.findOne({"name": "August Burns Red"});
db.release.find({"band_id": band._id}, {_id: 0, title: 1});
```
```
{ "title" : "Found in Far Away Places" }
{ "title" : "Rescue & Restore" }
```
Millä levyillä tietty muusikko on soittanut ja mitä instrumenttia?
```
var musician = db.musician.findOne({"fname": "Tyler", "lname": "Carter"});
db.release.find(
        {
            "musicians":  {
                $elemMatch: { "musician_id": musician._id }
            }
        },
        { _id: 0, title: 1, "musicians.$": 1 }
);
```
```
{ "title" : "Headspace", "musicians" : [ { "musician_id" : ObjectId("58ef4bc4cbf318231e528228"), "instruments" : [ "vocals" ] } ] }
{ "title" : "Leave Your Love", "musicians" : [ { "musician_id" : ObjectId("58ef4bc4cbf318231e528228"), "instruments" : [ "vocals" ] } ] }
```
Missä yhtyeissä tietty muusikko on soittanut?
```
var musician = db.musician.findOne({"fname": "Tyler", "lname": "Carter"});
db.band.find(
        { "members": { $in: [musician._id] } },
        { _id: 0, name: 1}
);
```
```
{ "name" : "Issues" }
{ "name" : "Tyler Carter" }
```
Millä levyillä tietty laulu on? (Voi olla esim. eri yhtyeiden esittämänä tai saman yhtyeen erilevyillä.)
```
db.release.find(
        {
            "tracks": {
                $elemMatch: { "title": "Dark Horse" }
            }
        },
        { _id: 0, title: 1 }
);
```
```
{ "title" : "Get What You Give" }
{ "title" : "Prism" }
```
Levyjä pitää voida lajitella genren, julkaisuajan ja käyttäjän lisäämien tägien mukaan.
```
/* Get all metalcore releases */
db.release.find(
        { "genres": { $in: ["metalcore"] } },
        { _id: 0, title: 1 }
);
```
```
{ "title" : "Found in Far Away Places" }
{ "title" : "Get What You Give" }
{ "title" : "Rescue & Restore" }
{ "title" : "Headspace" }
```
```
/* Get all releases released 2012-2015 */
db.release.find(
        { "releaseDate": { $gt: new Date("2011"), $lt: new Date("2016") } },
        { _id: 0, title: 1 }
);
```
```
{ "title" : "Found in Far Away Places" }
{ "title" : "Get What You Give" }
{ "title" : "Prism" }
{ "title" : "Rescue & Restore" }
{ "title" : "Leave Your Love" }
```
```
```
```
/* Get all released tagged as favorite */
db.release.find(
        { "tags": { $in: ["favorite"] } },
        { _id: 0, title: 1 }
);
```
```
{ "title" : "Get What You Give" }
{ "title" : "Rescue & Restore" }
```
Yksittäisiä lauluja pitää myös voida lajitella genren, julkaisuajan ja käyttäjän lisäämien tägien mukaan.
```
/* Get all songs that are labeled as pop */
db.release.aggregate(
        [
            { $unwind: "$tracks" },
            { $project: { "tracks": 1} },
            { $match: { "tracks.genres": "pop" } },
            { $project: { "_id": 0, "tracks.title": 1, "tracks.genres": 1 } }
        ]
);
```
```
{ "tracks" : { "title" : "Roar", "genres" : [ "pop" ] } }
{ "tracks" : { "title" : "Legendary Lovers", "genres" : [ "pop" ] } }
{ "tracks" : { "title" : "This Is How We Do", "genres" : [ "pop", "dance" ] } }
{ "tracks" : { "title" : "International Smile", "genres" : [ "pop" ] } }
{ "tracks" : { "title" : "Ghost", "genres" : [ "pop" ] } }
{ "tracks" : { "title" : "Love Me", "genres" : [ "pop" ] } }
{ "tracks" : { "title" : "This Moment", "genres" : [ "pop" ] } }
{ "tracks" : { "title" : "Double Rainbow", "genres" : [ "pop" ] } }
{ "tracks" : { "title" : "By the Grace of God", "genres" : [ "pop", "christian" ] } }
```
```
/* Get songs that were released in 2012 or 2013 */
db.release.aggregate(
        [
            { $unwind: "$tracks" },
            { $project: { "tracks": 1} },
            { $match: { "tracks.releaseDate": { $gt: new Date("2011"), $lt: new Date("2014") } } },
            { $project: { "_id": 0, "tracks.title": 1, "tracks.releaseDate": 1 } }
        ]
);
```
```
{ "tracks" : { "title" : "This Is What I Know About Sacrifice", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "Outlive", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "Engine 45", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "Slipping Away", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "The Great Unknown", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "Dark Horse", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "White Light", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "Thirty Three", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "Face Value", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "Deceiver", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "Test the Limits", "releaseDate" : ISODate("2012-06-19T00:00:00Z") } }
{ "tracks" : { "title" : "Roar", "releaseDate" : ISODate("2013-08-18T00:00:00Z") } }
{ "tracks" : { "title" : "Legendary Lovers", "releaseDate" : ISODate("2013-08-18T00:00:00Z") } }
{ "tracks" : { "title" : "Birthday", "releaseDate" : ISODate("2013-08-18T00:00:00Z") } }
{ "tracks" : { "title" : "Walking on Air", "releaseDate" : ISODate("2013-08-18T00:00:00Z") } }
{ "tracks" : { "title" : "Unconditionally", "releaseDate" : ISODate("2013-08-18T00:00:00Z") } }
{ "tracks" : { "title" : "Dark Horse", "releaseDate" : ISODate("2013-08-18T00:00:00Z") } }
{ "tracks" : { "title" : "This Is How We Do", "releaseDate" : ISODate("2013-08-18T00:00:00Z") } }
{ "tracks" : { "title" : "International Smile", "releaseDate" : ISODate("2013-08-18T00:00:00Z") } }
{ "tracks" : { "title" : "Ghost", "releaseDate" : ISODate("2013-08-18T00:00:00Z") } }
Type "it" for more
```
```
```
```
```
```
/* Get all songs that are tagged as favorite */
db.release.aggregate(
        [
            { $match: { "tracks.tags": { $in: ["favorite"] } } },
            { $project: { "tracks": 1 } },
            { $unwind: "$tracks" },
            { $match: { "tracks.tags": "favorite" } },
            { $project: { "_id": 0, "tracks.title": 1 } }
        ]
);
```
```
{ "tracks" : { "title" : "The Wake" } }
{ "tracks" : { "title" : "Identity" } }
{ "tracks" : { "title" : "Separating the Seas" } }
{ "tracks" : { "title" : "Majoring in the Minors" } }
{ "tracks" : { "title" : "Broken Promises" } }
{ "tracks" : { "title" : "Outlive" } }
{ "tracks" : { "title" : "Engine 45" } }
{ "tracks" : { "title" : "White Light" } }
{ "tracks" : { "title" : "Roar" } }
{ "tracks" : { "title" : "Dark Horse" } }
```
Lisäksi käyttäjä haluaa voida lisätä sekä lauluihin että levyihin tähtiarvioita (1-5 tähteä) ja lajitella niitä näiden mukaan.
```
/* Get releases with 4 or more stars */
db.release.find(
        { "stars": { $gte: 4 } },
        { _id: 0, title: 1, stars: 1 }
);
```
```
{ "title" : "Get What You Give", "stars" : 4 }
{ "title" : "Headspace", "stars" : 4 }
{ "title" : "Found in Far Away Places", "stars" : 5 }
{ "title" : "Rescue & Restore", "stars" : 5 }
```
```
/* Get all songs with 5 stars */
db.release.aggregate(
        [
            { $match: { "tracks.stars": 5 } },
            { $project: { "tracks": 1} },
            { $unwind: "$tracks" },
            { $match: { "tracks.stars": 5 } },
            { $project: { "_id": 0, "tracks.title": 1, "tracks.stars": 1 } }
        ]
);
```
```
{ "tracks" : { "title" : "The Wake", "stars" : 5 } }
{ "tracks" : { "title" : "Martyr", "stars" : 5 } }
{ "tracks" : { "title" : "Identity", "stars" : 5 } }
{ "tracks" : { "title" : "Separating the Seas", "stars" : 5 } }
{ "tracks" : { "title" : "Ghosts", "stars" : 5 } }
{ "tracks" : { "title" : "Majoring in the Minors", "stars" : 5 } }
{ "tracks" : { "title" : "Everlasting Ending", "stars" : 5 } }
{ "tracks" : { "title" : "Broken Promises", "stars" : 5 } }
{ "tracks" : { "title" : "Blackwood", "stars" : 5 } }
{ "tracks" : { "title" : "Twenty-One Grams", "stars" : 5 } }
{ "tracks" : { "title" : "Vanguard", "stars" : 5 } }
{ "tracks" : { "title" : "Provision", "stars" : 5 } }
{ "tracks" : { "title" : "Treatment", "stars" : 5 } }
{ "tracks" : { "title" : "Spirit Breaker", "stars" : 5 } }
{ "tracks" : { "title" : "Count It All as Lost", "stars" : 5 } }
{ "tracks" : { "title" : "Sincerity", "stars" : 5 } }
{ "tracks" : { "title" : "Creative Captivity", "stars" : 5 } }
{ "tracks" : { "title" : "Fault Line", "stars" : 5 } }
{ "tracks" : { "title" : "Beauty in Tragedy", "stars" : 5 } }
{ "tracks" : { "title" : "Animals", "stars" : 5 } }
Type "it" for more
```