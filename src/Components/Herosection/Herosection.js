// import React from 'react'
// import img1 from '../Assests/with-content-image1.png'
// import img2 from '../Assests/with-content-image2.png'
// import mid from '../Assests/mid-logo.png'
// import icon1 from '../Assests/icon1.png'
// import icon2 from '../Assests/icon2.png'
// import icon3 from '../Assests/icon3.png'
// import icon4 from '../Assests/icon4.png'
// import icon5 from '../Assests/icon5.png'
// import svg1 from '../Assests/SVG1.png'
// import svg2 from '../Assests/SVG2.png'
// import mask1 from '../Assests/m5.png'

// function Herosection() {
//   return (
//     <div style={{ backgroundImage: `url(${mask1})` }} className=' bg-left-bottom  bg-no-repeat' >
//       {/* <div style={{ backgroundImage: `url(${})` }}> */}
//       <div className='flex container mx-auto w-full max-w-[1280px]'>
//         <div className='w-1/2 flex relative mt-6'>
//           <img src={img1}
//             className='m-5 h-4/5 '

//           />
//           <img src={img2}
//             className='m-5 h-4/5 mt-20'

//           />

//           <img src={mid}
//             className='h-1/4 flex-none absolute left-60 bottom-60'

//           />
//         </div>

//         <div className='w-1/2 p-10'>
//           <div >
//             <span className="text-lg font-forum text-amber-800 mt-3" >COME.STAY.ENJOY</span>
//             <h1 className='font-forum text-[60px] leading-[70px]  text-gray-800s mt-3'>Find The Best Hotel</h1>
//             <p className='font-forum text-amber-950 mt-6'>Nunc nec magna laoreet, sodales nisi at, co rutrum viverra. Nunc nec magna aculis metus libero vehiculaNullam iaculis metus nehicula. Aenean sed rutrum purus.</p>
//           </div>

//           <div>
//             <h2 className=' font-forum text-[30px] leading-[70px]  text-gray-800s mt-3'> Best Hospitality Awards</h2>
//             <ul className='flex mt-3'>

//               <li className='mr-5'><img src={icon1} /></li>
//               <li className='mr-5'><img src={icon2} /></li>
//               <li className='mr-5'><img src={icon3} /></li>
//               <li className='mr-5'><img src={icon4} className='h-16' /></li>
//               <li className='mr-5'><img src={icon5} /></li>
//             </ul>
//           </div>


//           <div className='flex mt-6 relative'>
//             <div className='w-1/2 pr-14'>
//               <span className='flex'>
//                 <img src={svg1} className='h-2/4 pr-3' />
//                 <h4 className='font-forum text-[20px] leading-[30px]  text-gray-800s'  > Our Mission</h4>
//               </span>
//               <p className='font-forum text-amber-950 mt-3'>Aenean sed rutrum purus. Nunc nec magna laoreet, sodaleus bibens ivam.</p>

//             </div>


//             <div className='w-1/2 pr-14'>
//               <span className='flex'>
//                 <img src={svg2} className='h-2/4 pr-3' />
//                 <h4 className='font-forum text-[20px] leading-[30px]  text-gray-800s'> Our Mission</h4>
//               </span>
//               <p className='font-forum text-amber-950 mt-3'>Aenean sed rutrum purus. Nunc nec magna laoreet, sodaleus bibens ivam.</p>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>




//   )
// }

// export default Herosection







import React from "react";
import img1 from "../Assests/with-content-image1.png";
import img2 from "../Assests/with-content-image2.png";
import mid from "../Assests/mid-logo.png";
import icon1 from "../Assests/icon1.png";
import icon2 from "../Assests/icon2.png";
import icon3 from "../Assests/icon3.png";
import icon4 from "../Assests/icon4.png";
import icon5 from "../Assests/icon5.png";
import svg1 from "../Assests/SVG1.png";
import svg2 from "../Assests/SVG2.png";
import mask1 from "../Assests/m5.png";

function Herosection() {
  return (
    <div
      style={{ backgroundImage: `url(${mask1})` }}
      className="bg-left-bottom bg-no-repeat bg-cover py-10"
    >
      <div className="container mx-auto w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Left Section - Images */}
        {/* <div className="relative flex justify-center items-start flex-wrap gap-4 ">
          <img src={img1} className="w-2/3 sm:w-1/2 md:w-[45%] m-2" alt="Image 1" />
          <img
            src={img2}
            className="w-2/3 sm:w-1/2 md:w-[45%] m-2 mt-4 md:mt-10"
            alt="Image 2"
          />
          <img
            src={mid}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10 md:bottom-20 w-1/3 md:w-1/4"
            alt="Mid Logo"
          />
        </div> */}

        <div className="relative flex justify-center items-start flex-wrap gap-4">
          {/* Image 1 */}
          <img
            src={img1}
            className="w-2/3 sm:w-1/2 md:w-[45%] m-2 hidden md:block"
            alt="Image 1"
          />

          {/* Image 2 */}
          <img
            src={img2}
            className="w-2/3 sm:w-1/2 md:w-[45%] m-2 mt-4 md:mt-10 hidden md:block"
            alt="Image 2"
          />

          {/* Mid Logo */}
          <img
            src={mid}
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10 md:bottom-20 w-1/3 md:w-1/4 hidden md:block"
            alt="Mid Logo"
          />
        </div>


        {/* Right Section - Content */}
        <div className="p-4 md:p-10 space-y-6">
          <div>
            <span className="text-lg font-forum text-amber-800 block">
              COME.STAY.ENJOY
            </span>
            <h1 className="font-forum text-2xl sm:text-3xl md:text-5xl leading-tight text-gray-800 mt-3">
              Find The Best Hotel
            </h1>
            <p className="font-forum text-sm sm:text-base md:text-lg text-amber-950 mt-4">
              Nunc nec magna laoreet, sodales nisi at, co rutrum viverra. Nunc
              nec magna aculis metus libero vehiculaNullam iaculis metus
              nehicula. Aenean sed rutrum purus.
            </p>
          </div>

          <div>
            <h2 className="font-forum text-lg sm:text-xl md:text-3xl leading-tight text-gray-800">
              Best Hospitality Awards
            </h2>
            <ul className="flex flex-wrap justify-start gap-4 mt-3">
              <li>
                <img src={icon1} alt="Icon 1" className="h-12" />
              </li>
              <li>
                <img src={icon2} alt="Icon 2" className="h-12" />
              </li>
              <li>
                <img src={icon3} alt="Icon 3" className="h-12" />
              </li>
              <li>
                <img src={icon4} alt="Icon 4" className="h-12" />
              </li>
              <li>
                <img src={icon5} alt="Icon 5" className="h-12" />
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center space-x-4">
                <img src={svg1} alt="SVG 1" className="h-8" />
                <h4 className="font-forum text-base sm:text-lg text-gray-800">Our Mission</h4>
              </div>
              <p className="font-forum text-sm sm:text-base text-amber-950 mt-3">
                Aenean sed rutrum purus. Nunc nec magna laoreet, sodaleus bibens
                ivam.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-4">
                <img src={svg2} alt="SVG 2" className="h-8" />
                <h4 className="font-forum text-base sm:text-lg text-gray-800">Our Vision</h4>
              </div>
              <p className="font-forum text-sm sm:text-base text-amber-950 mt-3">
                Aenean sed rutrum purus. Nunc nec magna laoreet, sodaleus bibens
                ivam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
