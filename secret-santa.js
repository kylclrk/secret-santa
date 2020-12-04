const people = [
  {
    name: 'Kyle',
    spouse: 'Chelsea',
    secret: null,
    picked: false,
  },
  {
    name: 'Chelsea',
    spouse: 'Kyle',
    secret: null,
    picked: false,
  },
  {
    name: 'Kolby',
    spouse: 'Mariah',
    secret: null,
    picked: false,
  },
  {
    name: 'Mariah',
    spouse: 'Kolby',
    secret: null,
    picked: false,
  },
  {
    name: 'Kari',
    spouse: 'Kevin',
    secret: null,
    picked: false,
  },
  {
    name: 'Kevin',
    spouse: 'Kari',
    secret: null,
    picked: false,
  },
  {
    name: 'Maddison',
    spouse: 'Kameron',
    secret: null,
    picked: false,
  },
  {
    name: 'Kameron',
    spouse: 'Maddison',
    secret: null,
    picked: false,
  },
  {
    name: 'Keith',
    spouse: 'Shelley',
    secret: null,
    picked: false,
  },
  {
    name: 'Shelley',
    spouse: 'Keith',
    secret: null,
    picked: false,
  },
  {
    name: 'Kim',
    spouse: 'Chris',
    secret: null,
    picked: false,
  },
  {
    name: 'Chris',
    spouse: 'Kim',
    secret: null,
    picked: false,
  },
  {
    name: 'Paul',
    spouse: 'Jessica',
    secret: null,
    picked: false,
  },
  {
    name: 'Jessica',
    spouse: 'Paul',
    secret: null,
    picked: false,
  }
]

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))
const alreadyHasSecret = person => person.secret !== null;

const validPick = (person, pick) => {
  if (pick.picked) return false;
  if (person.spouse === pick.name) return false;
  if (person.name === pick.name) return false;
  return true;
}

const pickRandom = (people, person) => {
  const randomSecret = people[getRandomInt(people.length)];
  if (!validPick(person, randomSecret)) {
    return pickRandom(people, person);
  }
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
