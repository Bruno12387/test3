import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Vite + React + TypeScript</h1>
      <p>Edit src/App.tsx and save to test HMR</p>
      <button onClick={() => setCount((c) => c + 1)}>
        count is {count}
      </button>
    </main>
  )
}

export default App
