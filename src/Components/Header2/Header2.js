// import React, { useState } from 'react';
// import logo from "../Assests/logo.png";
// import icon1 from "../Assests/whatsapp.png";
// import bg from "../Assests/bg2.jpg";




// function Header2() {


//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Toggle mobile menu
//     const toggleMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (


//             <div className="container mx-auto w-full max-w-[1280px] md:bg-transparent   ">
//                 <div className="">

//                     <div className=" hidden absolute top-0 right-0 py-2 px-4 md:px-6 md:flex items-center space-x-4">
//                         <a
//                             href="https://wa.me/+909876543210"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center space-x-2"
//                         >
//                             <img src={icon1} alt="WhatsApp" className="h-6" />
//                             <span className="text-black">+90-9876543210</span>
//                         </a>
//                         <span className="text-gray-500">/</span>
//                         <span className="text-black">+91-0123456789</span>
//                     </div>

//                     {/* Main Navbar */}
//                     <div className=" bg-white md:bg-transparent flex items-center justify-between py-4 px-6">
//                         {/* Logo */}
//                         <div className=" relative flex items-center space-x-2">
//                             <img src={logo} className="h-16 md:h-28" alt="Logo" />
//                         </div>

//                         {/* Desktop Navigation */}
//                         <nav className="hidden md:flex items-center space-x-8">
//                             <a href="#home" className="text-black hover:text-red-800">
//                                 HOME
//                             </a>
//                             <a href="#about" className="text-black hover:text-red-800">
//                                 ABOUT
//                             </a>
//                             <a href="#rooms" className="text-black hover:text-red-800">
//                                 ROOMS
//                             </a>
//                             <a href="#hotel" className="text-black hover:text-red-800">
//                                 HOTEL
//                             </a>
//                             <a href="#pages" className="text-black hover:text-red-800">
//                                 PAGES
//                             </a>
//                             <a href="#contact" className="text-black hover:text-red-800">
//                                 CONTACT US
//                             </a>
//                         </nav>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="md:hidden text-gray-700 focus:outline-none"
//                             onClick={toggleMenu}
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={1.5}
//                                 stroke="currentColor"
//                                 className="w-6 h-6"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
//                                 />
//                             </svg>
//                         </button>
//                     </div>






//                     {/* Mobile Menu */}
//                     {isMobileMenuOpen && (
//                         <>
//                             {/* Overlay */}
//                             <div
//                                 onClick={toggleMenu}
//                                 className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
//                             ></div>

//                             {/* Slide-in Menu */}
//                             <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300">
//                                 <div className="flex justify-end p-4">
//                                     <button
//                                         onClick={toggleMenu}
//                                         className="text-gray-800 hover:text-red-600 text-3xl font-bold"
//                                     >
//                                         &times;
//                                     </button>
//                                 </div>
//                                 <nav>
//                                     <a
//                                         href="#home"
//                                         className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                     >
//                                         Home
//                                     </a>
//                                     <a
//                                         href="#about"
//                                         className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                     >
//                                         About
//                                     </a>
//                                     <a
//                                         href="#rooms"
//                                         className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                     >
//                                         Rooms
//                                     </a>
//                                     <a
//                                         href="#hotel"
//                                         className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                     >
//                                         Hotel
//                                     </a>
//                                     <a
//                                         href="#pages"
//                                         className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                                     >
//                                         Pages
//                                     </a>
//                                     <a
//                                         href="#contact"
//                                         className="block px-6 py-4 text-gray-800 hover:bg-amber-800 hover:text-white"
//                                     >
//                                         Contact Us
//                                     </a>
//                                 </nav>
//                             </div>
//                         </>
//                     )}

//                 </div>

//             </div>


//     )
// }

// export default Header2


// import React, { useState, useEffect } from "react";
// import logo from "../Assests/logo.png";
// import icon1 from "../Assests/whatsapp.png";

// function Header2() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);

