// AboutUs.js

import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">We are a passionate team dedicated to creating innovative solutions for our customers. Our journey began in [year], and since then, we have been committed to delivering high-quality products/services.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">At [Company Name], our mission is to [describe your mission/goals]. We strive to [mention any core values or principles guiding your work].</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-700">There are several reasons why customers choose [Company Name]. Some of our key strengths include:</p>
          <ul className="list-disc list-inside text-gray-700 pl-4">
            <li><span className="font-semibold">Quality:</span> We prioritize quality in everything we do.</li>
            <li><span className="font-semibold">Innovation:</span> We are constantly innovating to stay ahead in the market.</li>
            <li><span className="font-semibold">Customer Satisfaction:</span> Our customers' satisfaction is our top priority.</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-gray-700">Our team consists of highly skilled professionals with expertise in various domains. Together, we work towards a common goal of [mention your shared objective].</p>
        </div>
      </div>
    </div>
  );
}

export default About;
