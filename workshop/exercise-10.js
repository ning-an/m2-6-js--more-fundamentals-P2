// Exercise 10
// -----------

let inputData = {
  name: 'Will Byers',
  age: 9,
  status: 'upside down',
  superpower1: 'can-blink-lights',
  superpower2: null,
  address1: '123 Whatever street',
  addressCity: 'Hawkins',
  addressState: 'Indiana',
  addressCountry: 'United States',
  motherName: 'Joyce Byers',
  motherAge: 35,
  motherStatus: 'worried',
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: 'Mike Wheeler',
  bestFriendAge: 9,
  bestFriendStatus: 'frenetic',
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: 'Eleven',
  girlfriendAge: 9,
  girlfriendStatus: 'angry',
  girlfriendSuperpower1: 'telepathy',
  girlfriendSuperpower2: 'multiverse portal sealing',
};

// We want a function that can transform it from that shape to this shape:
//
// {
//   "name": "Will Byers",
//   "age": 9,
//   "status": "upside down",
//   "address": {
//     "streetAddress": "123 Whatever street",
//     "city": "Hawkins",
//     "state": "Indiana",
//     "country": "United States"
//   },
//   "superpowers": [
//     "can-blink-lights"
//   ],
//   "relationships": [
//     {
//       "type": "mother",
//       "name": "Joyce Byers",
//       "age": 35,
//       "status": "worried",
//       "superpowers": []
//     },
//     {
//       "type": "girlfriend",
//       "name": "Eleven",
//       "age": 9,
//       "status": "angry",
//       "superpowers": [
//         "telepathy",
//         "multiverse portal sealing"
//       ]
//     }
//   ]
// }

// Specifically:

// - Address becomes nested in an object
// - Instead of `superpower1` and `superpower2`, an array is used
// - Instead of having a "flat" structure for relationships, a new `relationships`
//   array is added, which holds objects for each relationship.
// - Each relationship has a `type`, like mother/best-friend/girlfriend
// - Each relationship also has an array of super powers, same logic as the main
//   `superpowers` array

// NOTE: For superpowers, you should only have as many items as are available.
// For example, the main superpowers array should be:
// ✅ ['can-blink-lights']
// ⛔️ ['can-blink-lights', null]
const superpowerCombine = (sp1, sp2) => {
  const combinedSuperpower = [];
  if (sp1) combinedSuperpower.push(sp1);
  if (sp2) combinedSuperpower.push(sp2);
  return combinedSuperpower;
}

function transformData(data) {
  return {
    'name': data.name,
    'age': data.age,
    'status': data.status,
    'address': {
      'streetAddress': data.address1,
      'city': data.addressCity,
      'state': data.addressState,
      'country': data.addressCountry
    },
    'superpowers': superpowerCombine(data.superpower1, data.superpower2),
    'relationships': [
      {
        'type': 'mother',
        'name': data.motherName,
        'age': data.motherAge,
        'status': data.motherStatus,
        'superpowers': superpowerCombine(data.motherSuperpower1, data.motherSuperpower2)
      },
      {
        'type': 'bestfriend',
        'name': data.bestFriendName,
        'age': data.bestFriendAge,
        'status': data.bestFriendStatus,
        'superpowers': superpowerCombine(data.bestFriendSuperpower1, data.bestFriendSuperpower2)
      },
      {
        'type': 'girlfriend',
        'name': data.girlfriendName,
        'age': data.girlfriendAge,
        'status': data.girlfriendStatus,
        'superpowers': superpowerCombine(data.girlfriendSuperpower1, data.girlfriendSuperpower2)
      }
    ]
  }
}

// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.

console.log(JSON.stringify(transformData(inputData), null, 2));