//     // Toggle mobile menu
//     const toggleMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     // Handle scroll to toggle sticky header
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 500) {
//                 setIsSticky(true);
//             } else {
//                 setIsSticky(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <div
//             className={`z-20 ${isSticky
//                     ? "sticky top-0 bg-white backdrop-blur-lg shadow-md"
//                     : ""
//                 }`}
//         >

//             <div className="w-full absolute z-20  ">
//                 {/* Top Contact Bar */}
//                 {/* <div className="hidden absolute top-0 right-0 py-2 px-4 md:px-6 md:flex items-center space-x-4">
//                     <a
//                         href="https://wa.me/+909876543210"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center space-x-2"
//                     >
//                         <img src={icon1} alt="WhatsApp" className="h-6" />
//                         <span className="text-black">+90-9876543210</span>
//                     </a>
//                     <span className="text-gray-500">/</span>
//                     <span className="text-black">+91-0123456789</span>
//                 </div> */}

//                 {/* Main Navbar */}
//                 <div className="container  mx-auto w-full max-w-[1280px] flex items-center justify-between py-4 px-6">
//                     {/* Logo */}
//                     <div className="relative flex items-center space-x-2">
//                         <img src={logo} className="h-16 md:h-28" alt="Logo" />
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div>
//                         <div className="hidden absolute top-0 right-0 py-2 px-4 md:px-6 md:flex items-center space-x-4">
//                             <a
//                                 href="https://wa.me/+909876543210"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="flex items-center space-x-2"
//                             >
//                                 <img src={icon1} alt="WhatsApp" className="h-6" />
//                                 <span className="text-black">+90-9876543210</span>
//                             </a>
//                             <span className="text-gray-500">/</span>
//                             <span className="text-black">+91-0123456789</span>
//                         </div>
//                         <nav className="hidden md:flex items-center space-x-8">
//                             <a href="#home" className="text-black hover:text-red-800">
//                                 HOME
//                             </a>
//                             <a href="#about" className="text-black hover:text-red-800">
//                                 ABOUT
//                             </a>
//                             <a href="#rooms" className="text-black hover:text-red-800">
//                                 ROOMS
//                             </a>
//                             <a href="#hotel" className="text-black hover:text-red-800">
//                                 HOTEL
//                             </a>
//                             <a href="#pages" className="text-black hover:text-red-800">
//                                 PAGES
//                             </a>
//                             <a href="#contact" className="text-black hover:text-red-800">
//                                 CONTACT US
//                             </a>
//                         </nav>

//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="md:hidden text-gray-700 focus:outline-none"
//                         onClick={toggleMenu}
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

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <>
//                         {/* Overlay */}
//                         <div
//                             onClick={toggleMenu}
//                             className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
//                         ></div>

//                         {/* Slide-in Menu */}
//                         <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300">
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
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Header2;

// import React, { useState, useEffect } from "react";
// import logo from "../Assests/logo.png";
// import icon1 from "../Assests/whatsapp.png";

// function Header2() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Listen for scroll events to toggle sticky class
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 200);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`container mx-auto w-full max-w-[1280px]  ${
//         isSticky ? "sticky top-0 bg-white" : "relative"
//       }`}
//     >
//       <div className="relative">
//         {/* Contact Info */}
//         <div className="hidden absolute top-0 right-0 py-2 px-4 md:px-6 md:flex items-center space-x-4">
//           <a
//             href="https://wa.me/+909876543210"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center space-x-2"
//           >
//             <img src={icon1} alt="WhatsApp" className="h-6" />
//             <span className="text-black">+90-9876543210</span>
//           </a>
//           <span className="text-gray-500">/</span>
//           <span className="text-black">+91-0123456789</span>
//         </div>

//         {/* Main Navbar */}
//         <div className="flex items-center justify-between py-4 px-6">
//           {/* Logo */}
//           <div className="relative flex items-center space-x-2">
//             <img src={logo} className="h-16 md:h-28" alt="Logo" />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#home" className="text-black hover:text-red-800">
//               HOME
//             </a>
//             <a href="#about" className="text-black hover:text-red-800">
//               ABOUT
//             </a>
//             <a href="#rooms" className="text-black hover:text-red-800">
//               ROOMS
//             </a>
//             <a href="#hotel" className="text-black hover:text-red-800">
//               HOTEL
//             </a>
//             <a href="#pages" className="text-black hover:text-red-800">
//               PAGES
//             </a>
//             <a href="#contact" className="text-black hover:text-red-800">
//               CONTACT US
//             </a>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-700 focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <>
//             {/* Overlay */}
//             <div
//               onClick={toggleMenu}
//               className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
//             ></div>

//             {/* Slide-in Menu */}
//             <div className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300">
//               <div className="flex justify-end p-4">
//                 <button
//                   onClick={toggleMenu}
//                   className="text-gray-800 hover:text-red-600 text-3xl font-bold"
//                 >
//                   &times;
//                 </button>
//               </div>
//               <nav>
//                 <a
//                   href="#home"
//                   className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="#about"
//                   className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                 >
//                   About
//                 </a>
//                 <a
//                   href="#rooms"
//                   className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                 >
//                   Rooms
//                 </a>
//                 <a
//                   href="#hotel"
//                   className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                 >
//                   Hotel
//                 </a>
//                 <a
//                   href="#pages"
//                   className="block px-6 py-4 border-b text-gray-800 hover:bg-amber-800 hover:text-white"
//                 >
//                   Pages
//                 </a>
//                 <a
//                   href="#contact"
//                   className="block px-6 py-4 text-gray-800 hover:bg-amber-800 hover:text-white"
//                 >
//                   Contact Us
//                 </a>
//               </nav>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header2;

import React, { useState, useEffect } from "react";
import logo from "../Assests/logo.png";
import icon1 from "../Assests/whatsapp.png";

function Header2() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`z-20 ${isSticky
                ? "sticky top-0 bg-white/30 backdrop-blur-md shadow-md "
                : "w-full absolute z-20 bg-white/30 backdrop-blur-md shadow-md "
                }`}
        >
            <div className="w-full h-28 z-20">

              

                <div className="container mx-auto w-full max-w-[1280px] flex items-center justify-between py-4 px-6">
                      <div className="hidden absolute top-0 right-28 py-2 px-4 md:px-6 md:flex items-center space-x-4">
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
                    <div className="relative flex items-center space-x-2">
                        <img src={logo} className="h-16 md:h-20" alt="Logo" />
                    </div>
                    <div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-black hover:text-red-800">HOME</a>
                            <a href="#about" className="text-black hover:text-red-800">ABOUT</a>
                            <a href="#rooms" className="text-black hover:text-red-800">ROOMS</a>
                            <a href="#hotel" className="text-black hover:text-red-800">HOTEL</a>
                            <a href="#pages" className="text-black hover:text-red-800">PAGES</a>
                            <a href="#contact" className="text-black hover:text-red-800">CONTACT US</a>
                        </nav>
                    </div>
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
                )}
            </div>
        </div>
    );
}

export default Header2;



