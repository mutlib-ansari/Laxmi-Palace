// import React from 'react'
// import bg from '../Assests/Mask.png'
// import home1 from '../Assests/home1.png'
// import home2 from '../Assests/home2.png'
// import home3 from '../Assests/home3.png'
// import frame2 from '../Assests/frame2.png'

// function Dasbord() {
//     return (
//         <div className='bg-customBeige '>
//         <div  className=' container mx-auto w-full max-w-[1280px] '>
//             <div style={{ backgroundImage: `url(${bg})` }} className=' bg-cover  bg-transparent w-full text-center p-10'>
//                 <span className='text-lg font-forum text-amber-800'>DIVINE-ELITE</span>
//                 <h2 className='font-forum text-[60px] leading-[70px]  text-gray-800s '>Choose Your Room</h2>
//                 <p className='font-forum text-amber-950 mt-4 text-center mx-40 '>Etiam ultrices aliquet dui. Nulla cursus fringilla nibh. Aliquam at leo accumsan, pulvinar ipsum porta, tristique velit. Morbi finibus nunc in eleifend hendrerit.</p>
//                 </div>

//                 <div >
//                     <ul className='flex justify-evenly'>
//                         <li className='flex '>
//                        <span className='p-3 font-forum text-[30px] leading-[20px]  text-gray-800s'>Royal Room</span> 
//                         <img src={home3} 
//                         className='h-12'/>
//                         </li>
//                         <li className='flex'>
//                         <span className='p-3 font-forum text-[30px] leading-[20px]  text-gray-800s'>Family Room</span> 
//                         <img src={home1} 
//                         className='h-12'/>
//                         </li>
//                         <li className='flex'>
//                         <span className='p-3 font-forum text-[30px] leading-[20px]  text-gray-800s'>Family Suite</span> 
//                         <img src={home2} 
//                         className='h-12'/>
//                         </li>
//                     </ul>

//                 </div>

//                 <div className=' flex justify-center mt-16'>
//                     <img src={frame2}
//                     className='rounded-3xl h-80'
//                     />


//                 </div>



//         </div>
//         </div>

//     )
// }

// export default Dasbord


// import React from 'react';
// import bg from '../Assests/Mask.png';
// import home1 from '../Assests/home1.png';
// import home2 from '../Assests/home2.png';
// import home3 from '../Assests/home3.png';
// import frame2 from '../Assests/frame4.png';

// function Dasbord() {
//     return (
//         <div className="bg-customBeige">
//             <div className="container mx-auto w-full max-w-[1280px] px-4">
//                 {/* Header Section */}
//                 <div
//                     style={{ backgroundImage: `url(${bg})` }}
//                     className="bg-cover bg-transparent w-full text-center p-6 sm:p-10"
//                 >
//                     <span className="text-lg font-forum text-amber-800">DIVINE-ELITE</span>
//                     <h2 className="font-forum text-3xl sm:text-[60px] sm:leading-[70px] text-gray-800">
//                         Choose Your Room
//                     </h2>
//                     <p className="font-forum text-sm sm:text-lg text-amber-950 mt-4 text-center mx-auto max-w-[600px]">
//                         Etiam ultrices aliquet dui. Nulla cursus fringilla nibh. Aliquam at leo accumsan, pulvinar ipsum
//                         porta, tristique velit. Morbi finibus nunc in eleifend hendrerit.
//                     </p>
//                 </div>

//                 {/* Room Options */}
//                 <div>
//                     <ul className="flex flex-wrap justify-evenly gap-4 sm:gap-8 mt-6">
//                         <li className="flex items-center">
//                             <span className="p-3 font-forum text-lg sm:text-[30px] text-gray-800">Royal Room</span>
//                             <img src={home3} alt="Royal Room" className="h-12" />
//                         </li>
//                         <li className="flex items-center">
//                             <span className="p-3 font-forum text-lg sm:text-[30px] text-gray-800">Family Room</span>
//                             <img src={home1} alt="Family Room" className="h-12" />
//                         </li>
//                         <li className="flex items-center">
//                             <span className="p-3 font-forum text-lg sm:text-[30px] text-gray-800">Family Suite</span>
//                             <img src={home2} alt="Family Suite" className="h-12" />
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Image Section */}
//                 {/* <div className="flex justify-center mt-10 sm:mt-16 w-full mb-5">
//                     <img src={frame2} alt="Frame" className="rounded-3xl h-full  max-w-md sm:max-w-[64rem] " />
//                 </div> */}


