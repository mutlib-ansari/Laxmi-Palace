// import React from "react";
// import bg from "../Assests/bg2.jpg"
// import logo from "../Assests/logo.png"
// import frame from "../Assests/frame.png"
// import icon1 from "../Assests/whatsapp.png"

// function Navbar() {
//     return (
//         <div className="relative w-full bg-cover bg-center  " style={{ backgroundImage: `url(${bg})` }} >
//             {/* <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div> */}

//             <div className="container mx-auto w-full max-w-[1280px]">
//                 <div className="flex items-center  justify-between py-4 px-6">
//                     <div className="flex items-center space-x-2">
//                         <img
//                             src={logo}

//                             className="h-28"
//                         />

//                     </div>



//                     <div>    <div className="flex space-x-4">
//                         <a
//                             href="https://wa.me/+909876543210"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex space-x-2 "
//                         >
//                             <img
//                                 src={icon1}
//                                 alt="WhatsApp"
//                                 className="h-6"
//                             />
//                             <span>+90-9876543210</span>
//                         </a>
//                         <span className="text-gray-500">/</span>
//                         <span className="">+91-0123456789</span>
//                     </div>
//                         <nav className="hidden md:flex space-x-8">
//                             <a href="#home" className="text-blacks hover:text-red-800">HOME</a>
//                             <a href="#about" className="text-blacks hover:text-red-800">ABOUT</a>
//                             <a href="#rooms" className="text-blacks hover:text-red-800">ROOMS</a>
//                             <a href="#hotel" className="text-blacks hover:text-red-800">HOTEL</a>
//                             <a href="#pages" className="text-blacks hover:text-red-800">PAGES</a>
//                             <a href="#contact" className="text-blacks hover:text-red-800">CONTACT US</a>
//                         </nav>
//                     </div>




//                     {/* Mobile Menu Toggle */}
//                     {/* <button className="md:hidden text-gray-700 focus:outline-none">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
//             />
//           </svg>
//         </button> */}
//                 </div>



//                 <div className="flex p-6 ">

//                     <div className="w-3/5 p-6 font-normal mt-auto mb-auto ">
//                         <span className="text-lg font-forum text-amber-800">M A J E S T I C  R O O M S</span>
//                         <h1 className="font-forum text-[60px] leading-[70px]  text-gray-800s  ">
//                             Discover Your Paradise  <br />
//                             Where You Are
//                         </h1>
//                         <p className="font-forum text-amber-950 mt-4">
//                             Sed imperdiet dignissim odio dignissim bibendum. Praesent porttitor
//                             tristique velit efficitur, a pulvinar sem hasellus.
//                         </p>
//                         <button className="mt-6 px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
//                             Explore Now
//                         </button>
//                     </div>


//                     <div className="   w-2/5 bg-white shadow-md p-6 border border-gray-200  ">

//                         <form style={{ backgroundImage: `url(${frame})` }} className=" bg-cover space-y-4 p-6">
//                             <h2 className="text-xl font-Fraunces text-gray-800 text-center ">Check Availability</h2>

//                             <div>
//                                 <label className="block text-amber-950 mb-1">Check In</label>
//                                 <select className="w-full px-4 py-2  focus:outline-none focus:ring-2 text-amber-950 ">
//                                     <option>13 October 2024</option>
//                                     <option>14 October 2024</option>
//                                     <option>15 October 2024</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label className="block text-gray-600 mb-1">Check Out</label>
//                                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                                     <option>14 October 2024</option>
//                                     <option>15 October 2024</option>
//                                     <option>16 October 2024</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label className="block text-gray-600 mb-1">Adults</label>
//                                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                                     <option>1</option>
//                                     <option>2</option>
//                                     <option>3</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label className="block text-gray-600 mb-1">Children</label>
//                                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                                     <option>1</option>
//                                     <option>2</option>
//                                     <option>3</option>
//                                 </select>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700">
//                                 Check Availability
//                             </button>
//                         </form>

