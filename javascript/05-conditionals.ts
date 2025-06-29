const isUserGreaterThan18 = true
const isUserLiveOnBrazil = true 

// avoid negative conditionals
if (!isUserGreaterThan18 && !isUserLiveOnBrazil) {
  throw new Error('The user is not allowed to buy this product!')
}

// ----
const isUserYoungerThan18Years = true
const doesUserLiveOutsideBrazil = true 

if(isUserYoungerThan18Years && doesUserLiveOutsideBrazil) {
    throw new Error('The user is not allowed to buy this product!')
}

// ----
// early return vs else
// avoid else statements
// function getUserAge(user) {
//     if(!user) {
//         return { error: true }
//     } else {
//         return { age: Math.random() * 100 }
//     }
// }

function getUserAge(user) {
    if(!user) {
        return { error: true }
    } 
    
    return { age: Math.random() * 100 }
}

// ----
// avoid nested conditionals
const year = 18
const hability = true
const user = year > 18 ? hability ? 'User can drive': 'User cannot drive' : 'minor' 

function getUserDrivingHability(year, hability) {
    if(year > 18) {
        if(hability) {
            return 'User can drive'
        } else {
            return 'User cannot drive'
        }
    } else {
        return 'minor'
    }
}

