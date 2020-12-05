const people = [
  {
    name: 'Kyle',
    spouse: 'Chelsea',
    secret: null,
    picked: false,
    previous: ['Kari', 'Holly', 'Kolby', 'Kurtis'],
  },
  {
    name: 'Chelsea',
    spouse: 'Kyle',
    secret: null,
    picked: false,
    previous: ['Kim', 'Chris', 'Nick', 'Kevin'],
  },
  {
    name: 'Kolby',
    spouse: 'Mariah',
    secret: null,
    picked: false,
    previous: ['Kyle', 'Kari', 'Jessica', 'Shelley'],
  },
  {
    name: 'Mariah',
    spouse: 'Kolby',
    secret: null,
    picked: false,
    previous: [],
  },
  {
    name: 'Kari',
    spouse: 'Kevin',
    secret: null,
    picked: false,
    previous: ['Kolby', 'Jessica', 'Laura', 'Kim'],
  },
  {
    name: 'Kevin',
    spouse: 'Kari',
    secret: null,
    picked: false,
    previous: ['Kameron', 'Kim', 'Shelley', 'Holly'],
  },
  {
    name: 'Maddison',
    spouse: 'Kameron',
    secret: null,
    picked: false,
    previous: ['Kari'],
  },
  {
    name: 'Kameron',
    spouse: 'Maddison',
    secret: null,
    picked: false,
    previous: ['Paul', 'Keith', 'Holly', 'Kyle'],
  },
  {
    name: 'Keith',
    spouse: 'Shelley',
    secret: null,
    picked: false,
    previous: ['Melissa', 'Paul', 'Chris', 'Chelsea'],
  },
  {
    name: 'Shelley',
    spouse: 'Keith',
    secret: null,
    picked: false,
    previous: ['Karen', 'Melissa', 'Kevin', 'Kameron'],
  },
  {
    name: 'Kim',
    spouse: 'Chris',
    secret: null,
    picked: false,
    previous: ['Kurtis', 'Shelley', 'Karen', 'Nick'],
  },
  {
    name: 'Chris',
    spouse: 'Kim',
    secret: null,
    picked: false,
    previous: ['Keith', 'Kameron', 'Kari', 'Paul'],
  },
  {
    name: 'Paul',
    spouse: 'Jessica',
    secret: null,
    picked: false,
    previous: ['Nick', 'Kevin', 'Keith', 'Kolby'],
  },
  {
    name: 'Jessica',
    spouse: 'Paul',
    secret: null,
    picked: false,
    previous: ['Ken', 'Nick', 'Melissa', 'Laura'],
  },
];

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))
const alreadyHasSecret = person => person.secret !== null;

// This number will increase each time a random person is attempted.
// If it reaches the length of the people array, an exception will be thrown.
// This avoids an infinite loop. Simply restart the program to try again.
let tryAgain = 0;

const validPick = (person, pick) => {
  if (pick.picked) return false;
  if (person.spouse === pick.name) return false;
  if (person.name === pick.name) return false;
  if (person.previous.includes(pick.name)) { }
  return true;
}

const pickRandom = (people, person) => {
  const randomSecret = people[getRandomInt(people.length)];
  if (!validPick(person, randomSecret)) {
    // Check for infinite loop
    if (tryAgain > people.length) {
      throw `Exception: A valid pick could not be found for ${person.name}.`;
    }
    tryAgain++;
    return pickRandom(people, person);
  }
  tryAgain = 0;
  return randomSecret;
};

const markAsPicked = (people, person) => {
  const personIndex = people.findIndex(el => el.name === person.name);
  people[personIndex].picked = true;
}

people.forEach((person, _, peopleArray) => {
  const secret = pickRandom(peopleArray, person);
  person.secret = secret.name;
  markAsPicked(peopleArray, secret);
})

console.log(people);
