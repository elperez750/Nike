import React from 'react'

const Subscribe = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className='flex-1 w-full lg:w-1/2 text-center lg:text-left'>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
            </h2>
            <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
              Stay in the loop with the latest product releases, exclusive offers, and Nike news.
            </p>
          </div>

          <div className="flex-1 w-full lg:w-1/2">
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full h-14 px-6 py-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bg-coral-red text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe