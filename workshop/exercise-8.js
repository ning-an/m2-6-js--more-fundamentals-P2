// Exercise 8
// ----------

const staffMembers = [
  {
    name: 'Jane Smith',
    title: 'Web Developer II',
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6,
    },
  },
  {
    name: 'Frank Castle',
    title: 'Web Developer I',
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3,
    },
  },
  {
    name: 'Steve Rogers',
    title: 'Database Admin',
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9,
    },
  },
  {
    name: 'Chuck Taylor',
    title: 'Web Developer III',
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8,
    },
  },
  {
    name: 'Thor Odinson',
    title: 'Web Intern',
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6,
    },
  },
];

const jsGuru = arr => {
  return arr.filter( elem => {
    return elem.skillLevels.javascript >= 6;
  })
}

console.log(jsGuru(staffMembers));


//Stretch
const languageGuru = (arr, language, level) => {
  return arr.filter( elem => elem.skillLevels[language] >= level );
}

console.log(languageGuru(staffMembers, 'sql', 6));