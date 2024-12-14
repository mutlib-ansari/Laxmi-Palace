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
//                         <span className="text-lg font-serif text-amber-800">M A J E S T I C  R O O M S</span>
//                         <h1 className="font-serif text-[60px] leading-[70px]  text-gray-800s  ">
//                             Discover Your Paradise  <br />
//                             Where You Are
//                         </h1>
//                         <p className="font-serif text-amber-950 mt-4">
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
//             <span className="text-sm md:text-lg font-serif text-amber-800">
//               MAJESTIC ROOMS
//             </span>
//             <h1 className="font-serif text-[40px] md:text-[60px] leading-[50px] md:leading-[70px] text-gray-800 mt-4">
//               Discover Your Paradise <br />
//               Where You Are
//             </h1>
//             <p className="font-serif text-amber-950 mt-4 text-sm md:text-base">
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

import React, { useState } from "react";
import bg from "../Assests/bg2.jpg";
import logo from "../Assests/logo.png";
import frame from "../Assests/frame.png";
import icon1 from "../Assests/whatsapp.png";
import { Button } from 'antd';
import '../Header/Style2.css'

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container mx-auto w-full max-w-[1280px]">
                <div className="flex items-center justify-between py-4 px-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src={logo} className="h-16 md:h-28 " alt="Logo" />
                    </div>


                    <div className="hidden  md:flex items-center space-x-4">

                        <div className="flex space-x-4 items-center">
                            <a
                                href="https://wa.me/+909876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex space-x-2 items-center"
                            >
                                <img src={icon1} alt="WhatsApp" className="h-6" />
                                <span>+90-9876543210</span>
                            </a>
                            <span className="text-gray-500">/</span>
                            <span>+91-0123456789</span>
                        </div>


                        {/* Navigation Links */}
                        <nav className="flex space-x-8">
                            <a href="#home" className="text-black hover:text-red-800">HOME</a>
                            <a href="#about" className="text-black hover:text-red-800">ABOUT</a>
                            <a href="#rooms" className="text-black hover:text-red-800">ROOMS</a>
                            <a href="#hotel" className="text-black hover:text-red-800">HOTEL</a>
                            <a href="#pages" className="text-black hover:text-red-800">PAGES</a>
                            <a href="#contact" className="text-black hover:text-red-800">CONTACT US</a>
                        </nav>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
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

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">
                        <a href="#home" className="text-black hover:text-red-800">HOME</a>
                        <a href="#about" className="text-black hover:text-red-800">ABOUT</a>
                        <a href="#rooms" className="text-black hover:text-red-800">ROOMS</a>
                        <a href="#hotel" className="text-black hover:text-red-800">HOTEL</a>
                        <a href="#pages" className="text-black hover:text-red-800">PAGES</a>
                        <a href="#contact" className="text-black hover:text-red-800">CONTACT US</a>
                    </div>
                )}


                <div className="flex flex-wrap p-6">

                    <div className="w-full md:w-3/5 p-6 font-normal mt-auto mb-auto">
                        <span className="text-lg font-serif text-amber-800">M A J E S T I C R O O M S</span>
                        <h1 className="font-serif text-[32px] md:text-[60px] leading-[50px] md:leading-[70px] text-gray-800">
                            Discover Your Paradise <br />
                            Where You Are
                        </h1>
                        <p className="font-serif text-amber-950 mt-4">
                            Sed imperdiet dignissim odio dignissim bibendum. Praesent porttitor
                            tristique velit efficitur, a pulvinar sem hasellus.
                        </p>

                        <Button className="custom-button2 mt-4 mr-5 text-lg font-serif bg-customBrown">Explore Now</Button>

                    </div>


                     <div className="w-full md:w-2/5 bg-white shadow-md p-7 border border-gray-200">
                        <form style={{ backgroundImage: `url(${frame})` }} className="bg-cover bg-no-repeat  space-y-4 p-6">
                            <h2 className="text-xl font-Fraunces text-gray-800 text-center">Check Availability</h2>
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
                           

                            <Button className="custom-button3 w-full ">Check Availability</Button>
                        </form>
                    </div> 


                </div>
            </div>
        </div>
    );
}

export default Navbar;
