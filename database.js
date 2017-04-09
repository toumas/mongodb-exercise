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
// Issues
var TylerCarter = ObjectId();
var MichaelBohn = ObjectId();
var AdrianRebollo = ObjectId();
var SkylerAcord = ObjectId();
var JoshManuel = ObjectId();
var TylerAcord = ObjectId();
var KatyPerry = ObjectId();

// Releases
var foundInFarAwayPlaces = ObjectId();
var rescueAndRestore = ObjectId();
var getWhatYouGive = ObjectId();
var headspace = ObjectId();
var leaveYourLove = ObjectId();
var prism = ObjectId();

// Bands, Artists
var augustBurnsRed = ObjectId();
var theGhostInside = ObjectId();
var issues = ObjectId();
var tylerCarter = ObjectId();
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
// R&R
var Provision = ObjectId();
var Treatment = ObjectId();
var SpiritBreaker = ObjectId();
var CountItAllAsLost = ObjectId();
var Sincerity = ObjectId();
var CreativeCaptivity = ObjectId();
var FaultLine = ObjectId();
var BeautyInTragedy = ObjectId();
var Animals = ObjectId();
var Echoes = ObjectId();
var TheFirstStep = ObjectId();
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
// Headspace
var TheRealest = ObjectId();
var HomeSoon = ObjectId();
var LostAndFound = ObjectId();
var YungAndDum = ObjectId();
var MadeToLast = ObjectId();
var Flojo = ObjectId();
var Hero = ObjectId();
var Coma = ObjectId();
var RankRider = ObjectId();
var BlueWall = ObjectId();
var SomeoneWhoDoes = ObjectId();
var IAlwaysKnew = ObjectId();
var SlowMeDown = ObjectId();
// LYL
var Sophisticated = ObjectId();
var LeaveYourLove = ObjectId();
var Georgia = ObjectId();
var SoSlow = ObjectId();
var TearsOnTheRunwayPt1 = ObjectId();
var FindMe = ObjectId();
// Prism
var Roar = ObjectId();
var LegendaryLovers = ObjectId();
var Birthday = ObjectId();
var WalkingOnAir = ObjectId();
var Unconditionally = ObjectId();
var DarkHorseKP = ObjectId();
var ThisIsHowWeDo = ObjectId();
var InternationalSmile = ObjectId();
var Ghost = ObjectId();
var LoveMe = ObjectId();
var ThisMoment = ObjectId();
var DoubleRainbow = ObjectId();
var ByTheGraceOfGod = ObjectId();

