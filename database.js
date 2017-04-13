use ryhma_3_music_library;

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
    "members": [TylerAcord, MichaelBohn, AdrianRebollo, SkylerAcord, JoshManuel, TylerCarter],
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
    "associated_acts": [augustBurnsRed]
  },
  {
    "_id": johnBenjaminBrubaker,
    "fname": "John Benjamin",
    "lname": "Brubaker",
    "associated_acts": [augustBurnsRed]
  },
  {
    "_id": brentRambler,
    "fname": "Brent",
    "lname": "Rambler",
    "associated_acts": [augustBurnsRed]
  },
  {
    "_id": dustinDavidson,
    "fname": "Dustin",
    "lname": "Davidson",
    "associated_acts": [augustBurnsRed]
  },
  {
    "_id": mattGreiner,
    "fname": "Matt",
    "lname": "Greiner",
    "associated_acts": [augustBurnsRed]
  },
  // TGI
  {
    "_id": JonathanVigil,
    "fname": "Jonathan",
    "lname": "Vigil",
    "associated_acts": [theGhostInside]
  },
  {
    "_id": AaronBrooks,
    "fname": "Aaron",
    "lname": "Brooks",
    "associated_acts": [theGhostInside]
  },
  {
    "_id": JimRiley,
    "fname": "Jim",
    "lname": "Riley",
    "associated_acts": [theGhostInside]
  },
  {
    "_id": ZackJohnson,
    "fname": "Zack",
    "lname": "Johnson",
    "associated_acts": [theGhostInside]
  },
  {
    "_id": AndrewTkaczyk,
    "fname": "Andrew",
    "lname": "Tkaczyk",
    "associated_acts": [theGhostInside]
  },
  //Issues
  {
    "_id": TylerCarter,
    "fname": "Tyler",
    "lname": "Carter",
    "associated_acts": [issues, tylerCarter]
  },
  {
    "_id": MichaelBohn,
    "fname": "Michael",
    "lname": "Bohn",
    "associated_acts": [issues]
  },
  {
    "_id": AdrianRebollo,
    "fname": "Adrian",
    "lname": "Rebollo",
    "associated_acts": [issues]
  },
  {
    "_id": SkylerAcord,
    "fname": "Skyler",
    "lname": "Acord",
    "associated_acts": [issues]
  },
  {
    "_id": JoshManuel,
    "fname": "Josh",
    "lname": "Manuel",
    "associated_acts": [issues]
  },
  {
    "_id": TylerAcord,
    "fname": "Tyler",
    "lname": "Acord",
    "associated_acts": [issues]
  },
  // MISC
  {
    "_id": KatyPerry,
    "fname": "Katy",
    "lname": "Perry",
    "associated_acts": [katyPerry]
  }
]);