//                     </div>
//                 </div>


//             </div>

//         </div >
//     );
// }

// export default Navbar;   






// import React from "react";
// import bg from "../Assests/bg2.jpg";
// import logo from "../Assests/logo.png";
// import frame from "../Assests/frame.png";
// import icon1 from "../Assests/whatsapp.png";

// function Navbar() {
//   return (
//     <div
//       className="relative w-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <div className="container mx-auto w-full max-w-[1280px]">
//         {/* Header */}
//         <div className="flex flex-wrap items-center justify-between py-4 px-6">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" className="h-20 md:h-28" />
//           </div>

//           {/* Contact & Navigation */}
//           <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
//             {/* Contact Info */}
//             <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm md:text-base">
//               <a
//                 href="https://wa.me/+909876543210"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center space-x-2"
//               >
//                 <img src={icon1} alt="WhatsApp" className="h-5 md:h-6" />
//                 <span>+90-9876543210</span>
//               </a>
//               <span className="hidden md:block text-gray-500">/</span>
//               <span>+91-0123456789</span>
//             </div>

//             {/* Navigation Links */}
//             <nav className="hidden md:flex space-x-4 md:space-x-8">
//               <a href="#home" className="text-black hover:text-red-800">
//                 HOME
//               </a>
//               <a href="#about" className="text-black hover:text-red-800">
//                 ABOUT
//               </a>
//               <a href="#rooms" className="text-black hover:text-red-800">
//                 ROOMS
//               </a>
//               <a href="#hotel" className="text-black hover:text-red-800">
//                 HOTEL
//               </a>
//               <a href="#pages" className="text-black hover:text-red-800">
//                 PAGES
//               </a>
//               <a href="#contact" className="text-black hover:text-red-800">
//                 CONTACT US
//               </a>
//             </nav>
//           </div>
//         </div>

//         {/* Hero Section */}
//         <div className="flex flex-wrap  p-6 space-y-6 md:space-y-0 md:space-x-6">
//           {/* Left Content */}
//           <div className="w-full md:w-3/5 p-6 font-normal">
//             <span className="text-sm md:text-lg font-forum text-amber-800">
//               MAJESTIC ROOMS
//             </span>
//             <h1 className="font-forum text-[40px] md:text-[60px] leading-[50px] md:leading-[70px] text-gray-800 mt-4">
//               Discover Your Paradise <br />
//               Where You Are
//             </h1>
//             <p className="font-forum text-amber-950 mt-4 text-sm md:text-base">
//               Sed imperdiet dignissim odio dignissim bibendum. Praesent
//               porttitor tristique velit efficitur, a pulvinar sem hasellus.
//             </p>
//             <button className="mt-6 px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
//               Explore Now
//             </button>
//           </div>

//           {/* Right Content */}
//           <div className="w-full md:w-2/5 bg-white shadow-md p-6 border border-gray-200">
//             <form
//               style={{ backgroundImage: `url(${frame})` }}
//               className="bg-cover space-y-4 p-6"
//             >
//               <h2 className="text-lg md:text-xl font-Fraunces text-gray-800 text-center">
//                 Check Availability
//               </h2>

//               <div>
//                 <label className="block text-amber-950 mb-1">Check In</label>
//                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                   <option>13 October 2024</option>
//                   <option>14 October 2024</option>
//                   <option>15 October 2024</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-600 mb-1">Check Out</label>
//                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                   <option>14 October 2024</option>
//                   <option>15 October 2024</option>
//                   <option>16 October 2024</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-600 mb-1">Adults</label>
//                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-600 mb-1">Children</label>
//                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700"
//               >
//                 Check Availability
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import bg from "../Assests/bg2.jpg";
// import logo from "../Assests/logo.png";
// import frame from "../Assests/frame.png";
// import icon1 from "../Assests/whatsapp.png";
// import { Button } from 'antd';
// import '../Header/Style2.css'