// <div className="flex justify-center mt-10 sm:mt-16 w-full mb-5 px-4">
//   <img
//     src={frame2}
//     alt="Frame"
//     className="rounded-3xl h-auto max-w-full sm:max-w-[64rem] object-cover"
//   />
// </div>



//             </div>
//         </div>
//     );
// }

// export default Dasbord;





// import React, { useState } from 'react';
// import img1 from '../Assests/img1.png'
// import img2 from '../Assests/img2.png'

// function ImageTabs() {
//     // Set the default selected tab as 'tab1'
//     const [selectedTab, setSelectedTab] = useState('tab1');

//     // Define the images for each tab
//     const images = {
//         tab1: [img1],
//         tab2: [img2],
//     };

//     return (
//         <div className="container mx-auto p-6">
//             {/* Tabs Section */}
//             <div className="flex space-x-4 mb-6">
//                 {/* Tab 1 */}
//                 <button
//                     onClick={() => setSelectedTab('tab1')}
//                     className={`px-4 py-2 rounded-md font-semibold ${selectedTab === 'tab1' ? 'bg-blue-600 text-white' : 'bg-gray-200'
//                         }`}
//                 >
//                     Tab 1
//                 </button>

//                 {/* Tab 2 */}
//                 <button
//                     onClick={() => setSelectedTab('tab2')}
//                     className={`px-4 py-2 rounded-md font-semibold ${selectedTab === 'tab2' ? 'bg-blue-600 text-white' : 'bg-gray-200'
//                         }`}
//                 >
//                     Tab 2
//                 </button>
//             </div>

//             {/* Image Section */}
//             <div className="flex justify-center">
//                 <img
//                     src={images[selectedTab]} // Dynamically select the image based on the selected tab
//                     alt={`Image for ${selectedTab}`}
//                     className="rounded-lg shadow-lg"
//                 />
//             </div>
//         </div>
//     );
// }

// export default ImageTabs;




// import React, { useState } from 'react';
// import bg from '../Assests/Mask.png';
// import home1 from '../Assests/home1.png';
// import home2 from '../Assests/home2.png';

// import home3 from '../Assests/home3.png';
// import frame2 from '../Assests/frame4.png';
// import tap2 from '../Assests/tap2.png'
// import tap3 from '../Assests/tap3.png'


// function Dasbord() {

//     const [selectedTab, setSelectedTab] = useState('tab1');

//     // Define the images for each tab
//     const images = {
//         tab1: [frame2],
//         tab2: [tap2],
//         tab3: [tap3],
//     };
//     // const content = {
//     //     tab1: 'Content for Tab 1. This could be text, links, or any other HTML elements.',
//     //     tab2: 'Content for Tab 2. This is a description for the second tab.',
//     //     tab3: <h1 className='font-'>kjvnsdjdsnfjkpjrie123</h1>,
//     // };


//     return (
//         <div className="bg-customBeige">
//             <div className="container mx-auto w-full max-w-[1280px] px-4">
//                 {/* Header Section */}
//                 <div
//                     style={{ backgroundImage: `url(${bg})` }}
//                     className="bg-cover bg-transparent w-full text-center p-6 sm:p-10"
//                 >
//                     <span className="text-lg font-forum text-amber-800">DIVINE-ELITE</span>
//                     <h2 className="font-forum text-3xl sm:text-[60px] sm:leading-[70px] text-gray-800">
//                         Choose Your Room
//                     </h2>
//                     <p className="font-forum text-sm sm:text-lg text-amber-950 mt-4 text-center mx-auto max-w-[600px]">
//                         Etiam ultrices aliquet dui. Nulla cursus fringilla nibh. Aliquam at leo accumsan, pulvinar ipsum
//                         porta, tristique velit. Morbi finibus nunc in eleifend hendrerit.
//                     </p>
//                 </div>