db.release.insertMany([
    {
      "_id": foundInFarAwayPlaces,
      "title": "Found in Far Away Places",
      "releaseDate": new Date("2015-06-30"),
      "genres": ["metalcore"],
      "tags": ["christian"],
      "stars": 5,
      "tracks": [
        {
          "_id": TheWake,
          "title": "The Wake",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": ["favorite"],
          "stars": 5
        },
        {
          "_id": Martyr,
          "title": "Martyr",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": Identity,
          "title": "Identity",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": ["favorite"],
          "stars": 5
        },
        {
          "_id": SeparatingTheSeas,
          "title": "Separating the Seas",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": ["favorite"],
          "stars": 5
        },
        {
          "_id": Ghosts,
          "title": "Ghosts",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": MajoringInTheMinors,
          "title": "Majoring in the Minors",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": ["favorite"],
          "stars": 5
        },
        {
          "_id": EverlastingEnding,
          "title": "Everlasting Ending",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": BrokenPromises,
          "title": "Broken Promises",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": ["favorite"],
          "stars": 5
        },
        {
          "_id": Blackwood,
          "title": "Blackwood",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": TwentyOneGrams,
          "title": "Twenty-One Grams",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": Vanguard,
          "title": "Vanguard",
          "releaseDate": new Date("2015-06-30"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        }
      ],
      "musicians": [
        { "musician_id": jakeLuhrs, "instruments": ["vocals"] },
        { "musician_id": johnBenjaminBrubaker, "instruments": ["guitar"] },
        { "musician_id": brentRambler, "instruments": ["guitar"] },
        { "musician_id": dustinDavidson, "instruments": ["bass", "vocals"] },
        { "musician_id": mattGreiner, "instruments": ["drums"] }
      ],
      "band_id": augustBurnsRed
    },
    {
      "_id": getWhatYouGive,
      "title": "Get What You Give",
      "releaseDate": new Date("2012-06-19"),
      "genres": ["metalcore"],
      "tags": ["melodic", "favorite"],
      "stars": 4,
      "tracks": [
        {
          "_id": ThisIsWhatIKnowAboutSacrifice,
          "title": "This Is What I Know About Sacrifice",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": Outlive,
          "title": "Outlive",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": ["favorite"],
          "stars": 4
        },
        {
          "_id": Engine45,
          "title": "Engine 45",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": ["favorite"],
          "stars": 4
        },
        {
          "_id": SlippingAway,
          "title": "Slipping Away",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": TheGreatUnknown,
          "title": "The Great Unknown",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": DarkHorse,
          "title": "Dark Horse",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": WhiteLight,
          "title": "White Light",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": ["favorite"],
          "stars": 4
        },
        {
          "_id": ThirtyThree,
          "title": "Thirty Three",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": FaceValue,
          "title": "Face Value",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": Deceiver,
          "title": "Deceiver",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": TestTheLimits,
          "title": "Test the Limits",
          "releaseDate": new Date("2012-06-19"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        }
      ],
      "musicians": [
        { "musician_id": JonathanVigil, "instruments": ["vocals"] },
        { "musician_id": AaronBrooks, "instruments": ["guitar", "vocals"] },
        { "musician_id": JimRiley, "instruments": ["bass"] },
        { "musician_id": ZackJohnson, "instruments": ["guitar"] },
        { "musician_id": AndrewTkaczyk, "instruments": ["drums"] }
      ],
      "band_id": theGhostInside
    },
    {
      "_id": prism,
      "title": "Prism",
      "releaseDate": new Date("2013-12-17"),
      "genres": ["pop"],
      "tags": [],
      "stars": 3,
      "tracks": [
        {
          "_id": Roar,
          "title": "Roar",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop"],
          "tags": ["favorite"],
          "stars": 3
        },
        {
          "_id": LegendaryLovers,
          "title": "Legendary Lovers",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": Birthday,
          "title": "Birthday",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["disco"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": WalkingOnAir,
          "title": "Walking on Air",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["deep house"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": Unconditionally,
          "title": "Unconditionally",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop rock"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": DarkHorseKP,
          "title": "Dark Horse",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["trap", "hip hop"],
          "tags": ["favorite"],
          "stars": 3
        },
        {
          "_id": ThisIsHowWeDo,
          "title": "This Is How We Do",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop", "dance"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": InternationalSmile,
          "title": "International Smile",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": Ghost,
          "title": "Ghost",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": LoveMe,
          "title": "Love Me",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": ThisMoment,
          "title": "This Moment",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": DoubleRainbow,
          "title": "Double Rainbow",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": ByTheGraceOfGod,
          "title": "By the Grace of God",
          "releaseDate": new Date("2013-08-18"),
          "genres": ["pop", "christian"],
          "tags": [],
          "stars": 3
        }
      ],
      "musicians": [{ "musician_id": katyPerry, "instruments": ["vocals"] }],
      "band_id": katyPerry
    },
    {
      "_id": rescueAndRestore,
      "title": "Rescue & Restore",
      "releaseDate": new Date("2013-06-25"),
      "genres": ["metalcore"],
      "tags": ["christian", "favorite"],
      "stars": 5,
      "tracks": [
        {
          "_id": Provision,
          "title": "Provision",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": Treatment,
          "title": "Treatment",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": SpiritBreaker,
          "title": "Spirit Breaker",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": CountItAllAsLost,
          "title": "Count It All as Lost",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": Sincerity,
          "title": "Sincerity",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": CreativeCaptivity,
          "title": "Creative Captivity",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": FaultLine,
          "title": "Fault Line",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": BeautyInTragedy,
          "title": "Beauty in Tragedy",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": Animals,
          "title": "Animals",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": Echoes,
          "title": "Echoes",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        },
        {
          "_id": TheFirstStep,
          "title": "The First Step",
          "releaseDate": new Date("2013-06-25"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 5
        }
      ],
      "musicians": [
        { "musician_id": jakeLuhrs, "instruments": ["vocals"] },
        { "musician_id": johnBenjaminBrubaker, "instruments": ["guitar"] },
        { "musician_id": brentRambler, "instruments": ["guitar"] },
        { "musician_id": dustinDavidson, "instruments": ["bass", "vocals"] },
        { "musician_id": mattGreiner, "instruments": ["drums"] }
      ],
      "band_id": augustBurnsRed
    },
    {
      "_id": headspace,
      "title": "Headspace",
      "releaseDate": new Date("2016-05-20"),
      "genres": ["metalcore", "nu metal"],
      "tags": ["nu metal"],
      "stars": 4,
      "tracks": [
        {
          "_id": TheRealest,
          "title": "The Realest",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": HomeSoon,
          "title": "Home Soon",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": LostAndFound,
          "title": "Lost-n-Found (On a Roll)",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": YungAndDum,
          "title": "Yung & Dum",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": MadeToLast,
          "title": "Made to Last",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": Flojo,
          "title": "Flojo",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": Hero,
          "title": "Hero",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": Coma,
          "title": "COMA",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": RankRider,
          "title": "Rank Rider",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": BlueWall,
          "title": "Blue Wall",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": SomeoneWhoDoes,
          "title": "Someone Who Does",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": IAlwaysKnew,
          "title": "I Always Knew",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        },
        {
          "_id": SlowMeDown,
          "title": "Slow Me Down",
          "releaseDate": new Date("2016-05-20"),
          "genres": ["metalcore"],
          "tags": [],
          "stars": 4
        }
      ],
      "musicians": [
        { "musician_id": TylerCarter, "instruments": ["vocals"] },
        { "musician_id": MichaelBohn, "instruments": ["vocals"] },
        { "musician_id": AdrianRebollo, "instruments": ["guitar"] },
        { "musician_id": SkylerAcord, "instruments": ["bass"] },
        { "musician_id": JoshManuel, "instruments": ["drums"] },
        { "musician_id": TylerAcord, "instruments": ["turntable", "keyboard", "synthesizer"] }
      ],
      "band_id": issues
    },
    {
      "_id": leaveYourLove,
      "title": "Leave Your Love",
      "releaseDate": new Date("2015-01-13"),
      "genres": ["r&b"],
      "tags": ["ep"],
      "stars": 3,
      "tracks": [
        {
          "_id": Sophisticated,
          "title": "Sophisticated",
          "releaseDate": new Date("2015-01-13"),
          "genres": ["r&b"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": LeaveYourLove,
          "title": "Leave Your Love",
          "releaseDate": new Date("2015-01-13"),
          "genres": ["r&b"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": Georgia,
          "title": "Georgia",
          "releaseDate": new Date("2015-01-13"),
          "genres": ["r&b"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": SoSlow,
          "title": "So Slow",
          "releaseDate": new Date("2015-01-13"),
          "genres": ["r&b"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": TearsOnTheRunwayPt1,
          "title": "Tears on the Runway Pt. 1",
          "releaseDate": new Date("2015-01-13"),
          "genres": ["r&b"],
          "tags": [],
          "stars": 3
        },
        {
          "_id": FindMe,
          "title": "Find Me",
          "releaseDate": new Date("2015-01-13"),
          "genres": ["r&b"],
          "tags": [],
          "stars": 3
        }
      ],
      "musicians": [{ "musician_id": TylerCarter, "instruments": ["vocals"] }],
      "band_id": tylerCarter
    }
  ]
);

/* INDEXES */
db.release.createIndex({"tags": 1});
db.release.createIndex({"stars": 1});
db.release.createIndex({"tracks.tags": 1});
db.release.createIndex({"tracks.stars": 1});