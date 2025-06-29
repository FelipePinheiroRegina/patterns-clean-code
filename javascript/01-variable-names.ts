var users = ['Felipe', 'Richard', 'Rodrigo']

// bad
const filtered = users.filter(u => {
    return u.startsWith('F')
})

// great
const filteredUsersThatStartsWithLetterF = users.filter((users) => {
    return users.startsWith('F')
})

// -----

// avoid generic names

function getUsersFromDatabase() {
    return users
}

// bad
// function getUsers() {
//     const data = getUsersFromDatabase()

//     return data
// }

// great
function getUsers() {
    const usersData = getUsersFromDatabase()

    return usersData
}

// -------------------------------------------
// const list = [
//   {
//     title: 'User',
//     followers: 5
//   },
//   {
//     title: 'Friendly',
//     followers: 50,
//   },
//   {
//     title: 'Famous',
//     followers: 500,
//   },
//   {
//     title: 'Super Star',
//     followers: 1000,
//   },
// ]

// export default async function getData(req, res) {
//   const github = String(req.query.username)

//   if (!github) {
//     return res.status(400).json({
//       message: `Please provide an username to search on the github API`
//     })
//   }

//   const response = await fetch(`https://api.github.com/users/${github}`);

//   if (response.status === 404) {
//     return res.status(400).json({
//       message: `User with username "${github}" not found`
//     })
//   }

//   const data = await response.json()

//   const orderList = list.sort((a, b) =>  b.followers - a.followers); 

//   const category = orderList.find(i => data.followers > i.followers)

//   const result = {
//     github,
//     category: category?.title
//   }

//   return result
// }

// getData({ query: {
//   username: 'josepholiveira'
// }}, {})

// apply clean code principles to the code below

const categoryList = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserCategory(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${githubUsername}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const userData = await response.json()

  const orderCategoryListByFallowers = categoryList.sort((a, b) =>  b.followers - a.followers); 

  const categoryThisUser = orderCategoryListByFallowers.find(category => userData.followers > category.followers)

  const userWithCategory = {
    githubUsername,
    category: categoryThisUser?.title
  }

  return userWithCategory
}

getUserCategory({ query: {
  username: 'josepholiveira'
}}, {})