db.band.insertMany([
  {
    "_id": augustBurnsRed,
    "name": "August Burns Red",
    "members": [jakeLuhrs, johnBenjaminBrubaker, brentRambler, dustinDavidson, mattGreiner],
    "releases": [foundInFarAwayPlaces, rescueAndRestore]
  },
  {
    "_id": theGhostInside,
    "name": "The Ghost Inside",
    "members": [JonathanVigil, AaronBrooks, JimRiley, ZackJohnson, AndrewTkaczyk],
    "releases": [getWhatYouGive]
  },
  {
    "_id": issues,
    "name": "Issues",
    "members": [TylerCarter, MichaelBohn, AdrianRebollo, SkylerAcord, JoshManuel, TylerAcord],
    "releases": [headspace]
  },
  {
    "_id": tylerCarter,
    "name": "Tyler Carter",
    "members": [TylerCarter],
    "releases": [leaveYourLove]
  },
  {
    "_id": katyPerry,
    "name": "Katy Perry",
    "members": [KatyPerry],
    "releases": [prism]
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
  //Issues
  {
    "_id": TylerCarter,
    "fname": "Tyler",
    "lname": "Carter",
    "instruments": ["vocals"],
    "associated_acts": [issues, tylerCarter]
  },
  {
    "_id": MichaelBohn,
    "fname": "Michael",
    "lname": "Bohn",
    "instruments": ["vocals"],
    "associated_acts": [issues]
  },
  {
    "_id": AdrianRebollo,
    "fname": "Adrian",
    "lname": "Rebollo",
    "instruments": ["guitar", "vocals"],
    "associated_acts": [issues]
  },
  {
    "_id": SkylerAcord,
    "fname": "Skyler",
    "lname": "Acord",
    "instruments": ["bass"],
    "associated_acts": [issues]
  },
  {
    "_id": JoshManuel,
    "fname": "Josh",
    "lname": "Manuel",
    "instruments": ["drums"],
    "associated_acts": [issues]
  },
  {
    "_id": TylerAcord,
    "fname": "Tyler",
    "lname": "Acord",
    "instruments": ["turntable", "keyboard", "synthesizer"],
    "associated_acts": [issues]
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
    "tags": ["favorite"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Martyr,
    "title": "Martyr",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Identity,
    "title": "Identity",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": ["favorite"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": SeparatingTheSeas,
    "title": "Separating the Seas",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": ["favorite"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Ghosts,
    "title": "Ghosts",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": MajoringInTheMinors,
    "title": "Majoring in the Minors",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": ["favorite"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": EverlastingEnding,
    "title": "Everlasting Ending",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": BrokenPromises,
    "title": "Broken Promises",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": ["favorite"],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Blackwood,
    "title": "Blackwood",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": TwentyOneGrams,
    "title": "Twenty-One Grams",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  {
    "_id": Vanguard,
    "title": "Vanguard",
    "released": new Date("2015-06-30"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": foundInFarAwayPlaces
  },
  // GWYG
  {
    "_id": ThisIsWhatIKnowAboutSacrifice,
    "title": "This Is What I Know About Sacrifice",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": Outlive,
    "title": "Outlive",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": ["favorite"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": Engine45,
    "title": "Engine 45",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": ["favorite"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": SlippingAway,
    "title": "Slipping Away",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": TheGreatUnknown,
    "title": "The Great Unknown",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": DarkHorse,
    "title": "Dark Horse",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": WhiteLight,
    "title": "White Light",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": ["favorite"],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": ThirtyThree,
    "title": "Thirty Three",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": FaceValue,
    "title": "Face Value",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": Deceiver,
    "title": "Deceiver",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  {
    "_id": TestTheLimits,
    "title": "Test the Limits",
    "released": new Date("2012-06-19"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": getWhatYouGive
  },
  // Prism
  {
    "_id": Roar,
    "title": "Roar",
    "released": new Date("2013-08-18"),
    "genres": ["pop"],
    "tags": ["favorite"],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": LegendaryLovers,
    "title": "Legendary Lovers",
    "released": new Date("2013-08-18"),
    "genres": ["pop"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": Birthday,
    "title": "Birthday",
    "released": new Date("2013-08-18"),
    "genres": ["disco"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": WalkingOnAir,
    "title": "Walking on Air",
    "released": new Date("2013-08-18"),
    "genres": ["deep house"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": Unconditionally,
    "title": "Unconditionally",
    "released": new Date("2013-08-18"),
    "genres": ["pop rock"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": DarkHorseKP,
    "title": "Dark Horse",
    "released": new Date("2013-08-18"),
    "genres": ["trap", "hip hop"],
    "tags": ["favorite"],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": ThisIsHowWeDo,
    "title": "This Is How We Do",
    "released": new Date("2013-08-18"),
    "genres": ["pop", "dance"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": InternationalSmile,
    "title": "International Smile",
    "released": new Date("2013-08-18"),
    "genres": ["pop"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": Ghost,
    "title": "Ghost",
    "released": new Date("2013-08-18"),
    "genres": ["pop"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": LoveMe,
    "title": "Love Me",
    "released": new Date("2013-08-18"),
    "genres": ["pop"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": ThisMoment,
    "title": "This Moment",
    "released": new Date("2013-08-18"),
    "genres": ["pop"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": DoubleRainbow,
    "title": "Double Rainbow",
    "released": new Date("2013-08-18"),
    "genres": ["pop"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  {
    "_id": ByTheGraceOfGod,
    "title": "By the Grace of God",
    "released": new Date("2013-08-18"),
    "genres": ["pop", "christian"],
    "tags": [],
    "stars": 3,
    "releaseId": prism
  },
  // R&R
  {
    "_id": Provision,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": Treatment,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": SpiritBreaker,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": CountItAllAsLost,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": Sincerity,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": CreativeCaptivity,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": FaultLine,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": BeautyInTragedy,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": Animals,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": Echoes,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  {
    "_id": TheFirstStep,
    "title": "Title",
    "released": new Date("2013-06-25"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 5,
    "releaseId": rescueAndRestore
  },
  // Headspace
  {
    "_id": TheRealest,
    "title": "The Realest",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": HomeSoon,
    "title": "Home Soon",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": LostAndFound,
    "title": "Lost-n-Found (On a Roll)",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": YungAndDum,
    "title": "Yung & Dum",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": MadeToLast,
    "title": "Made to Last",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": Flojo,
    "title": "Flojo",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": Hero,
    "title": "Hero",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": Coma,
    "title": "COMA",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": RankRider,
    "title": "Rank Rider",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": BlueWall,
    "title": "Blue Wall",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": SomeoneWhoDoes,
    "title": "Someone Who Does",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": IAlwaysKnew,
    "title": "I Always Knew",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  {
    "_id": SlowMeDown,
    "title": "Slow Me Down",
    "released": new Date("2016-05-20"),
    "genres": ["metalcore"],
    "tags": [],
    "stars": 4,
    "releaseId": headspace
  },
  // LYL
  {
    "_id": Sophisticated,
    "title": "Sophisticated",
    "released": new Date("2015-01-13"),
    "genres": ["R&B"],
    "tags": [],
    "stars": 3,
    "releaseId": leaveYourLove
  },
  {
    "_id": LeaveYourLove,
    "title": "Leave Your Love",
    "released": new Date("2015-01-13"),
    "genres": ["R&B"],
    "tags": [],
    "stars": 3,
    "releaseId": leaveYourLove
  },
  {
    "_id": Georgia,
    "title": "Georgia",
    "released": new Date("2015-01-13"),
    "genres": ["R&B"],
    "tags": [],
    "stars": 3,
    "releaseId": leaveYourLove
  },
  {
    "_id": SoSlow,
    "title": "So Slow",
    "released": new Date("2015-01-13"),
    "genres": ["R&B"],
    "tags": [],
    "stars": 3,
    "releaseId": leaveYourLove
  },
  {
    "_id": TearsOnTheRunwayPt1,
    "title": "Tears on the Runway Pt. 1",
    "released": new Date("2015-01-13"),
    "genres": ["R&B"],
    "tags": [],
    "stars": 3,
    "releaseId": leaveYourLove
  },
  {
    "_id": FindMe,
    "title": "Find Me",
    "released": new Date("2015-01-13"),
    "genres": ["R&B"],
    "tags": [],
    "stars": 3,
    "releaseId": leaveYourLove
  },
]);

db.release.insertMany([
    {
      "_id": foundInFarAwayPlaces,
      "title": "Found in Far Away Places",
      "released": new Date("2015-06-30"),
      "genres": ["metalcore"],
      "tags": ["christian"],
      "stars": 5,
      "band_id": augustBurnsRed
    },
    {
      "_id": getWhatYouGive,
      "title": "Get What You Give",
      "released": new Date("2012-06-19"),
      "genres": ["metalcore"],
      "tags": ["melodic"],
      "stars": 4,
      "band_id": theGhostInside
    },
    {
      "_id": prism,
      "title": "Prism",
      "released": new Date("2013-12-17"),
      "genres": ["pop"],
      "tags": ["trap"],
      "stars": 3,
      "band_id": katyPerry
    },
    {
      "_id": rescueAndRestore,
      "title": "Rescue & Restore",
      "released": new Date("2013-06-25"),
      "genres": ["metalcore"],
      "tags": ["christian"],
      "stars": 5,
      "band_id": augustBurnsRed
    },
    {
      "_id": headspace,
      "title": "Headspace",
      "released": new Date("2016-05-20"),
      "genres": ["metalcore"],
      "tags": ["nu metal"],
      "stars": 4,
      "band_id": issues
    },
    {
      "_id": leaveYourLove,
      "title": "Leave Your Love",
      "released": new Date("2015-01-13"),
      "genres": ["R&B"],
      "tags": ["Solo EP"],
      "stars": 3,
      "band_id": tylerCarter
    }
  ]
);