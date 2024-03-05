// ContactUs.js

import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-2"><span className="font-semibold">Address:</span> 123 Main St, City, Country</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Phone:</span> +1 234 567 890</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Email:</span> info@example.com</p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <iframe 
                title="Map"
                className="w-full h-64 rounded-lg shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.6291926826776!2d-76.87386818474596!3d38.98469497956856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7ee66ab002c5d%3A0xd46092fe2a82c1c8!2s123%20Main%20St%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1637123456789!5m2!1sen!2sus"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"></textarea>
            </div>
            <div className="col-span-2">
              <button type="submit" className="w-full bg-indigo-600 text-white rounded-md py-3 px-4 font-semibold hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Send Message</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
