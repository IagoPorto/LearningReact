import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [enabled, setEnabled] = useState(false)

  useEffect(() => {

  })

  return (
    <>
      <h3>
        Proyecto
      </h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Disable" : "Enable"}
      </button>
    </>
  )
}

export default App
