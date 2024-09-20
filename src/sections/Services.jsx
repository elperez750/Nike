import React from 'react'
import { services } from '../constants'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
          {services.map((service) => (
            <ServicesCard 
              key={service.imgURL}
              imageUrl={service.imgURL} 
              label={service.label} 
              subtext={service.subtext}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services