import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("이승훈")

  return (
    <div>
      {name}
    </div>
  )
}

export default App
