import { useState } from 'react'

import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>A Personal-Bloging app</h1>
    </>
  )
}

export default App