// function Navbar() {
//      // Define the state for mobile menu visibility
//      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//      // Toggle menu visibility
//      const toggleMenu = () => {
//          setIsMobileMenuOpen(!isMobileMenuOpen); // Correct state update
//      };
//     return (
//         <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
//             <div className="container mx-auto w-full max-w-[1280px]">
//                 <div className="flex items-center justify-between py-4 px-6">
//                     {/* Logo */}
//                     <div className="flex items-center space-x-2">
//                         <img src={logo} className="h-16 md:h-28 " alt="Logo" />
//                     </div>


//                     {/* <div className="hidden  md:flex items-center space-x-4">

//                         <div className="flex space-x-4 items-center">
//                             <a
//                                 href="https://wa.me/+909876543210"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="flex space-x-2 items-center"
//                             >
//                                 <img src={icon1} alt="WhatsApp" className="h-6" />
//                                 <span>+90-9876543210</span>
//                             </a>
//                             <span className="text-gray-500">/</span>
//                             <span>+91-0123456789</span>
//                         </div>




//                         {/* Navigation Links */}
//                     {/* <nav className="flex space-x-8">
//                             <a href="#home" className="text-black hover:text-red-800">HOME</a>
//                             <a href="#about" className="text-black hover:text-red-800">ABOUT</a>
//                             <a href="#rooms" className="text-black hover:text-red-800">ROOMS</a>
//                             <a href="#hotel" className="text-black hover:text-red-800">HOTEL</a>
//                             <a href="#pages" className="text-black hover:text-red-800">PAGES</a>
//                             <a href="#contact" className="text-black hover:text-red-800">CONTACT US</a>
//                         </nav>
//                     </div> */}


//                     <div className=" py-4 px-6">

//                         <div className=" hidden md:flex justify-end  mb-4">

//                             <div className="flex space-x-4 items-center">
//                                 <a
//                                     href="https://wa.me/+909876543210"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex space-x-2 items-center"
//                                 >
//                                     <img src={icon1} alt="WhatsApp" className="h-6" />
//                                     <span className="text-black">+90-9876543210</span>
//                                 </a>
//                                 <span className="text-gray-500">/</span>
//                                 <span className="text-black">+91-0123456789</span>
//                             </div>
//                         </div>

//                         {/* Navigation Menu */}
//                         <div className="hidden md:flex items-center justify-center space-x-8">
//                             <nav className="flex space-x-8">
//                                 <a href="#home" className="text-black hover:text-red-800">HOME</a>
//                                 <a href="#about" className="text-black hover:text-red-800">ABOUT</a>
//                                 <a href="#rooms" className="text-black hover:text-red-800">ROOMS</a>
//                                 <a href="#hotel" className="text-black hover:text-red-800">HOTEL</a>
//                                 <a href="#pages" className="text-black hover:text-red-800">PAGES</a>
//                                 <a href="#contact" className="text-black hover:text-red-800">CONTACT US</a>
//                             </nav>
//                         </div>
//                     </div>


//                     {/* Mobile Menu Toggle */}
//                     <button
//                         className="md:hidden text-gray-700 focus:outline-none"
//                         onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-6 h-6"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
//                             />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Mobile Menu
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">
//                         <a href="#home" className="text-black hover:text-red-800">HOME</a>
//                         <a href="#about" className="text-black hover:text-red-800">ABOUT</a>
//                         <a href="#rooms" className="text-black hover:text-red-800">ROOMS</a>
//                         <a href="#hotel" className="text-black hover:text-red-800">HOTEL</a>
//                         <a href="#pages" className="text-black hover:text-red-800">PAGES</a>
//                         <a href="#contact" className="text-black hover:text-red-800">CONTACT US</a>
//                     </div>
//                 )} */}


