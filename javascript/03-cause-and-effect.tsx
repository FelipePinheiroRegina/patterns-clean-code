// export function Button() {
//     const isButtonDisabled = true // creating variable based on effect

//     return (
//         <div>
//             <button disabled={isButtonDisabled}>
//                 Click me
//             </button>
//             <p>
//                 {isButtonDisabled ? 'Loading' : 'Send a form'}
//             </p>
//         </div>
//     )
// }



export function Button() {
    const isFormSubmitting = true // creating variable based on cause

    return (
        <div>
            <button disabled={isFormSubmitting}>
                Click me
            </button>
            <p>
                {isFormSubmitting ? 'Loading' : 'Send a form'}
            </p>
        </div>
    )
}

// ---------
// Cause vs Effect
// import { useEffect, useState } from "react"

// interface User {
//   name: string;
//   github: string;
// }

// function fetchUser() {
//   return {
//     data: {
//       user: {
//         name: 'Joseph Oliveira',
//         github: 'https://github.com/josepholiveira'
//       }
//     }
//   }
// }

// export function UserProfile() {
//   const [shouldNotRenderUserName, setShouldNotRenderUserName] = useState(false)
//   const [userData, setUserData] = useState<User>()

//   useEffect(() => {
//     function loadUser() {
//       setShouldNotRenderUserName(true)

//       const fetchUserResponse = fetchUser()

//       setUserData(fetchUserResponse.data.user)
      
//       setShouldNotRenderUserName(false)
//     }

//     loadUser()
//   })

//   if (shouldNotRenderUserName) {
//     return <p>Loading...</p>
//   }

//   return (
//     <div>
//       <img src={`${userData?.github}.png`} alt="" />
//       <a href={userData?.github}>{userData?.name}</a>
//     </div>
//   )
// }

// import { useEffect, useState } from "react"

// interface User {
//   name: string;
//   github: string;
// }

// function fetchUser() {
//   return {
//     data: {
//       user: {
//         name: 'Joseph Oliveira',
//         github: 'https://github.com/josepholiveira'
//       }
//     }
//   }
// }

export function UserProfile() {
  const [isLoadingUserData, setIsLoadingUserData] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function loadUser() {
      setShouldNotRenderUserName(true)

      const fetchUserResponse = fetchUser()

      setUserData(fetchUserResponse.data.user)
      
      setIsLoadingUserData(false)
    }

    loadUser()
  })

  if (isLoadingUserData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}