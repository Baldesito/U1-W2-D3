// RISPOSTA 1.
let charactersNames = [];

// RISPOSTA 2.

let starWarsCharacters = [
    { name: 'Luke Skywalker', height: 172, mass: 77, hair_color: 'blond', skin_color: 'fair', eye_color: 'blue', birth_year: '19BBY', gender: 'male' },
    { name: 'C-3PO', height: 167, mass: 75, hair_color: 'n/a', skin_color: 'gold', eye_color: 'yellow', birth_year: '112BBY', gender: 'n/a' },
    { name: 'R2-D2', height: 96, mass: 32, hair_color: 'n/a', skin_color: 'white, blue', eye_color: 'red', birth_year: '33BBY', gender: 'n/a' },
    { name: 'Leia Organa', height: 150, mass: 49, hair_color: 'brown', skin_color: 'light', eye_color: 'brown', birth_year: '19BBY', gender: 'female' }
  ];
  
  // RISPOSTA 3.

  for (let i = 0; i < starWarsCharacters.length; i++) {
    charactersNames.push(starWarsCharacters[i].name);
  }
  console.log(charactersNames);

  let femaleCharacters = [];

// RISPOSTA 4.

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === 'female') {
    femaleCharacters.push(starWarsCharacters[i]);
  }
}
console.log(femaleCharacters);

// RISPOSTA 5.

let eyeColor = {
    blue: [],
    yellow: [],
    brown: [],
    red: [],
    blue_gray: []
  };
  console.log(eyeColor);

// RISPOSTA 6.

  for (let i = 0; i < starWarsCharacters.length; i++) {
    let character = starWarsCharacters[i];
    switch (character.eye_color) {
      case 'blue':
        eyeColor.blue.push(character);
        break;
      case 'yellow':
        eyeColor.yellow.push(character);
        break;
      case 'brown':
        eyeColor.brown.push(character);
        break;
      case 'red':
        eyeColor.red.push(character);
        break;
      case 'blue-gray':
        eyeColor.blue_gray.push(character);
        break;
      default:
        console.log("Colore degli occhi non riconosciuto: " + character.eye_color);
    }
  }
  console.log(eyeColor);

// RISPOSTA 7.

let crewMass = 0;
let j = 0;

while (j < starWarsCharacters.length) {
  crewMass += starWarsCharacters[j].mass;
  j++;
}
console.log("Massa totale dell'equipaggio:", crewMass);


if (crewMass < 500) {
    console.log("Ship is under loaded");
  } else if (crewMass >= 500 && crewMass < 700) {
    console.log("Ship is half loaded");
  } else if (crewMass >= 700 && crewMass < 900) {
    console.log("Warning: Load is over 700");
  } else if (crewMass >= 900 && crewMass < 1000) {
    console.log("Critical Load: Over 900");
  } else if (crewMass >= 1000) {
    console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
  }
  
  starWarsCharacters[0].mass = 500; 
  crewMass = 0;
  j = 0;
  
  while (j < starWarsCharacters.length) {
    crewMass += starWarsCharacters[j].mass;
    j++;
  }
  
  if (crewMass < 500) {
    console.log("Ship is under loaded");
  } else if (crewMass >= 500 && crewMass < 700) {
    console.log("Ship is half loaded");
  } else if (crewMass >= 700 && crewMass < 900) {
    console.log("Warning: Load is over 700");
  } else if (crewMass >= 900 && crewMass < 1000) {
    console.log("Critical Load: Over 900");
  } else if (crewMass >= 1000) {
    console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
  }

// RISPOSTA 8.

  for (let i = 0; i < starWarsCharacters.length; i++) {
    if (starWarsCharacters[i].gender === 'n/a') {
      starWarsCharacters[i].gender = 'robot';
    }
  }
  console.log(starWarsCharacters);
  console.log("Length of charactersNames before removal:", charactersNames.length);

// RISPOSTA - EXTRA 9.

for (let i = 0; i < femaleCharacters.length; i++) {
  let nameToRemove = femaleCharacters[i].name;
  let index = charactersNames.indexOf(nameToRemove);
  if (index !== -1) {
    charactersNames.splice(index, 1);
  }
}
console.log("Length of charactersNames after removal:", charactersNames.length);
console.log(charactersNames);

// RISPOSTA -EXTRA 10.

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * starWarsCharacters.length);
    let character = starWarsCharacters[randomIndex];
    console.log(`Meet ${character.name}! This ${character.gender} character stands ${character.height} cm tall and weighs ${character.mass} kg. They have ${character.hair_color} hair, ${character.eye_color} eyes, and ${character.skin_color} skin. Born in ${character.birth_year}, ${character.name} is truly a remarkable figure in the Star Wars universe.`);
  }
  getRandomCharacter();
  