import React from 'react'

const Heading = (props) => {

  
  return (
    <div>
        <header  >
 
  <div class="text-center bg-gray-50 text-gray-800 py-20 px-6" style={{background: "none"}}>
    <h1 class="text-5xl font-bold mt-0 mb-6">{props.text}</h1>

    
  </div>
 
</header>
    </div>
  )
}

export default Heading
