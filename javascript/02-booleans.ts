// flags to variable names boolean
// is, has, does

// booleans ever as questions / semantic

const isUserLoggedIn = true // great

const disable = true // bad
const isDisabledFeature = true // great

// -----

if (isUserLoggedIn) {
    console.log('User is logged in')
}

if (isDisabledFeature) {
    console.log('The feature is disabled')
}

// -----

async function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 1000)
    })
}

// request to user data
async () => {
    const isLoading = await fetchUserData() // bad
    const isLoadingUserData = await fetchUserData() // great 
}


// -----
// const user = {
//   name: 'Diego Fernandes',
//   height: 190,
//   hasTicket: true,
// }

// const necessaryHeight = 130

// const currentHour = new Date().getHours()

// const parkOpen = currentHour > 9 && currentHour < 18

// if (!parkOpen) {
//   throw new Error('O parque está fechado!')
// }

// const ticket = user.hasTicket

// if (!ticket) {
//   throw new Error('O Diego não possui um bilhete para entrar no parque!')
// }

// const enterToy = user.height > necessaryHeight

// if (!enterToy) {
//   throw new Error('O Diego não pode entrar no brinquedo!')
// } 

// console.log('O Diego se divertiu muito! :)')

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: false,
}

const heightNeededRideYourFavoriteToy = 130
const openParkHour = 9
const closeParkHour = 18

const currentHour = new Date().getHours()

const isParkOpen = currentHour > openParkHour && currentHour < closeParkHour

if (!isParkOpen) {
    throw new Error('The park is closed!')
}

const userHasTicket = user.hasTicket

if (!userHasTicket) {
  throw new Error('The diego does not have a ticket to enter the park!')
}

const userHasNecessaryHeight = user.height > heightNeededRideYourFavoriteToy

if (!userHasNecessaryHeight) {
  throw new Error('The diego has not necessary height to ride your favorite toy!')
} 

console.log('The diego i like it! :)')