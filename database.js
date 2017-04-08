use music_library;

db.dropDatabase();

// Musicians
// ABR
var jakeLuhrs = ObjectId();
var johnBenjaminBrubaker = ObjectId();
var brentRambler = ObjectId();
var dustinDavidson = ObjectId();
var mattGreiner = ObjectId();
// TGI
var JonathanVigil = ObjectId();
var AaronBrooks = ObjectId();
var JimRiley = ObjectId();
var ZackJohnson = ObjectId();
var AndrewTkaczyk = ObjectId();

var KatyPerry = ObjectId();

// Releases
var foundInFarAwayPlaces = ObjectId();
var getWhatYouGive = ObjectId();
var darkHorse = ObjectId();

// Bands, Artists
var augustBurnsRed = ObjectId();
var theGhostInside = ObjectId();
var katyPerry = ObjectId();

// Songs
// FIFAP
var TheWake = ObjectId();
var Martyr = ObjectId();
var Identity = ObjectId();
var SeparatingTheSeas = ObjectId();
var Ghosts = ObjectId();
var MajoringInTheMinors = ObjectId();
var EverlastingEnding = ObjectId();
var BrokenPromises = ObjectId();
var Blackwood = ObjectId();
var TwentyOneGrams = ObjectId();
var Vanguard = ObjectId();
// GWYG
var ThisIsWhatIKnowAboutSacrifice = ObjectId();
var Outlive = ObjectId();
var Engine45 = ObjectId();
var SlippingAway = ObjectId();
var TheGreatUnknown = ObjectId();
var DarkHorse = ObjectId();
var WhiteLight = ObjectId();
var ThirtyThree = ObjectId();
var FaceValue = ObjectId();
var Deceiver = ObjectId();
var TestTheLimits = ObjectId();

var DarkHorseKP = ObjectId();

db.band.insertMany([
  {
    "_id": augustBurnsRed,
    "name": "August Burns Red",
    "members": [jakeLuhrs, johnBenjaminBrubaker, brentRambler, dustinDavidson, mattGreiner],
    "releases": [foundInFarAwayPlaces]
  },
  {
    "_id": theGhostInside,
    "name": "The Ghost Inside",
    "members": [JonathanVigil, AaronBrooks, JimRiley, ZackJohnson, AndrewTkaczyk],
    "releases": [getWhatYouGive]
  },
  {
    "_id": katyPerry,
    "name": "Katy Perry",
    "members": [KatyPerry],
    "releases": [darkHorse]
  }
]);


db.musician.insertMany([
  // ABR
  {
    "_id": jakeLuhrs,
    "fname": "Jake",
    "lname": "Luhrs",
    "instruments": ["vocals"],
    "associated_acts": [augustBurnsRed]
  },
  {
    "_id": johnBenjaminBrubaker,
    "fname": "John Benjamin",
    "lname": "Brubaker",
    "instrument": ["guitar"],
    "associated_acts": [augustBurnsRed]
  },
  {
    "_id": brentRambler,
    "fname": "Brent",
    "lname": "Rambler",
    "instrument": ["guitar"],
    "associated_acts": [augustBurnsRed]
  },
  {
    "_id": dustinDavidson,
    "fname": "Dustin",
    "lname": "Davidson",
    "instrument": ["bass", "vocals"],
    "associated_acts": [augustBurnsRed]
  },
  {
    "_id": mattGreiner,
    "fname": "Matt",
    "lname": "Greiner",
    "instrument": ["drums"],
    "associated_acts": [augustBurnsRed]
  },
  // TGI
  {
    "_id": JonathanVigil,
    "fname": "Jonathan",
    "lname": "Vigil",
    "instruments": ["vocals"],
    "associated_acts": [theGhostInside]
  },
  {
    "_id": AaronBrooks,
    "fname": "Aaron",
    "lname": "Brooks",
    "instruments": ["guitar", "vocals"],
    "associated_acts": [theGhostInside]
  },
  {
    "_id": JimRiley,
    "fname": "Jim",
    "lname": "Riley",
    "instruments": ["bass"],
    "associated_acts": [theGhostInside]
  },
  {
    "_id": ZackJohnson,
    "fname": "Zack",
    "lname": "Johnson",
    "instruments": ["guitar"],
    "associated_acts": [theGhostInside]
  },
  {
    "_id": AndrewTkaczyk,
    "fname": "Andrew",
    "lname": "Tkaczyk",
    "instruments": ["drums"],
    "associated_acts": [theGhostInside]
  },
  // MISC
  {
    "_id": KatyPerry,
    "fname": "Katy",
    "lname": "Perry",
    "instruments": ["vocals"],
    "associated_acts": [katyPerry]
  }
]);

db.song.insertMany([
  // FIFAP
  {
    "_id": TheWake,
    "title": "The Wake",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Martyr,
    "title": "Martyr",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Identity,
    "title": "Identity",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": SeparatingTheSeas,
    "title": "Separating the Seas",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Ghosts,
    "title": "Ghosts",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": MajoringInTheMinors,
    "title": "Majoring in the Minors",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": EverlastingEnding,
    "title": "Everlasting Ending",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": BrokenPromises,
    "title": "Broken Promises",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Blackwood,
    "title": "Blackwood",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": TwentyOneGrams,
    "title": "Twenty-One Grams",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Vanguard,
    "title": "Vanguard",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  // GWYG
  {
    "_id": ThisIsWhatIKnowAboutSacrifice,
    "title": "This Is What I Know About Sacrifice",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": Outlive,
    "title": "Outlive",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": Engine45,
    "title": "Engine 45",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": SlippingAway,
    "title": "Slipping Away",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": TheGreatUnknown,
    "title": "The Great Unknown",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": DarkHorse,
    "title": "Dark Horse",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": WhiteLight,
    "title": "White Light",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": ThirtyThree,
    "title": "Thirty Three",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": FaceValue,
    "title": "Face Value",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": Deceiver,
    "title": "Deceiver",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": TestTheLimits,
    "title": "Test the Limits",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": DarkHorseKP,
    "title": "Dark Horse",
    "released": new Date("2013-12-17"),
    "genres": ["hip hop"],
    "stars": 3,
    "releaseId": darkHorse
  }
]);

db.release.insertMany([
    {
      "_id": foundInFarAwayPlaces,
      "title": "Found in Far Away Places",
      "type": "album",
      "released": new Date("2015-06-30"),
      "genres": ["metalcore"],
      "tags": ["christian"],
      "stars": 5
    },
    {
      "_id": getWhatYouGive,
      "title": "Get What You Give",
      "type": "album",
      "released": new Date("2012-06-19"),
      "genres": ["metalcore"],
      "tags": ["melodic"],
      "stars": 4
    },
    {
      "_id": darkHorse,
      "title": "Dark Horse",
      "type": "single",
      "released": new Date("2013-12-17"),
      "genres": ["hip hop"],
      "tags": ["trap"],
      "stars": 3
    }
  ]
);