"use strict";

//
//---------------- SELECTIONS -------------------
//

const leftBtn = document.querySelector(".chev__left");
const rightBtn = document.querySelector(".chev__right");
const gallery = document.querySelector(".gallery");
const continents = document.querySelector(".bottombar__continent");
const textName = document.querySelector(".text__name");
const textLocation = document.querySelector(".text__location");
//
//
//
//
//------- CLASSES -----------
class Continent {
  constructor(name, location, src) {
    this.name = name;
    this.location = location;
    this.src = src;
  }
}

class Asian extends Continent {
  continent = "asia";
  constructor(name, location, src) {
    super(name, location, src);
  }
}

class American extends Continent {
  continent = "america";
  constructor(name, location, src) {
    super(name, location, src);
  }
}

class Antarctican extends Continent {
  continent = "antarctica";
  constructor(name, location, src) {
    super(name, location, src);
  }
}

class European extends Continent {
  continent = "europe";
  constructor(name, location, src) {
    super(name, location, src);
  }
}

class Oceanian extends Continent {
  continent = "oceania";
  constructor(name, location, src) {
    super(name, location, src);
  }
}
//
// ---------- OBJECTS(INSTANCES)----------
// ------------ ASIA ---------------------
const asiaEx1 = new Asian("Arabian Desert", "Arabia", "img/asia/desert.jpg");
const asiaEx2 = new Asian("Fuji Mountain", "Japan", "img/asia/fujijapan.jpg");
const asiaEx3 = new Asian("Himalayas", "Nepal", "img/asia/himalayas.jpg");
const asiaEx4 = new Asian(
  "Jusangjeolli Cliff",
  "Korean Republic",
  "img/asia/jusangjeollicliff.jpg"
);
const asiaEx5 = new Asian(
  "Tea Feilds",
  "Vietnam",
  "img/asia/teaplantationvietnam.jpg"
);
const asiaEx6 = new Asian("Wadi Romu", "Jordan", "img/asia/wadiromujordan.jpg");
const asiaEx7 = new Asian("Xian", "China", "img/asia/xianchina.jpg");
//
// ------------------- AMERICA ---------------------
const americaEx1 = new American(
  "Glacier",
  "Argentina",
  "img/america/argentinaglacier.jpg"
);
const americaEx2 = new American(
  "Lake and Mountains",
  "Canada",
  "img/america/canada.jpg"
);
const americaEx3 = new American(
  "Denali National Park",
  "USA",
  "img/america/denali.jpg"
);
const americaEx4 = new American(
  "Iguassu Falls",
  "Brazil",
  "img/america/iguassu.jpg"
);
const americaEx5 = new American(
  "Argentinian Patagonia",
  "Argentina",
  "img/america/patagonia.jpg"
);
const americaEx6 = new American(
  "Sandstone",
  "usa",
  "img/america/sandstone.jpg"
);
const americaEx7 = new American(
  "Torres del Paine",
  "Chile",
  "img/america/torresdelpaine.jpg"
);
const americaEx8 = new American(
  "Uyuni Salt Flat",
  "Bolivia",
  "img/america/Uyunisaltflat.jpg"
);
//
// ------------------------ ANTARCTICA -----------------------------
const antarcticaEx1 = new Antarctican(
  "Huge Iceberg",
  "Antarctica",
  "img/antarctica/antarctica.jpg"
);
const antarcticaEx2 = new Antarctican(
  "Ice and Water",
  "Antarctica",
  "img/antarctica/antarctica2.jpg"
);
const antarcticaEx3 = new Antarctican(
  "Iceberg",
  "Antarctica",
  "img/antarctica/iceberg.jpg"
);
const antarcticaEx4 = new Antarctican(
  "Ice and Hill",
  "Antarctica",
  "img/antarctica/iceberg2.jpg"
);
const antarcticaEx5 = new Antarctican(
  "Mountains",
  "Antarctica",
  "img/antarctica/mountain.jpg"
);
const antarcticaEx6 = new Antarctican(
  "Ice and Rock",
  "Antarctica",
  "img/antarctica/mountain2.jpg"
);
const antarcticaEx7 = new Antarctican(
  "Winter on the Land",
  "Antarctica",
  "img/antarctica/winter.jpg"
);
//
// -------------------- EUROPE -------------------------
const europeEx1 = new European(
  "Aurora Borealis",
  "Finland",
  "img/europe/auroraborealisfinland.jpg"
);
const europeEx2 = new European("Beach", "Spain", "img/europe/beachspain.jpg");
const europeEx3 = new European(
  "Road and Mountain",
  "Iceland",
  "img/europe/iceland.jpg"
);
const europeEx4 = new European(
  "Moher Cliff",
  "Ireland",
  "img/europe/mohercliffireland.jpg"
);
const europeEx5 = new European(
  "Norwegian Fjord",
  "Norway",
  "img/europe/norwayfjord.jpg"
);
const europeEx6 = new European(
  "Norwegian Fjord",
  "Norway",
  "img/europe/norwayfjordsecond.jpg"
);
const europeEx7 = new European(
  "South Tyrol",
  "Italy",
  "img/europe/southtyrolitaly.jpg"
);
const europeEx8 = new European(
  "Green Valley",
  "Switzerland",
  "img/europe/switzerland.jpg"
);
//
// --------------------- OCEANIA -------------------
const oceaniaEx1 = new Oceanian(
  "Australian Beach",
  "Australia",
  "img/oceania/beachaustralia.jpg"
);
const oceaniaEx2 = new Oceanian("Fiji's Beach", "Fiji", "img/oceania/fiji.jpg");
const oceaniaEx3 = new Oceanian(
  "Fiji's Beach",
  "Fiji",
  "img/oceania/fiji2.jpg"
);
const oceaniaEx4 = new Oceanian(
  "Northern Island",
  "New Zealand",
  "img/oceania/northislandnewzealand.jpg"
);
const oceaniaEx5 = new Oceanian(
  "Palau Beach",
  "Palau",
  "img/oceania/palaubeach.jpg"
);
const oceaniaEx6 = new Oceanian(
  "Tekapo Lake",
  "New Zealand",
  "img/oceania/tekapolakenewzealand.jpg"
);
//
// ARRAYS FOR EACH CONTINENTS
const asia = [asiaEx1, asiaEx2, asiaEx3, asiaEx4, asiaEx5, asiaEx6, asiaEx7];
const america = [
  americaEx1,
  americaEx2,
  americaEx3,
  americaEx4,
  americaEx5,
  americaEx6,
  americaEx7,
  americaEx8,
];
const antarctica = [
  antarcticaEx1,
  antarcticaEx2,
  antarcticaEx3,
  antarcticaEx4,
  antarcticaEx5,
  antarcticaEx6,
  antarcticaEx7,
];
const europe = [
  europeEx1,
  europeEx2,
  europeEx3,
  europeEx4,
  europeEx5,
  europeEx6,
  europeEx7,
  europeEx8,
];
const oceania = [
  oceaniaEx1,
  oceaniaEx2,
  oceaniaEx3,
  oceaniaEx4,
  oceaniaEx5,
  oceaniaEx6,
];
const allOfArrays = [asia, america, antarctica, europe, oceania];
//
let currShow;
let currContinent;
let maxlength;
let position = 0;
//
//
// IMPLEMENTING BOTTOMBAR INFORMATION MANIPULATE
const textManipulate = function (arr, currPos) {
  textName.textContent = arr[currPos].name;
  textLocation.textContent = arr[currPos].location;
};
//
//
///
//
// IMPLEMENTING DISPLAY CONTINENTS SHOW
const displayContinents = function (arr) {
  gallery.innerHTML = "";
  arr.forEach((curr) => {
    const html = `<figure class="gallery__element" style="background-image : linear-gradient(to right,var(--overlay),var(--overlay)),url(${curr.src});">&nbsp;</figure>`;
    gallery.insertAdjacentHTML("beforeend", html);
  });
  currShow = document.querySelectorAll(".gallery__element");
  maxlength = currShow.length;
};
//
//
//INITIAL, STARTS WITH ASIA
currContinent = asia;
displayContinents(asia);
textManipulate(currContinent, position);
//
//////SLIDING ALGORITHM
const sliding = function (arr) {
  arr.forEach((el) => {
    el.style.opacity = "0";
  });
  arr[position].style.opacity = "1";
  textManipulate(currContinent, position);
};
//INITIAL, STARTS WITH ASIA
sliding(currShow);