//                 {/* Room Options */}
//                 <div>
//                     <ul className="flex flex-wrap justify-evenly gap-4 sm:gap-8 mt-6">
//                         <li className="flex items-center">
//                             <span className="p-3 font-forum text-lg sm:text-[30px] text-gray-800">Royal Room</span>
//                              <img onClick={() => setSelectedTab('tab1')} src={home3} alt="Royal Room" className={`h-12   ${selectedTab === 'tab1'}`} />

//                         </li>
//                         <li className="flex items-center">
//                             <span className="p-3 font-forum text-lg sm:text-[30px] text-gray-800">Family Room</span>
//                             <img onClick={() => setSelectedTab('tab2')} src={home1} alt="Royal Room" className={`h-12  ${selectedTab === 'tab2'}`} />
//                         </li>
//                         <li className="flex items-center">
//                             <span className="p-3 font-forum text-lg sm:text-[30px] text-gray-800">Family Suite</span>
//                             <img onClick={() => setSelectedTab('tab3')} src={home2} alt="Royal Room" className={`h-12  ${selectedTab === 'tab3'}`} />
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Image Section */}
//                 {/* <div className="flex justify-center mt-10 sm:mt-16 w-full mb-5">
//                     <img src={frame2} alt="Frame" className="rounded-3xl h-full  max-w-md sm:max-w-[64rem] " />
//                 </div> */}


//                 {/* <div className="flex justify-center mt-10 sm:mt-16 w-full mb-5 px-4">
//                     <img
//                         src={images[selectedTab]} // Dynamically select the image based on the selected tab
//                         alt={`Image for ${selectedTab}`}
//                         className="rounded-3xl h-auto max-w-full sm:max-w-[64rem] object-cover"
//                     />
//                 </div> */}


//                 <div className="flex justify-center md: mt-10">
//                     {/* Left Side - Image */}
//                     <div className="w-full md:ml-24">
//                         <img
//                             src={images[selectedTab]} // Dynamically select the image based on the selected tab
//                             alt={`Image for ${selectedTab}`}
//                             className="h-full rounded-lg shadow-lg"
//                         />
//                     </div>

//                     {/* Right Side - Content */}
//                     {/* <div className="w-1/2 pl-6">
//                         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                             {` ${selectedTab}`}
//                         </h2>
//                         <p className="text-gray-700">  fhsxgxfhf{content[selectedTab]}</p>
//                     </div> */}
//                 </div>



//             </div>
//         </div>
//     );
// }

// export default Dasbord;




// import React, { useState } from 'react';
// import bg from '../Assests/Mask.png';
// import home1 from '../Assests/home1.png';
// import home2 from '../Assests/home2.png';
// import home3 from '../Assests/home3.png';
// import frame2 from '../Assests/frame4.png';
// import tap2 from '../Assests/tap2.png';
// import tap3 from '../Assests/tap3.png';

// function Dasbord() {
//   const [selectedTab, setSelectedTab] = useState('tab1');

//   // Define the images for each tab
//   const images = {
//     tab1: frame2,
//     tab2: tap2,
//     tab3: tap3,
//   };

//   return (
//     <div className="bg-customBeige">
//       <div className="container mx-auto w-full max-w-[1280px] px-4">
//         {/* Header Section */}
//         <div
//           style={{ backgroundImage: `url(${bg})` }}
//           className="bg-cover bg-transparent w-full text-center p-6 sm:p-10"
//         >
//           <span className="text-lg font-forum text-amber-800">DIVINE-ELITE</span>
//           <h2 className="font-forum text-3xl sm:text-[60px] sm:leading-[70px] text-gray-800">
//             Choose Your Room
//           </h2>
//           <p className="font-forum text-sm sm:text-lg text-amber-950 mt-4 text-center mx-auto max-w-[600px]">
//             Etiam ultrices aliquet dui. Nulla cursus fringilla nibh. Aliquam at leo accumsan, pulvinar
//             ipsum porta, tristique velit. Morbi finibus nunc in eleifend hendrerit.
//           </p>
//         </div>

