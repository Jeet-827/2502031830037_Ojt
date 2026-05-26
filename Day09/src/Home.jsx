// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   )
// }

// export default Home

import { useNavigate } from 'react-router-dom'

export default function Home() {

    const Navigate = useNavigate();
    const GoToAbout = () => {
        Navigate("/about")

    }
    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={GoToAbout}>Go TO About</button>
        </div>
    )
}