//                 {/* 
//                 {isMobileMenuOpen && (
//                     <>

//                         <div
//                             className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
//                             onClick={() => setIsMobileMenuOpen(false)} // Close menu when clicking on the background
//                         ></div>




//                         <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>


//                         <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300">
//                             <a
//                                 href="#home"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Home
//                             </a>
//                             <a
//                                 href="#about"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 About
//                             </a>
//                             <a
//                                 href="#rooms"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Rooms
//                             </a>
//                             <a
//                                 href="#hotel"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Hotel
//                             </a>
//                             <a
//                                 href="#pages"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Pages
//                             </a>
//                             <a
//                                 href="#contact"
//                                 className="block px-6 py-4 text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Contact Us
//                             </a>
//                         </div>
//                     </>
//                 )} */}



//                 {/* <button
//                     onClick={toggleMenu} // Open menu
//                     className="md:hidden p-4 text-gray-800 hover:text-amber-800"
//                 >
//                     &#9776;
//                 </button>


//                  {isMobileMenuOpen && (
//                     <>

//                         <div
//                            onClick={toggleMenu} // Close menu on background click
//                             className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
//                         ></div>


//                         <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300">
//                             {/*
//                             <div className="flex justify-end p-4">
//                                 <button
//                                     onClick={toggleMenu} 
//                                     className="text-gray-800 hover:text-red-600 text-3xl font-bold"
//                                 >
//                                     &times; 
//                                 </button>
//                             </div>


//                             <nav>
//                                 <a
//                                     href="#home"
//                                     className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                 >
//                                     Home
//                                 </a>


//                                 <div className="ml-8 mb-2">
//                                     <a
//                                         href="#abc"
//                                         className="block px-4 py-2 text-gray-600 hover:text-amber-800"
//                                     >
//                                         ABC
//                                     </a>
//                                     <a
//                                         href="#vspd"
//                                         className="block px-4 py-2 text-gray-600 hover:text-amber-800"
//                                     >
//                                         VSPD
//                                     </a>
//                                     <a
//                                         href="#etert"
//                                         className="block px-4 py-2 text-gray-600 hover:text-amber-800"
//                                     >
//                                         ETERT
//                                     </a>
//                                 </div>

//                                 <a
//                                     href="#about"
//                                     className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                 >
//                                     About
//                                 </a>
//                                 <a
//                                     href="#rooms"
//                                     className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                 >
//                                     Rooms
//                                 </a>
//                                 <a
//                                     href="#hotel"
//                                     className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                 >
//                                     Hotel
//                                 </a>
//                                 <a
//                                     href="#pages"
//                                     className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                 >
//                                     Pages
//                                 </a>
//                                 <a
//                                     href="#contact"
//                                     className="block px-6 py-4 text-gray-800 hover:bg-amber-800 hover:text-white"
//                                 >
//                                     Contact Us
//                                 </a>
//                             </nav>
//                         </div>


//                     </>
//                 )}   */}


//  <div>
//             {/* Menu Toggle Button */}
//             <button
//                 onClick={toggleMenu} // Open menu
//                 className="md:hidden p-4 text-gray-800 hover:text-amber-800"
//             >
//                 &#9776; {/* Hamburger icon */}
//             </button>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <>
//                     {/* Blurred Background */}
//                     <div
//                         onClick={toggleMenu} // Close menu on background click
//                         className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
//                     ></div>

//                     {/* Slide-in Menu */}
//                     <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300">
//                         {/* Close Icon */}
//                         <div className="flex justify-end p-4">
//                             <button
//                                 onClick={toggleMenu} // Close menu
//                                 className="text-gray-800 hover:text-red-600 text-3xl font-bold"
//                             >
//                                 &times; {/* Cross icon */}
//                             </button>
//                         </div>

//                         {/* Navigation Links */}
//                         <nav>
//                             <a
//                                 href="#home"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Home
//                             </a>

