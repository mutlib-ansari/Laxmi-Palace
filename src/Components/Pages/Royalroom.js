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
//                     <img src={img1} alt="Slide 1" className=" h-full  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img2} alt="Slide 2" className=" h-full  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img3} alt="Slide 3" className=" h-full  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img3} alt="Slide 4" className=" h-full  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img3} alt="Slide 5" className=" h-full  object-cover" />
//                 </SplideSlide>
//             </Splide>
//         </div>
//     )
// }

// export default Royalroom



import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide styles
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// Import your images
import img1 from '../Assests/img1.png';
import img2 from '../Assests/img2.png';
import img3 from '../Assests/img3.png';

function Royalroom() {
  return (
    <div className='w-full h-auto relative md:pt-36'>
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
        }}
        extensions={{ AutoScroll }} // Add extensions for AutoScroll
      >
        <SplideSlide>
          <img src={img1} alt="Slide 1" className=" h-full object-cover" />
        </SplideSlide>
        <SplideSlide>
          <img src={img2} alt="Slide 2" className=" h-full object-cover" />
        </SplideSlide>
        <SplideSlide>
          <img src={img3} alt="Slide 3" className=" h-full object-cover" />
        </SplideSlide>
        <SplideSlide>
          <img src={img1} alt="Slide 4" className=" h-full object-cover" />
        </SplideSlide>
        <SplideSlide>
          <img src={img2} alt="Slide 5" className=" h-full object-cover" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Royalroom;
