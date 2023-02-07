import React from 'react'
import Heading from './Heading'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (<>
    <Heading text="Expolre our Services" src="https://www.angroos.com/wp-content/uploads/2022/05/Birthday-3.jpg" />
    <div className='container'>
      <div className='row'>

        <ServiceCard src={"https://images.unsplash.com/photo-1521478706270-f2e33c203d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} title={ "Wedding"} />
        <ServiceCard src={"https://images.unsplash.com/photo-1605875870619-471c2acd48aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80"} title={ "Birthday"} />
        <ServiceCard src={"https://images.unsplash.com/photo-1545582175-c31c9c10fe28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"} title={"Valentines"}/>
        <ServiceCard src={"https://images.unsplash.com/photo-1599318725142-2193a2d62b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"} title={"Aniversery"}/>
      </ div>
    </div>
  </>
  )
}

export default Services