//                             {/* Submenu under Home */}
//                             <div className="ml-8 mb-2">
//                                 <a
//                                     href="#abc"
//                                     className="block px-4 py-2 text-gray-600 hover:text-amber-800"
//                                 >
//                                     ABC
//                                 </a>
//                                 <a
//                                     href="#vspd"
//                                     className="block px-4 py-2 text-gray-600 hover:text-amber-800"
//                                 >
//                                     VSPD
//                                 </a>
//                                 <a
//                                     href="#etert"
//                                     className="block px-4 py-2 text-gray-600 hover:text-amber-800"
//                                 >
//                                     ETERT
//                                 </a>
//                             </div>

//                             <a
//                                 href="#about"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 About
//                             </a>
//                             <a
//                                 href="#rooms"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Rooms
//                             </a>
//                             <a
//                                 href="#hotel"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Hotel
//                             </a>
//                             <a
//                                 href="#pages"
//                                 className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Pages
//                             </a>
//                             <a
//                                 href="#contact"
//                                 className="block px-6 py-4 text-gray-800 hover:bg-amber-800 hover:text-white"
//                             >
//                                 Contact Us
//                             </a>
//                         </nav>
//                     </div>
//                 </>
//             )}
//         </div>


//                 <div className="flex flex-wrap p-6">

//                     <div className="w-full md:w-3/5  font-normal mt-auto mb-auto">
//                         <span className="text-lg font-forum text-amber-800">M A J E S T I C R O O M S</span>
//                         <h1 className="font-forum text-[25px] md:text-[60px] leading-[37px] md:leading-[70px] text-gray-800">
//                             Discover Your Paradise <br />
//                             Where You Are
//                         </h1>
//                         <p className="font-forum text-amber-950 mt-4 pr-6 ">
//                             Sed imperdiet dignissim odio dignissim bibendum. Praesent porttitor
//                             tristique velit efficitur, a pulvinar sem hasellus.
//                         </p>

//                         <Button className="custom-button2 mt-4 mr-5 text-lg font-forum bg-customBrown mb-4">Explore Now</Button>

//                     </div>


//                     <div className="w-full md:w-2/5 bg-white shadow-md p-7 border border-gray-200">
//                         <form style={{ backgroundImage: `url(${frame})` }} className="bg-cover bg-no-repeat  space-y-4 p-6">
//                             <h2 className="text-xl font-Fraunces text-gray-800 text-center">Check Availability</h2>
//                             <div>
//                                 <label className="block text-amber-950 mb-1">Check In</label>
//                                 <select className="w-full px-4 py-2 focus:outline-none focus:ring-2 text-amber-950">
//                                     <option>13 October 2024</option>
//                                     <option>14 October 2024</option>
//                                     <option>15 October 2024</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-1">Check Out</label>
//                                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                                     <option>14 October 2024</option>
//                                     <option>15 October 2024</option>
//                                     <option>16 October 2024</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-1">Adults</label>
//                                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                                     <option>1</option>
//                                     <option>2</option>
//                                     <option>3</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-gray-600 mb-1">Children</label>
//                                 <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
//                                     <option>1</option>
//                                     <option>2</option>
//                                     <option>3</option>
//                                 </select>
//                             </div>


//                             <Button className="custom-button3 w-full ">Check Availability</Button>
//                         </form>
//                     </div>


//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;








import React, { useState } from "react";
import bg from "../Assests/bg2.jpg";
// import logo from "../Assests/logo.png";
// import icon1 from "../Assests/whatsapp.png";
import { DatePicker, Button } from "antd";
import frame from "../Assests/frame.png"
import "../Header/Style2.css";


