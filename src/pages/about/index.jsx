import React from 'react'

function about() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to <span className="font-semibold text-blue-500">re:commerse</span>! 
          We are passionate about bringing you the best products with the highest quality and service. 
          Our mission is to provide an exceptional shopping experience through innovative and customer-centric approaches.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Our team is dedicated to ensuring that every product we offer meets our rigorous standards. 
          We believe in transparency and integrity, working tirelessly to ensure that our customers are always satisfied. 
          Thank you for being a part of our community and supporting our vision.
        </p>
      </div>
    </div>
  )
}

export default about