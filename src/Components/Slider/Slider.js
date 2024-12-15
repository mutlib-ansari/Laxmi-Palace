// import React, { useState } from "react";
// import img1 from '../Assests/img1.png'
// import img2 from '../Assests/img2.png'
// import img3 from '../Assests/img3.png'


// const ImageSlider = () => {
//     const images = [img1, img2, img3];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//     };

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     };

//     return (
//         <div className="relative  max-w-3xl mx-auto mt-10 overflow-hidden">
//             {/* Slider */}
//             <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {images.map((image, index) => (
//                     <img
//                         key={index}
//                         src={image}
//                         alt={`Slide ${index + 1}`}
//                         className="w-3/5 flex-shrink-0"
//                     />
//                 ))}
//             </div>

//             {/* Previous Button */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//             >
//                 &#8592;
//             </button>

//             {/* Next Button */}
//             <button
//                 onClick={nextSlide}
//                 className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//             >
//                 &#8594;
//             </button>

//             {/* Dots */}
//             <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {images.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-400"} `}
//                     ></button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ImageSlider;

// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import img1 from '../Assests/img1.png'
// import img2 from '../Assests/img2.png'
// import img3 from '../Assests/img3.png'


// const MySlider = () => {
//   return (
//     <div className="w-full mx-auto">
//       <Splide options={{ rewind: true, gap: "" }}>
//         <SplideSlide>
//           <img src={img1} alt="Slide 1" className="rounded-lg" />
//         </SplideSlide>
//         <SplideSlide>
//           <img src={img2} alt="Slide 2" className="rounded-lg" />
//         </SplideSlide>
//         <SplideSlide>
//           <img src={img3} alt="Slide 2" className="rounded-lg" />
//         </SplideSlide>
//       </Splide>
//     </div>
//   );
// };

// export default MySlider;


// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import img1 from '../Assests/img1.png';
// import img2 from '../Assests/img2.png';
// import img3 from '../Assests/img3.png';

// const MySlider = () => {
//     return (
//         <div className="w-full h-dvh mx-auto bg-customBeige flex items-stretch">
//             <div className="self-center">
//                 <div className="text-center mb-10">
//                     <span className="text-lg font-serif text-amber-800">What We offer</span>
//                     <h2 className="font-serif text-[60px] leading-[70px]  text-amber-950">Discover Our Best Facilities</h2>
//                     <p className="font-serif text-amber-950 mt-4">Ginean sed rutrum purus. Nunc nec magna laoreet, sodales nisi at, co rutrum viverra. Nunc nec magna aculis metus libero vehiculaNullam iaculis metus nehicula</p>


//                 </div>




//                 <Splide
//                     options={{
//                         type: 'loop', // Enable infinite looping
//                         height: '', // Set height of the slider
//                         focus: 'center', // Focus on the center slide
//                         autoWidth: true, // Adjust slide widths automatically
//                         gap: '1rem', // Add spacing between slides
//                     }}
//                 >
//                     <SplideSlide>
//                         <img src={img1} alt="Slide 1" className="rounded-lg" />
//                     </SplideSlide>
//                     <SplideSlide>
//                         <img src={img2} alt="Slide 2" className="rounded-lg" />
//                     </SplideSlide>
//                     <SplideSlide>
//                         <img src={img3} alt="Slide 3" className="rounded-lg" />
//                     </SplideSlide>
//                     <SplideSlide>
//                         <img src={img3} alt="Slide 3" className="rounded-lg" />
//                     </SplideSlide>
//                     <SplideSlide>
//                         <img src={img3} alt="Slide 3" className="rounded-lg" />
//                     </SplideSlide>
//                 </Splide>

//             </div>
//         </div>
//     );
// };

// export default MySlider;



import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img1 from '../Assests/img1.png';
import img2 from '../Assests/img2.png';
import img3 from '../Assests/img3.png';

