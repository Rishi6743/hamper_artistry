import React from 'react'

const Heading = (props) => {


  const style = {
    backgroundImage: `url(${"https://www.angroos.com/wp-content/uploads/2022/05/Birthday-3.jpg"})`
  };
  
  return (
    <div style={style}>
        <header>
 
  <div class="text-center bg-gray-50 text-gray-800 py-20 px-6">
    <h1 class="text-5xl font-bold mt-0 mb-6">{props.text}</h1>

    
  </div>
 
</header>
    </div>
  )
}

export default Heading
