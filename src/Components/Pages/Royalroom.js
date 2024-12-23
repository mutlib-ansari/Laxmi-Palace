// import React from 'react'
// import Splide from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// function Royalroom() {

//     const splide = new Splide('.splide', {
//         type: 'loop',
//         drag: 'free',
//         focus: 'center',
//         perPage: 3,
//         autoScroll: {
//             speed: 1,
//         },
//     });

//     splide.mount();
//     return (
//         <div>
//             <Splide>
//                 <SplideSlide>
//                     <img src={img1} alt="Slide 1" className="h-96  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img2} alt="Slide 2" className="h-96  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img3} alt="Slide 3" className="h-96  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img3} alt="Slide 4" className="h-96  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img3} alt="Slide 5" className="h-96  object-cover" />
//                 </SplideSlide>
//             </Splide>
//         </div>
//     )
// }

// export default Royalroom



// import React from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide styles
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import { FiPhone } from "react-icons/fi";

// // Import your images
// import img1 from '../Assests/lroom1.webp';
// // import img2 from '../Assests/lroom2.webp';
// // import img3 from '../Assests/lroom3.jpg';
// import img4 from '../Assests/lroom4.jpeg';
// import img5 from '../Assests/lroom5.jpg';
// import { Button } from 'antd';

// function Royalroom() {
//     return (
//         <div className='w-full relative '>
//             <Splide
//                 options={{
//                     type: 'loop',
//                     drag: 'free',
//                     focus: 'center',
//                     perPage: 3,
//                     gap: "0",
                    
//                     autoScroll: {
//                         speed: 1,
//                     },
//                     arrows: false,
//                 }}
//                 extensions={{ AutoScroll }} // Add extensions for AutoScroll
//             >
//                 <SplideSlide>
//                     <img src={img1} alt="Slide 1" className="h-96 object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img4} alt="Slide 2" className="h-96 object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 3" className="h-96 object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img4} alt="Slide 4" className="h-96 object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 5" className="h-96 object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 5" className="h-96 object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 5" className="h-96 object-cover" />
//                 </SplideSlide>
//             </Splide>

//             <div className='w-full absolute top-3/4 '>
//                 <ul className='flex justify-between  '>
//                     <li><h1 className=' ml-5 text-6xl font-forum text-white'>Laxmi Place</h1></li>

//                     <li className=''>
//                         <Button className="custom-button mt-4 mr-5 text-sm sm:text-base md:text-lg font-forum">
//                         <FiPhone />  Call Now
//                         </Button>
//                     </li>
//                 </ul>

//             </div>

//         </div>
//     );
// }

// export default Royalroom;


import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide styles
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { FiPhone } from "react-icons/fi";
import img1 from '../Assests/lroom1.webp';
import img4 from '../Assests/lroom4.jpeg';
import img5 from '../Assests/lroom5.jpg';
import { Button } from 'antd';

function Royalroom() {
    return (
        <div className='w-full relative'>
            <Splide
                options={{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    perPage: 3,
                    gap: "0",
                    autoScroll: {
                        speed: 1,
                    },
                    arrows: false,
                }}
                extensions={{ AutoScroll }} // Add extensions for AutoScroll
            >
                <SplideSlide>
                    <img src={img1} alt="Slide 1" className="h-96 object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img4} alt="Slide 2" className="h-96 object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img5} alt="Slide 3" className="h-96 object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img4} alt="Slide 4" className="h-96 object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img5} alt="Slide 5" className="h-96 object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img5} alt="Slide 5" className="h-96 object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img5} alt="Slide 5" className="h-96 object-cover" />
                </SplideSlide>
            </Splide>

            
            <div className='w-full absolute bottom-0 left-0 right-0  py-4'>
                <ul className='flex flex-col md:flex-row justify-between items-center text-white md:ml-4'>
                    
                    <li className='text-center md:text-left'>
                        <h1 className='text-3xl sm:text-4xl md:text-6xl font-forum'>Laxmi Place</h1>
                    </li>

                    
                    <li>
                        <Button className="custom-button mt-4 sm:mt-0 mr-5 text-sm sm:text-base md:text-lg font-forum flex items-center justify-center">
                            <FiPhone />  Call Now
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Royalroom;
