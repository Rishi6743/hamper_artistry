import React from 'react'
import Heading from './Heading'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (<>
    <Heading text="Expolre our Services" src="https://www.angroos.com/wp-content/uploads/2022/05/Birthday-3.jpg"/>
      <div className='container'>
    <div className='row'>

          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
      </ div>
    </div>
  </>
  )
}

export default Services
