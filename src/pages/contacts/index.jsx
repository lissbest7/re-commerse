import React from 'react';

function Contacts() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          We'd love to hear from you! If you have any questions, concerns, or feedback, please feel free to reach out to us using the form below.
        </p>
        
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-2">
              Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Your Name" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Your Email" 
              required 
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Your Message" 
              required 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg shadow-lg hover:bg-[#1f1f1f] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
