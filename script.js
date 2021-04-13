let contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
  {
    "album_title" : "Jinx",
    "by_whom" : "by Crumb",
    "picture_url" : "https://images.genius.com/787ece9961a76239b2489402196656ae.1000x1000x1.jpg",
    "color" : "#264653",
    "songs" : ["Cracking", "Nina", "Ghostride", "Fall Down", "M.R.",
              "The Letter", "Part III", "And It Never Ends", "Faces", "Jinx"]
  },
  
  {
    "album_title" : "Love Deluxe",
    "by_whom" : "by Sade",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/e/e9/Sade_-_Love_Deluxe.png",
    "color" : "#2A9D8F",
    "songs" : ["No Ordinary Love", "Feel No Pain", "I Couldn't Love You More", "Like a Tattoo", "Kiss of Life",
              "Cherish the Day", "Pearls", "Bullet Proof Soul", "Mermaid"]
  },
  
  {
    "album_title" : "Tusk",
    "by_whom" : "by Fleetwood Mac",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/c/c5/Fleetwood_Mac_-_Tusk.png",
    "color" : "#E9C46A",
    "songs" : ["Over & Over", "The Ledge", "Think About Me", "Save Me a Place", "Sara",
              "What Makes You Think You're the One", "Storms", "That's All for Everyone", "Not That Funny", "Sisters of the Moon",
              "Angel", "That's Enough for Me", "Brown Eyes", "Never Make Me Cry", "I Know I'm Not Wrong",
              "Honey Hi", "Beautiful Child", "Walk a Thin Line", "Tusk", "Never Forget"]
  },
  
  {
    "album_title" : "wakage ga itaru",
    "by_whom" : "by ATARASHII GAKKO!",
    "picture_url" : "https://lastfm.freetls.fastly.net/i/u/770x0/f4cf897e13fe55171c6e7ccb2c1e8bf5.webp#f4cf897e13fe55171c6e7ccb2c1e8bf5",
    "color" : "#F4A261",
    "songs" : ["shiken zenya", "mayoeba toutoshi", "masage Cannavaro", "koi geba", "amayo no seppun",
              "stripper ni eikou wo", "okami no uta", "chirachirachirami shiken toujitsu", "toumei boy", "rakuen nite",
              "shiritai"]
  },
  
  {
    "album_title" : "Dreamland",
    "by_whom" : "Glass Animals",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/1/11/Dreamland_%28Glass_Animals%29.png",
    "color" : "#E76F51",
    "songs" : ["Dreamland", "Tangerine", "((home movie: 1994))", "Hot Sugar", "((home movie: btx))",
              "Space Ghost Coast To Coast", "Tokyo Drifting", "Melon and the Coconut", "Your Love (Deja Vu)", "Waterfalls Coming Out Your Mouth",
              "It's All So Incredibly Loud", "((home movie: rockets))", "Domestic Bliss", "Heat Waves", "((home movies: shoes on))",
              "Helium"]
  },
  
  {
    "album_title" : "Your Hero Is Not Dead",
    "by_whom" : "Westerman",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/en/e/eb/Westerman_-_Your_Hero_Is_Not_Dead.png",
    "color" : "#264653",
    "songs" : ["Drawbridge", "The Line", "Big Nothing Glow", "Waiting on Design", "Think I'll Stay",
              "Dream Appropriate", "Easy Money", "Blue Comanche", "Confirmation (SSBD)", "Paper Dogs",
              "Float Over", "Your Hero Is Not Dead"]
  }
];


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {
  /// DIV
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON["color"];
  newContentElement.classList.add("contentItem");
  
  /// H2
  let newContentHeading = document.createElement("h2");
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerText = incomingJSON["album_title"];
  newContentElement.appendChild(newContentHeading);
  
  /// H4
  let newContentSubtitle = document.createElement("h4");
  newContentSubtitle.classList.add("contentSubtitle");
  newContentSubtitle.innerText = incomingJSON["by_whom"];
  newContentElement.appendChild(newContentSubtitle);
  
  /// Creates and adds album cover
  let newImage = document.createElement("IMG");
  newImage.classList.add("albumCover");
  newImage.src = incomingJSON["picture_url"];
  newContentElement.appendChild(newImage);

  /// H3
  let newContentSubhead = document.createElement("h3");
  newContentSubhead.innerText = "Song List";
  newContentElement.appendChild(newContentSubhead);

  /// OL
  let newContentSongList = document.createElement("ol");
  newContentElement.appendChild(newContentSongList);

  /// Creates and adds to list
  for (var i = 0; i < incomingJSON["songs"].length; i++) {
    var currentSongString = incomingJSON["songs"][i];
    var newSongItem = document.createElement("LI");
    newSongItem.innerText = currentSongString;
    newContentSongList.appendChild(newSongItem);
  }

  /// Appends an item to the page
  contentGridElement.appendChild(newContentElement);
}