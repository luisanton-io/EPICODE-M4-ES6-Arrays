// METODI DI ARRAY

// 1. forEach
// Esegue la funzione di callback per ognuno degli elementi dell'array

const frutti = [
  "mela",
  "pera",
  "banana",
  "fragola",
  "ciliegia",
  "ananas",
  "pesca",
];

// for (let i = 0; i < frutti.length; i++) {
//   console.log(frutti[i]);
// }

// frutti.forEach((frutto, i) => {
//   console.log(frutto, i);
// });

// 2. filter
// Restituisce un array di alcuni elementi appartenenti all'array originale.
// Esegue la callback per ognuno degli elementi dell'array e, se la callback restituisce true,
// include l'elemento nell'array con gli elementi filtrati, altrimenti lo scarta.

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const numeriPari = [];

// for (let i = 0; i < numeri.length; i++) {
//   if (numeri[i] % 2 === 0) {
//     numeriPari.push(numeri[i]);
//   }
// }

// console.log(numeriPari);

function funzioneDiFiltro(numero) {
  return numero % 3 === 0;
}

const numeriPari = numeri.filter((numero, i) => {
  return numero % 2 === 0;
});

const books = [
  {
    title: "Il signore degli anelli",
    author: "J.R.R. Tolkien",
    pages: 1000,
    prezzo: 9.9,
    isbn: "1234567890",
  },
  {
    title: "Il signore degli anelli",
    author: "J.R.R. Tolkien",
    pages: 1000,
    isbn: "0912319238",
    prezzo: 30,
  },
  {
    title: "Il nome della rosa",
    author: "Umberto Eco",
    pages: 500,
    isbn: "987f9asd99",
    prezzo: 20,
  },
  {
    title: "Il codice da Vinci",
    author: "Dan Brown",
    pages: 700,
    isbn: "12345sasd0",
    prezzo: 8,
  },
];

// console.log(numeriPari);

// const libriCari = books.filter((book) => book.prezzo > 10);

// console.log(libriCari);

// 3. map
// Restituisce un array che contiene una versione "trasformata" di
// ognuno degli elementi dell'array originale.
// La funzione di callback viene eseguita per ogni elemento
// e il risultato viene sempre incluso nell'array restituito.

// const numeriDoppi = [];

// for (const numero of numeri) {
//   numeriDoppi.push(numero * 2);
// }

// console.log(numeriDoppi);

// function fxTrasformazione(numero) {
//   return numero * 2;
// }

const numeriDoppi = numeri.map((n) => n * 2);

// console.log(numeriDoppi);

