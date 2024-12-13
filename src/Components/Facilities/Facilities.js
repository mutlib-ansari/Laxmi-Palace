// import React from 'react'
// import ranking from '../Assests/ranking.png'
// import { Button } from 'antd';
// import '../Facilities/Style.css'

// function Facilities() {
//   return (
//     <div className='bg-customBrown '>
//         <div className='container mx-auto w-full max-w-[1280px] flex pt-20'>
//             <div className='w-1/2  mt-auto mb-auto'>
//             <span className="text-lg font-serif text-white mt-3">KNOW US</span>
//             <h2 className='font-serif text-[60px] leading-[70px]  text-white mt-3'>Facilities Do We Have</h2>
//             <p className='font-serif text-[20px] text-white mt-6 leading-relaxed '>Vivamus bibendus, mi at suscipim erat et cm. Sed ipsum diam. Aenean sed rutrum purus nunc nec magna laoreet, sodaleus bibens ivamus et eros mattis dolor rutrum viverra nullam iaculis ms, mi at hicula, a suscipit feliicit udin.s</p>
            
//             <Button className="custom-button mt-4 mr-5 text-lg font-serif">View All Amenitiess</Button>

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
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
          <span className="text-sm sm:text-base md:text-lg font-serif text-white mt-3">KNOW US</span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-[60px] md:leading-[70px] text-white mt-3">
            Facilities Do We Have
          </h2>
          <p className="font-serif text-sm sm:text-base md:text-lg text-white mt-4 leading-relaxed">
            Vivamus bibendus, mi at suscipim erat et cm. Sed ipsum diam. Aenean sed rutrum purus nunc nec magna
            laoreet, sodaleus bibens ivamus et eros mattis dolor rutrum viverra nullam iaculis ms, mi at hicula, a
            suscipit feliicit udin.s
          </p>
          <Button className="custom-button mt-4 mr-5 text-sm sm:text-base md:text-lg font-serif">
            View All Amenities
          </Button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={ranking} alt="Ranking" className="w-full max-w-[500px] md:max-w-full mb-5" />
        </div>
      </div>
    </div>
  );
}

export default Facilities;
