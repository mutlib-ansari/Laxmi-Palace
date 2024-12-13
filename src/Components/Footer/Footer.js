import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-serif mb-4">Contact Us</h3>
          <p className="mb-2">
            <span role="img" aria-label="Phone">📞</span> +00 12 34 56789
          </p>
          <p className="mb-4">
            <span role="img" aria-label="Location">📍</span> 381 Mireles Barrio, Spain
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-yellow-500 transition duration-200"
            >
              <i className="fab fa-facebook-f">F</i>
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-500 transition duration-200"
            >
              <i className="fab fa-twitter">T</i>
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-500 transition duration-200"
            >
              <i className="fab fa-instagram">I</i>
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-500 transition duration-200"
            >
              <i className="fab fa-linkedin-in">L</i>
            </a>
          </div>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-serif mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Reservation</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Mission & Vision</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Hotel Facilities</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">News & Blogs</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Personal Information</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Data Tracking</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-serif mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500 font-serif  ">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Website Feedback</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Service Guarantee</a></li>
          </ul>
        </div>

        {/* Event */}
        <div>
          <h3 className="text-lg font-serif mb-4">Event</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Store Directory</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Product Recalls</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Accessibility</a></li>
            <li><a href="#" className="hover:text-yellow-500 font-serif ">Get App</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500">help@laxmipalace.com</p>
      </div>
    </footer>
  );
};

export default Footer;