const searchResults = [
  {
    id: 12209331,
    readable: true,
    title: "Don't Stop Me Now (Remastered 2011)",
    title_short: "Don't Stop Me Now",
    title_version: "(Remastered 2011)",
    link: "https://www.deezer.com/track/12209331",
    duration: 209,
    rank: 949599,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-5.dzcdn.net/stream/c-5a9b2da5acb610170196eb5872c7d2ab-17.mp3",
    md5_image: "fb22a75aa1aafc992230abd0bd79faef",
    artist: {
      id: 412,
      name: "Queen",
      link: "https://www.deezer.com/artist/412",
      picture: "https://api.deezer.com/artist/412/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/1000x1000-000000-80-0-0.jpg",
      tracklist:
        "https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50",
      type: "artist",
    },
    album: {
      id: 1121401,
      title: "Jazz (2011 Remaster)",
      cover: "https://api.deezer.com/album/1121401/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/fb22a75aa1aafc992230abd0bd79faef/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/fb22a75aa1aafc992230abd0bd79faef/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/fb22a75aa1aafc992230abd0bd79faef/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/fb22a75aa1aafc992230abd0bd79faef/1000x1000-000000-80-0-0.jpg",
      md5_image: "fb22a75aa1aafc992230abd0bd79faef",
      tracklist: "https://api.deezer.com/album/1121401/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 9997018,
    readable: true,
    title: "Bohemian Rhapsody (Remastered 2011)",
    title_short: "Bohemian Rhapsody",
    title_version: "(Remastered 2011)",
    link: "https://www.deezer.com/track/9997018",
    duration: 354,
    rank: 959624,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-1.dzcdn.net/stream/c-17597947a0fdd6e8ea971f146755cd34-13.mp3",
    md5_image: "6706f1154083f461a348508c28030a30",
    artist: {
      id: 412,
      name: "Queen",
      link: "https://www.deezer.com/artist/412",
      picture: "https://api.deezer.com/artist/412/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/1000x1000-000000-80-0-0.jpg",
      tracklist:
        "https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50",
      type: "artist",
    },
    album: {
      id: 915785,
      title: "A Night At The Opera (2011 Remaster)",
      cover: "https://api.deezer.com/album/915785/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/6706f1154083f461a348508c28030a30/1000x1000-000000-80-0-0.jpg",
      md5_image: "6706f1154083f461a348508c28030a30",
      tracklist: "https://api.deezer.com/album/915785/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 12206946,
    readable: true,
    title: "Another One Bites The Dust (Remastered 2011)",
    title_short: "Another One Bites The Dust",
    title_version: "(Remastered 2011)",
    link: "https://www.deezer.com/track/12206946",
    duration: 214,
    rank: 944177,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-5.dzcdn.net/stream/c-5e1529c5e8bd52c8d5d04df256eb6cc9-15.mp3",
    md5_image: "9a20f8b2547cbb74635539c219de3a84",
    artist: {
      id: 412,
      name: "Queen",
      link: "https://www.deezer.com/artist/412",
      picture: "https://api.deezer.com/artist/412/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/1000x1000-000000-80-0-0.jpg",
      tracklist:
        "https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50",
      type: "artist",
    },
    album: {
      id: 1121182,
      title: "The Game (2011 Remaster)",
      cover: "https://api.deezer.com/album/1121182/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/9a20f8b2547cbb74635539c219de3a84/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/9a20f8b2547cbb74635539c219de3a84/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/9a20f8b2547cbb74635539c219de3a84/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/9a20f8b2547cbb74635539c219de3a84/1000x1000-000000-80-0-0.jpg",
      md5_image: "9a20f8b2547cbb74635539c219de3a84",
      tracklist: "https://api.deezer.com/album/1121182/tracks",
      type: "album",
    },
    type: "track",
  },
];

const renderedResults = searchResults.map((result) => {
  return /*html*/ `
        <div>
            <h5>${result.title}</h5>
            <span>${result.artist.name}</span>
        </div>
    `;
});

// console.log(renderedResults.join(""));

// console.log(renderedResults);

// document.querySelector("#container").innerHTML += renderedResults.join("");

// 4. find
// Esegue la callback per ogni elemento dell'array
// e quando la callback restituisce true per un elemento,
// find si interrompe e restituisce tale elemento.
const primoNumeroPari = numeri.find((n) => n % 2 === 0);

console.log(primoNumeroPari);

// 4b. findIndex
// Esegue la callback per ogni elemento dell'array
// e quando la callback restituisce true per un elemento,
// findIndex si interrompe e restituisce l'indice a cui appartiene tale elemento.
const indiceDelPrimoNumeroPari = numeri.findIndex((n) => n % 2 === 0);
console.log(indiceDelPrimoNumeroPari);

// 5. reduce
const cart = books;

// let sum = 0;

// for (const book of cart) {
//   sum += book.prezzo;
// }

// console.log(sum);

const numeriCasualiBrutti = [
  7, 2, 8, 3, 5674, 1, 4, 5346, 567, 4567, 6775, 567, 567, 1211, 156, 9135,
];

// const summary = cart.reduce((accumulator, currentElement, i) => {
//   //   console.log(currentElement, accumulator);

//   return accumulator + `- ${currentElement.title} di ${currentElement.author}`;
// }, 0);

// console.log(summary);

const max = numeriCasualiBrutti.reduce((acc, curr) => {
  console.table({ acc, curr });
  return acc > curr ? acc : curr;
});

console.log(max);