function Navbar() {
    // State for mobile menu visibility
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    // const toggleMenu = () => {
    //     setIsMobileMenuOpen(!isMobileMenuOpen);
    // };

    return (
        <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container mx-auto w-full max-w-[1280px]   md:pt-52">


                {/* <div className="relative">

                    <div className=" hidden absolute top-0 right-0 py-2 px-4 md:px-6 md:flex items-center space-x-4">
                        <a
                            href="https://wa.me/+909876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                        >
                            <img src={icon1} alt="WhatsApp" className="h-6" />
                            <span className="text-black">+90-9876543210</span>
                        </a>
                        <span className="text-gray-500">/</span>
                        <span className="text-black">+91-0123456789</span>
                    </div>

                    
                    <div className=" bg-white md:bg-transparent flex items-center justify-between py-4 px-6">
                     
                        <div className="flex items-center space-x-2">
                            <img src={logo} className="h-16 md:h-28" alt="Logo" />
                        </div>

                        
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-black hover:text-red-800">
                                HOME
                            </a>
                            <a href="#about" className="text-black hover:text-red-800">
                                ABOUT
                            </a>
                            <a href="#rooms" className="text-black hover:text-red-800">
                                ROOMS
                            </a>
                            <a href="#hotel" className="text-black hover:text-red-800">
                                HOTEL
                            </a>
                            <a href="#pages" className="text-black hover:text-red-800">
                                PAGES
                            </a>
                            <a href="#contact" className="text-black hover:text-red-800">
                                CONTACT US
                            </a>
                        </nav>

                        
                        <button
                            className="md:hidden text-gray-700 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>





                
                {isMobileMenuOpen && (
                    <>
                        
                        <div
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                        ></div>

                       
                        <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300">
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={toggleMenu}
                                    className="text-gray-800 hover:text-red-600 text-3xl font-bold"
                                >
                                    &times;
                                </button>
                            </div>
                            <nav>
                                <a
                                    href="#home"
                                    className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
                                >
                                    Home
                                </a>
                                <a
                                    href="#about"
                                    className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
                                >
                                    About
                                </a>
                                <a
                                    href="#rooms"
                                    className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
                                >
                                    Rooms
                                </a>
                                <a
                                    href="#hotel"
                                    className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
                                >
                                    Hotel
                                </a>
                                <a
                                    href="#pages"
                                    className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
                                >
                                    Pages
                                </a>
                                <a
                                    href="#contact"
                                    className="block px-6 py-4 text-gray-800 hover:bg-amber-800 hover:text-white"
                                >
                                    Contact Us
                                </a>
                            </nav>
                        </div>
                    </>
                )} */}


                {/* Hero Section */}
                <div className="flex flex-wrap p-6">
                    <div className="w-full md:w-3/5 font-normal mt-auto mb-auto pt-4 pb-5">
                        <span className="text-lg font-forum text-amber-800">M A J E S T I C R O O M S</span>
                        <h1 className="font-forum text-[40px]  md:text-[60px] leading-[37px] md:leading-[70px] text-gray-800">
                            Discover Your Paradise <br />
                            Where You Are
                        </h1>
                        <p className=" hidden md:block font-forum text-amber-950 mt-4 pr-6">
                            Sed imperdiet dignissim odio dignissim bibendum. Praesent porttitor
                            tristique velit efficitur, a pulvinar sem hasellus.
                        </p>

                        <Button className="custom-button2 hidden md:block mt-4 mr-5 text-lg font-forum bg-customBrown mb-4">
                            Explore Now
                        </Button>
                    </div>

                    {/* Availability Form */}
                    {/* <div className="w-full md:w-2/5 bg-white shadow-md p-7 border border-gray-200">
                        <form style={{ backgroundImage: `url(${frame})` }} className="bg-cover bg-no-repeat space-y-4 p-6">
                            <h2 className="text-xl font-Fraunces text-gray-800 text-center">
                                Check Availability
                            </h2>
                            <div>
                                <label className="block text-amber-950 mb-1">Check In</label>
                                <select className="w-full px-4 py-2 focus:outline-none focus:ring-2 text-amber-950">
                                    <option>13 October 2024</option>
                                    <option>14 October 2024</option>
                                    <option>15 October 2024</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-1">Check Out</label>
                                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <option>14 October 2024</option>
                                    <option>15 October 2024</option>
                                    <option>16 October 2024</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-1">Adults</label>
                                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-1">Children</label>
                                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <Button className="custom-button3 w-full">Check Availability</Button>
                        </form>
                    </div> */}

                    {/* <div className="w-full md:w-2/5 bg-white shadow-md p-7 border border-gray-200">
                        <form
                            className="bg-cover bg-no-repeat   md:space-y-4 md:p-6 border md:border-none md:"
                            style={{ backgroundImage: `url(${frame})` }}
                        >
                            <h2 className="text-xl font-Fraunces text-gray-800 text-center">
                                Check Availability
                            </h2>
                            <div>
                                <label className="block text-amber-950 mb-1">Check In</label>
                                <select className="w-full px-4 py-2 focus:outline-none focus:ring-2 text-amber-950">
                                    <option>13 October 2024</option>
                                    <option>14 October 2024</option>
                                    <option>15 October 2024</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-1">Check Out</label>
                                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <option>14 October 2024</option>
                                    <option>15 October 2024</option>
                                    <option>16 October 2024</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-1">Adults</label>
                                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-600 mb-1">Children</label>
                                <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <Button className="custom-button3 w-full">Check Availability</Button>
                        </form>
                    </div> */}



                    <div className="w-full md:w-2/5 bg-white shadow-md p-7 border border-gray-200">
                        <form
                            className="md:space-y-4 md:p-6 border md:border-none bg-transparent bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url(${frame})`, // Add your background image
                                backgroundPosition: 'center, left top', // First image centered, second image top-left
                                backgroundSize: 'cover', // First image covers, second image half width & full height
                                backgroundRepeat: 'no-repeat, no-repeat', // Prevent repeating for both
                            }}
                            hidden={window.innerWidth < 768} // Hide on small screens
                        >
                            {/* Form content here */}
                        

                        {/* <form
                            className={`md:bg-cover md:bg-no-repeat hidden md:space-y-4 md:p-6 border md:border-none bg-transparent`}
                            style={{
                                backgroundImage: window.innerWidth >= 768 ? `url(${frame})` : "none",
                            }}
                        > */}
                        <h2 className="text-xl font-forum text-gray-800 text-center mb-4">
                            Check Availability
                        </h2>

                        {/* Check In */}
                        <div>
                            <label className="block text-amber-950 mb-1 font-forum ml-4 md:ml-0">Check In</label>
                            <DatePicker
                                placeholder="Select Check In Date"
                                className="w-5/6 ml-6 md:w-full md:ml-0 items-center border rounded-md"
                                format="DD MMMM YYYY"
                            />
                        </div>

                        {/* Check Out */}
                        <div>
                            <label className="block text-gray-600 mb-1 font-forum ml-4 md:ml-0">Check Out</label>
                            <DatePicker
                                placeholder="Select Check Out Date"
                                className="w-5/6 ml-6 md:w-full md:ml-0 border rounded-md"
                                format="DD MMMM YYYY"
                            />
                        </div>

                        {/* Adults */}
                        <div>
                            <label className="block text-gray-600 mb-1 font-forum ml-4 md:ml-0">Adults</label>
                            <select className="w-5/6 ml-6 md:w-full md:ml-0 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>

                        {/* Children */}
                        <div>
                            <label className="block text-gray-600 mb-1 font-forum ml-4 md:ml-0">Children</label>
                            <select className="w-5/6 ml-6 md:w-full md:ml-0 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="primary"
                            htmlType="submit"
                            className=" custom-button3 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md"
                        >
                            Check Availability
                        </Button>
                    </form>
                </div>





            </div>
        </div >
        </div >


    );
}

export default Navbar;