//         {/* Room Options */}
//         <div>
//           <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-6">
//             {/* Tab 1 */}
//             <li
//               className={`flex items-center cursor-pointer ${
//                 selectedTab === 'tab1' ? '' : ''
//               }`}
//               onClick={() => setSelectedTab('tab1')}
//             >
//               <img
//                 src={home3}
//                 alt="Royal Room"
//                 className="h-12 sm:h-16 object-cover"
//               />
//               <span className="p-3 font-forum text-lg sm:text-[30px] text-gray-800">Royal Room</span>
//             </li>

//             {/* Tab 2 */}
//             <li
//               className={`flex items-center cursor-pointer ${
//                 selectedTab === 'tab2' ? '' : ''
//               }`}
//               onClick={() => setSelectedTab('tab2')}
//             >
//               <img
//                 src={home1}
//                 alt="Family Room"
//                 className="h-12 sm:h-16 object-cover"
//               />
//               <span className="p-3 font-forum text-lg sm:text-[30px] text-gray-800">Family Room</span>
//             </li>

//             {/* Tab 3 */}
//             <li
//               className={`flex items-center cursor-pointer ${
//                 selectedTab === 'tab3' ? '' : ''
//               }`}
//               onClick={() => setSelectedTab('tab3')}
//             >
//               <img
//                 src={home2}
//                 alt="Family Suite"
//                 className="h-12 sm:h-16 object-cover"
//               />
//               <span className="p-3 font-forum text-lg sm:text-[30px] text-gray-800">Family Suite</span>
//             </li>
//           </ul>
//         </div>

//         {/* Image and Content Section */}
//         <div className="flex justify-center mt-10">
//           {/* Image Section */}
//           <div className="w-full md:w-full flex justify-center">
//             <img
//               src={images[selectedTab]}
//               alt={`Image for ${selectedTab}`}
//               className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-xl"
//             />
//           </div>

//           {/* Content Section */}
//           {/* <div className="w-full md:w-1/2 text-center md:text-left px-4">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               {selectedTab === 'tab1' && 'Royal Room Details'}
//               {selectedTab === 'tab2' && 'Family Room Details'}
//               {selectedTab === 'tab3' && 'Family Suite Details'}
//             </h2>
//             <p className="text-gray-700">
//               {selectedTab === 'tab1' &&
//                 'Experience luxury like never before in our Royal Room, equipped with all modern amenities.'}
//               {selectedTab === 'tab2' &&
//                 'Perfect for families, our Family Room offers comfort and space for all your loved ones.'}
//               {selectedTab === 'tab3' &&
//                 'Enjoy a luxurious stay in our Family Suite, featuring exquisite interiors and top-notch facilities.'}
//             </p>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dasbord;




// import React, { useState } from "react";
// import royalRoomImage from "../Assests/home1.png";
// import familyRoomImage from "../Assests/home2.png";
// import familySuiteImage from "../Assests/home3.png";
// import home1 from "../Assests/home1.png"
// import home2 from "../Assests/home2.png"
// import home3 from "../Assests/home3.png"

// function RoomSelector() {
//   const [selectedRoom, setSelectedRoom] = useState("royal");

