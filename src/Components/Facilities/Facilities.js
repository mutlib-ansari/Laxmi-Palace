// import React from 'react'
// import ranking from '../Assests/ranking.png'
// import { Button } from 'antd';
// import '../Facilities/Style.css'

// function Facilities() {
//   return (
//     <div className='bg-customBrown '>
//         <div className='container mx-auto w-full max-w-[1280px] flex pt-20'>
//             <div className='w-1/2  mt-auto mb-auto'>
//             <span className="text-lg font-forum text-white mt-3">KNOW US</span>
//             <h2 className='font-forum text-[60px] leading-[70px]  text-white mt-3'>Facilities Do We Have</h2>
//             <p className='font-forum text-[20px] text-white mt-6 leading-relaxed '>Vivamus bibendus, mi at suscipim erat et cm. Sed ipsum diam. Aenean sed rutrum purus nunc nec magna laoreet, sodaleus bibens ivamus et eros mattis dolor rutrum viverra nullam iaculis ms, mi at hicula, a suscipit feliicit udin.s</p>

//             <Button className="custom-button mt-4 mr-5 text-lg font-forum">View All Amenitiess</Button>

//             </div>

//             <div className='w-1/2 mb-14 '>
//             <img src={ranking}/>

//             </div>


//         </div>

//     </div>
//   )
// }

// export default Facilities


import React from 'react';
import ranking from '../Assests/ranking.png';
import { Button } from 'antd';
import '../Facilities/Style.css';

function Facilities() {
  return (
    <div className="bg-customBrown">
      <div className="container mx-auto w-full max-w-[1280px] flex flex-col md:flex-row pt-10 md:pt-20 px-4">

        <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
          <span className="text-sm sm:text-base md:text-lg font-forum text-white mt-3">KNOW US</span>
          <h2 className="font-forum text-2xl sm:text-4xl md:text-[60px] md:leading-[70px] text-white mt-3">
            Facilities Do We Have
          </h2>
          <p className="font-forum text-sm sm:text-base md:text-lg text-white mt-4 leading-relaxed">
            Vivamus bibendus, mi at suscipim erat et cm. Sed ipsum diam. Aenean sed rutrum purus nunc nec magna
            laoreet, sodaleus bibens ivamus et eros mattis dolor rutrum viverra nullam iaculis ms, mi at hicula, a
            suscipit feliicit udin.s
          </p>
          <Button className="custom-button mt-4 mr-5 text-sm sm:text-base md:text-lg font-forum">
            View All Amenities
          </Button>
        </div>

        {/* Right Section - Image */}
        {/* <div className="w-full md:w-1/2 flex justify-center">
          <img src={ranking} alt="Ranking" className="w-full max-w-[500px] md:max-w-full mb-5" />
        </div> */}

        <div className=" w-full md:w-1/2  justify-center grid grid-cols-2 md:grid-cols-2 max-w-6xl mx-auto py-10">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center bg-gray-100 py-10">
            <h2 className="font-forum md:text-8xl text-5xl  text-amber-800">4K</h2>
            <p className="font-forum md:text-3xl text-2xl  tracking-wide text-gray-600 mt-2">ROOMS</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center bg-amber-50 py-10">
            <h2 className="font-forum md:text-8xl text-5xl  text-amber-800">200</h2>
            <p className="font-forum md:text-3xl text-2xl  tracking-wide text-gray-600 mt-2">FACILITIES</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center bg-amber-50 py-10">
            <h2 className="font-forum md:text-8xl text-5xl  text-amber-800">32K</h2>
            <p className="font-forum md:text-3xl text-2xl  tracking-wide text-gray-600 mt-2">CLIENTS</p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center bg-gray-100 py-10">
            <h2 className="font-forum md:text-8xl text-5xl  text-amber-800">768+</h2>
            <p className="font-forum md:text-3xl text-2xl   tracking-wide text-gray-600 mt-2">STAFFS</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Facilities;