//
//IMPLEMENTING RIGHT
const nextSlide = function (arr) {
  if (position === maxlength - 1) position = 0;
  else position++;
  sliding(arr);
};
//
// IMPLEMENTING LEFT
const prevSlide = function (arr) {
  if (position === 0) position = maxlength - 1;
  else position--;
  sliding(arr);
};
//
//
// RIGHT BUTTON
rightBtn.addEventListener("click", function () {
  nextSlide(currShow);
});

//LEFT BUTTON
leftBtn.addEventListener("click", function () {
  prevSlide(currShow);
});
//
//RIGHT ARROW + LEFT ARROW
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide(currShow);
  if (e.key === "ArrowLeft") prevSlide(currShow);
});
//
//
///SLIDING PART ----- SLIDING PART-------- ENDS
//
//
//
// INITINAL BEGINING ( ASIA )
//
// IMPLEMENT THE CONTINENTS NAVIGATION
continents.addEventListener("click", function (e) {
  const target = e.target.closest(".bottombar__continents");
  if (target) {
    position = 0;
    const attr = target.getAttribute("continent");
    currContinent = allOfArrays[attr];
    displayContinents(currContinent);
    maxlength = currShow.length;
    sliding(currShow);
    //this comes from other JS file
    popUpCloser();
  }
});
//
//
//
//
//
//
///
///
//
//
//
//

//
//
///
///
///
///
///
///