//   // Room Data
//   const rooms = {
//     royal: {
//       title: "Luxury Room",
//       description:
//         "Aenean sed rutrum purus. Nunc nec magna lobortis, sodales blandit mauris et eros mattis dolor rutrum vivamus.",
//       amenities: ["Laundry", "Hd Tv", "Room Drinks", "Air Conditioned"],
//       image: royalRoomImage,
//     },
//     family: {
//       title: "Family Room",
//       description:
//         "Spacious and comfortable, the family room is perfect for families looking to relax and enjoy their stay.",
//       amenities: ["Laundry", "Hd Tv", "Kitchenette", "Free Wifi"],
//       image: familyRoomImage,
//     },
//     suite: {
//       title: "Family Suite",
//       description:
//         "Enjoy a luxurious experience with our family suites, designed for comfort and relaxation.",
//       amenities: ["Room Service", "Jacuzzi", "Hd Tv", "Mini Bar"],
//       image: familySuiteImage,
//     },
//   };

//   const currentRoom = rooms[selectedRoom];

//   return (
//     <div className="bg-[#fdf8ee]">
//       <div className="container mx-auto max-w-7xl px-6 py-10">
//         {/* Tabs */}
//         <div className="flex justify-center space-x-8 mb-6">
//           <button
//             onClick={() => setSelectedRoom("royal")}
//             className={`text-lg font-forum ${
//               selectedRoom === "royal"
//                 ? "text-amber-800 font-bold border-b-2 border-amber-800"
//                 : "text-gray-500"
//             }`}
//           >
//             <span className="flex">
//             <img src={home1}/>
//             <h4>Royal Room</h4>
//           </span>

//           </button>
//           <button

//             onClick={() => setSelectedRoom("family")}
//             className={`text-lg font-forum ${
//               selectedRoom === "family"
//                 ? "text-amber-800 font-bold border-b-2 border-amber-800"
//                 : "text-gray-500"
//             }`}
//           >
//             <span className="flex">
//             <img src={home2}/>
//             <h4>Family Room</h4>
//             </span>
//           </button>
//           <button
//             onClick={() => setSelectedRoom("suite")}
//             className={`text-lg font-forum ${
//               selectedRoom === "suite"
//                 ? "text-amber-800 font-bold border-b-2 border-amber-800"
//                 : "text-gray-500"
//             }`}
//           >
//             <span className="flex">
//             <img src={home3}/>
//             <h4>Family Suites</h4>
//             </span>
//           </button>
//         </div>

//         {/* Content */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Left Content */}
//           <div className="w-full md:w-1/2 p-6 bg-[#b8735d] rounded-lg text-white">
//             <h3 className="text-3xl font-semibold mb-4">{currentRoom.title}</h3>
//             <p className="mb-6">{currentRoom.description}</p>
//             <div className="grid grid-cols-2 gap-4">
//               {currentRoom.amenities.map((amenity, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <span></span>
//                   <span className="text-lg">{amenity}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src={currentRoom.image}
//               alt={currentRoom.title}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RoomSelector;



import React, { useState } from "react";
import { FaTv, FaCocktail, FaHotTub, FaConciergeBell, FaWifi, FaUtensils } from "react-icons/fa"; // Import icons
import royalRoomImage from "../Assests/room1.png";
import familyRoomImage from "../Assests/room2.png";
import familySuiteImage from "../Assests/room3.png";
import home1 from "../Assests/home1.png"
import home2 from "../Assests/home2.png"
import home3 from "../Assests/home3.png"
import { Button } from "antd";