const MySlider = () => {
    return (
        <div className="w-full h-auto mx-auto bg-customBeige flex flex-col items-center px-4 md:px-0">
            {/* Header Section */}
            <div className="text-center mb-10">
                <span className="text-sm md:text-lg font-serif text-amber-800 block">
                    What We Offer
                </span>
                <h2 className="font-serif text-2xl md:text-5xl leading-tight text-amber-950 mt-3">
                    Discover Our Best Facilities
                </h2>
                <p className="font-serif text-sm md:text-base text-amber-950 mt-4 max-w-2xl mx-auto">
                    Ginean sed rutrum purus. Nunc nec magna laoreet, sodales nisi at, co rutrum viverra. Nunc nec magna aculis metus libero vehiculaNullam iaculis metus nehicula
                </p>
            </div>

            {/* Slider Section */}
            <Splide
                options={{
                    type: "loop",
                    perPage: 5, // Show 1 slide at a time on small screens
                    perMove: 1, // Move 1 slide at a time
                    focus: "center",
                    gap: "1rem",
                    autoWidth: true, // Disable autoWidth for better control
                    padding: { left: "1rem", right: "1rem" }, // Add padding for small screens
                    breakpoints: {
                        640: {
                            perPage: 1, // Single slide on very small screens
                            gap: "1rem",
                        },
                        768: {
                            perPage: 1, // Show 2 slides on medium screens
                            gap: "1rem",
                        },
                        1024: {
                            perPage: 3, // Show 3 slides on larger screens
                            gap: "1.5rem",
                        },
                    },
                }}
                className="w-full max-w-6xl"
            >
                <SplideSlide>
                    <img src={img1} alt="Slide 1" className="rounded-lg h-full  object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img2} alt="Slide 2" className="rounded-lg h-full  object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img3} alt="Slide 3" className="rounded-lg h-full  object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img3} alt="Slide 4" className="rounded-lg h-full  object-cover" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img3} alt="Slide 5" className="rounded-lg h-full  object-cover" />
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default MySlider;


// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import img1 from "../Assests/testiminial.png.png";
// import img2 from "../Assests/testimonial2.jpg.png";
// import img3 from "../Assests/testimonial3.jpg.png";
// import bg from "../Assests/m5.png";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Sacha Stevone",
//       role: "Designer",
//       image: img1,
//       text: "Praesent tempus risus, eget bortis metus convallis con Pellentesq ue ullamcorper eros a lectuctut. Sed imperdiet dignissim.",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "Tad Armstrong",
//       role: "CEO",
//       image: img2,
//       text: "Sed imperdiet dignissim nislm bibe ndum. Praesent tempus risus, eget bortis metus convallis con Pellentesq ue ullamcorper.",
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "Jessi Pinkman",
//       role: "Racer",
//       image: img3,
//       text: "Cellentesq ue ullamcorper eros a lectuctut. Sed imperdiet dignissim nislm bibe ndum. Praesent tempus risus, eget bortis.",
//       rating: 5,
//     },
//   ];

//   return (
//     <section
//       style={{ backgroundImage: `url(${bg})` }}
//       className="bg-cream py-16 px-6 bg-no-repeat bg-left-top"
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-lg font-serif text-amber-800">Testimonial</h2>
//         <h3 className="font-serif text-[60px] leading-[70px] text-amber-950">
//           Happy Customer Thoughts
//         </h3>
//         <p className="font-serif text-amber-950 mt-4">
//           Nunc nec magna acilis metus libero vehiculabibulum inisis metus vehicula. Arenten sed rutrum purus.
//           Nunc nec magna bottet, vehida et ris, et rutrum viverra.
//         </p>

//         <Splide
//           options={{
//             type: "loop",
//             perPage: 3,
//             gap: "1rem",
//             autoplay: true,
//             breakpoints: {
//               1024: { perPage: 2 },
//               768: { perPage: 1 },
//             },
//             arrows: true,
//             pagination: true,
//           }}
//           className="mt-10"
//         >
//           {testimonials.map((testimonial) => (
//             <SplideSlide key={testimonial.id}>
//               <div className="bg-customBeige shadow-md rounded-lg p-6 flex flex-col items-center">
//                 <p className="text-gray-600 mb-4 text-sm text-center">{testimonial.text}</p>
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-500">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex space-x-1">
//                   {Array(testimonial.rating)
//                     .fill()
//                     .map((_, index) => (
//                       <span key={index} className="text-yellow-500">
//                         &#9733;
//                       </span>
//                     ))}
//                 </div>
//               </div>
//             </SplideSlide>
//           ))}
//         </Splide>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
