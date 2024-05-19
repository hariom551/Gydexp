import { useState } from 'react'
import Header from './Components/Header'
import ExploreGydes from './Components/ExploreGydes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <Header />
      <ExploreGydes/>
      {/* Other components can be added here */}
    </div>


    </>
  )
}

export default App