function RoomSelector() {
    const [selectedRoom, setSelectedRoom] = useState("royal");

    // Room Data
    const rooms = {
        royal: {
            title: "Luxury Room",
            description:
                "Aenean sed rutrum purus. Nunc nec magna lobortis, sodales blandit mauris et eros mattis dolor rutrum vivamus.",
            amenities: [
                { name: "Laundry", icon: <FaConciergeBell /> },
                { name: "Hd Tv", icon: <FaTv /> },
                { name: "Room Drinks", icon: <FaCocktail /> },
                { name: "Air Conditioned", icon: <FaHotTub /> },
            ],
            image: royalRoomImage,
        },
        family: {
            title: "Family Room",
            description:
                "Spacious and comfortable, the family room is perfect for families looking to relax and enjoy their stay.",
            amenities: [
                { name: "Laundry", icon: <FaConciergeBell /> },
                { name: "Hd Tv", icon: <FaTv /> },
                { name: "Kitchenette", icon: <FaUtensils /> },
                { name: "Free Wifi", icon: <FaWifi /> },
            ],
            image: familyRoomImage,
        },
        suite: {
            title: "Family Suite",
            description:
                "Enjoy a luxurious experience with our family suites, designed for comfort and relaxation.",
            amenities: [
                { name: "Room Service", icon: <FaConciergeBell /> },
                { name: "Jacuzzi", icon: <FaHotTub /> },
                { name: "Hd Tv", icon: <FaTv /> },
                { name: "Mini Bar", icon: <FaCocktail /> },
            ],
            image: familySuiteImage,
        },
    };

    const currentRoom = rooms[selectedRoom];

    return (
        <div className="bg-[#fdf8ee]">
            <div className="container mx-auto max-w-7xl px-6 py-10">
                <div

                    className="bg-cover bg-transparent w-full text-center p-6 sm:p-10"
                >
                    <span className="text-lg font-forum text-amber-800">DIVINE-ELITE</span>
                    <h2 className="font-forum text-3xl sm:text-[60px] sm:leading-[70px] text-gray-800">
                        Choose Your Room
                    </h2>
                    <p className="font-forum text-sm sm:text-lg text-amber-950 mt-4 text-center mx-auto max-w-[600px]">
                        Etiam ultrices aliquet dui. Nulla cursus fringilla nibh. Aliquam at leo accumsan, pulvinar
                        ipsum porta, tristique velit. Morbi finibus nunc in eleifend hendrerit.
                    </p>
                </div>



                {/* Tabs */}
                <div className="flex justify-center md:space-x-5 space-x-5 mb-6">
                    <button
                        onClick={() => setSelectedRoom("royal")}
                        className={`text-lg font-forum ${selectedRoom === "royal"
                            ? "text-amber-800 font-bold  border-amber-800"
                            : "text-gray-500"
                            }`}
                    >
                        <span className="flex">
                            <img src={home1} className="h-12 hidden md:block " />
                            <h4 className="font-forum text-lg  md:text-3xl pt-1   ">Royal Room</h4>
                        </span>
                    </button>
                    <button
                        onClick={() => setSelectedRoom("family")}
                        className={`text-lg font-forum ${selectedRoom === "family"
                            ? "text-amber-800 font-bold  border-amber-800"
                            : "text-gray-500"
                            }`}
                    >
                        <span className="flex">
                            <img src={home2} className="h-12 hidden md:block " />
                            <h4 className="font-forum text-lg md:text-3xl pt-1  ">Family Room</h4>
                        </span>
                    </button>
                    <button
                        onClick={() => setSelectedRoom("suite")}
                        className={`text-lg font-forum ${selectedRoom === "suite"
                            ? "text-amber-800 font-bold  border-amber-800"
                            : "text-gray-500"
                            }`}
                    >
                        <span className="flex ">
                            <img src={home3} className="h-12 hidden md:block" />
                            <h4 className="font-forum text-lg md:text-3xl pt-1  ">Family Suites</h4>
                        </span>
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-end md:ml-40">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 p-6 bg-[#b8735d]  text-white order-last md:order-first">
                        <h3 className="text-3xl font-forum mb-4">{currentRoom.title}</h3>
                        <p className=" font-forum mb-6">{currentRoom.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                            {currentRoom.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-xl">{amenity.icon}</span>
                                    <span className="font-forum text-lg">{amenity.name}</span>
                                </div>
                            ))}
                            <Button className="custom-button md:p-2 text-sm sm:text-base md:text-lg font-forum">
                                Book Now
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2 order-first md:order-last  ">
                        <img
                            src={currentRoom.image}
                            alt={currentRoom.title}
                            className="md:h-[310px]  shadow-lg"
                        />
                    </div>

                </div>


            </div>
        </div>
    );
}

export default RoomSelector;




