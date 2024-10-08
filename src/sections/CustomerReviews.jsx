import React from 'react'
import TestimonialCard from '../components/TestimonialCard'

const CustomerReviews = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl">What our <span className="text-coral-red">Customers</span> say</h1>
      <p className="text-xl font-light">Hear genuine stories from our satisfied customers about their exceptional experiences with us. </p>

      <TestimonialCard />
    </div>
  )
}

export default CustomerReviews
