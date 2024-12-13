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
//                 <span className='text-lg font-serif text-amber-800'>DIVINE-ELITE</span>
//                 <h2 className='font-serif text-[60px] leading-[70px]  text-gray-800s '>Choose Your Room</h2>
//                 <p className='font-serif text-amber-950 mt-4 text-center mx-40 '>Etiam ultrices aliquet dui. Nulla cursus fringilla nibh. Aliquam at leo accumsan, pulvinar ipsum porta, tristique velit. Morbi finibus nunc in eleifend hendrerit.</p>
//                 </div>

//                 <div >
//                     <ul className='flex justify-evenly'>
//                         <li className='flex '>
//                        <span className='p-3 font-serif text-[30px] leading-[20px]  text-gray-800s'>Royal Room</span> 
//                         <img src={home3} 
//                         className='h-12'/>
//                         </li>
//                         <li className='flex'>
//                         <span className='p-3 font-serif text-[30px] leading-[20px]  text-gray-800s'>Family Room</span> 
//                         <img src={home1} 
//                         className='h-12'/>
//                         </li>
//                         <li className='flex'>
//                         <span className='p-3 font-serif text-[30px] leading-[20px]  text-gray-800s'>Family Suite</span> 
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


import React from 'react';
import bg from '../Assests/Mask.png';
import home1 from '../Assests/home1.png';
import home2 from '../Assests/home2.png';
import home3 from '../Assests/home3.png';
import frame2 from '../Assests/frame2.png';

function Dasbord() {
    return (
        <div className="bg-customBeige">
            <div className="container mx-auto w-full max-w-[1280px] px-4">
                {/* Header Section */}
                <div
                    style={{ backgroundImage: `url(${bg})` }}
                    className="bg-cover bg-transparent w-full text-center p-6 sm:p-10"
                >
                    <span className="text-lg font-serif text-amber-800">DIVINE-ELITE</span>
                    <h2 className="font-serif text-3xl sm:text-[60px] sm:leading-[70px] text-gray-800">
                        Choose Your Room
                    </h2>
                    <p className="font-serif text-sm sm:text-lg text-amber-950 mt-4 text-center mx-auto max-w-[600px]">
                        Etiam ultrices aliquet dui. Nulla cursus fringilla nibh. Aliquam at leo accumsan, pulvinar ipsum
                        porta, tristique velit. Morbi finibus nunc in eleifend hendrerit.
                    </p>
                </div>

                {/* Room Options */}
                <div>
                    <ul className="flex flex-wrap justify-evenly gap-4 sm:gap-8 mt-6">
                        <li className="flex items-center">
                            <span className="p-3 font-serif text-lg sm:text-[30px] text-gray-800">Royal Room</span>
                            <img src={home3} alt="Royal Room" className="h-12" />
                        </li>
                        <li className="flex items-center">
                            <span className="p-3 font-serif text-lg sm:text-[30px] text-gray-800">Family Room</span>
                            <img src={home1} alt="Family Room" className="h-12" />
                        </li>
                        <li className="flex items-center">
                            <span className="p-3 font-serif text-lg sm:text-[30px] text-gray-800">Family Suite</span>
                            <img src={home2} alt="Family Suite" className="h-12" />
                        </li>
                    </ul>
                </div>

                {/* Image Section */}
                <div className="flex justify-center mt-10 sm:mt-16">
                    <img src={frame2} alt="Frame" className="rounded-3xl w-full max-w-md sm:max-w-lg h-auto" />
                </div>
            </div>
        </div>
    );
}

export default Dasbord;
