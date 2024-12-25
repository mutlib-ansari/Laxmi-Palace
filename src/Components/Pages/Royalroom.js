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
//                     <img src={img1} alt="Slide 1" className="h-full  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img2} alt="Slide 2" className="h-full  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img3} alt="Slide 3" className="h-full  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img3} alt="Slide 4" className="h-full  object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img3} alt="Slide 5" className="h-full  object-cover" />
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
//                     <img src={img1} alt="Slide 1" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img4} alt="Slide 2" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 3" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img4} alt="Slide 4" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 5" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 5" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 5" className="h-full object-cover" />
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


// import React, { useState } from "react";
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide styles
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import { FiPhone } from "react-icons/fi";
// // import img1 from '../Assests/lroom1.webp';
// // import img4 from '../Assests/lroom4.jpeg';
// import img5 from '../Assests/lroom5.jpg';
// import { Form, Input, Button } from 'antd';
// import { CiLocationOn } from "react-icons/ci";
// import { IoMailUnreadOutline } from "react-icons/io5";
// import { GrShareOption } from "react-icons/gr";
// import { FaBarsStaggered } from "react-icons/fa6";
// import image1 from "../Assests/about1.webp"
// import image2 from "../Assests/about2.webp"
// import image3 from "../Assests/about3.webp"
// import image4 from "../Assests/about4.webp"
// import image5 from "../Assests/about5.webp"
// import image6 from "../Assests/about6.webp"

// function Royalroom() {
//     const [lightboxImage, setLightboxImage] = useState(null);

//     const images = [
//         [image1],
//         [image2],
//         [image3],
//         [image4],
//         [image5],
//         [image6]

//     ];

//     const openLightbox = (image) => {
//         setLightboxImage(image);
//     };

//     const closeLightbox = () => {
//         setLightboxImage(null);
//     };

//     const [form] = Form.useForm();

//     const onFinish = (values) => {
//         console.log("Form values: ", values);
//         // You can handle form submission here, e.g., sending the data to a server.
//     };

//     return (
//         <div className='w-full relative bg-[#fdf8ee]'>
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
//                     <img src={img5} alt="Slide 1" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 2" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 3" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 4" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 5" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 5" className="h-full object-cover" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <img src={img5} alt="Slide 5" className="h-full object-cover" />
//                 </SplideSlide>
//             </Splide>


//             <div className='w-full md:absolute bottom-0 left-0 right-0 top-[500px]'>
//                 <ul className='flex flex-col md:flex-row justify-between items-center text-white md:ml-4'>

//                     <li className='text-center md:text-left'>
//                         <h1 className='text-3xl text-black md:text-white sm:text-4xl md:text-6xl font-forum'>Laxmi Place</h1>
//                     </li>


//                     <li>
//                         <Button className="custom-button mt-4 sm:mt-0 mr-5 text-sm sm:text-base md:text-lg font-forum flex items-center justify-center">
//                             <FiPhone />  Call Now
//                         </Button>
//                     </li>
//                 </ul>
//             </div>



//             {/* about       */}

//             <div className='container mx-auto w-full max-w-[1280]  py-10 '>
//                 <div>
//                     <ul className='flex justify-evenly'>
//                         <li className='flex font-forum text-2xl rounded-full border text-black p-5'><CiLocationOn className='m-1' />
//                             Get directions</li>
//                         <li className='flex font-forum text-2xl rounded-full border text-black p-5'>
//                             <FiPhone className='m-1' />Call now</li>
//                         <li className='flex font-forum text-2xl rounded-full border text-black p-5'>
//                             <IoMailUnreadOutline className='m-1' />Leave a review</li>
//                         <li className='flex font-forum text-2xl rounded-full border text-black p-5'><GrShareOption className='m-1' />
//                             Share</li>
//                     </ul>
//                 </div>

//                 <div className='flex font-forum py-10 gap-2'>
//                     <div className='w-1/2 border rounded-lg bg-white py-2 p-5 '>
//                         <span className='flex'>
//                             <FaBarsStaggered className='m-1' />
//                             <h5 className=' text-xl '>Room Venue Details</h5>
//                         </span>

//                         <p className='my-6 text-xl leading-8'>The Leela Palace Jaipur is a beacon of luxury and splendor, and therefore, one of the most desired luxury hotels Jaipur has to offer. Rich in splendorous architectures, lavish world-class amenities, and impeccable services, this hotel provides a perfect place for those seeking a stunning destination wedding in Jaipur. Bringing the finest Rajputana grandeur with finest contemporary luxury, The Leela Palace Jaipur is indeed one of the candidates for the top hotels in Jaipur.</p>

//                         <h2 className='text-4xl'>A Luxury Destination for Grand Weddings</h2>
//                         <p className='my-6 text-xl leading-8'>There is nothing that can beat The Leela Palace Jaipur for a regal wedding. It boasts of having a spacious property of 370,260 square meters and has three indoor venues along with four outdoor spaces that can hold events lavishly and sophisticatedly. Whether it is an explosion of grand celebration or an intimate ceremony, the venues let you make the dream wedding happen.</p>
//                         <p className='my-6 text-xl leading-8'>Wedding planners are available at the hotel to take care of everything ranging from décor to catering. The glorious surroundings and incomparable amenities make The Leela Palace Jaipur permanently hold its place as the number one destination wedding venue in Jaipur.</p>
//                         <h2 className='text-4xl'>Luxurious Rooms</h2>
//                         <p className='my-6 text-xl leading-8'>The Leela Palace Jaipur has 200 lavishly set up rooms and suites, offering a haven of comfort and elegance. Every room comes with modern amenities such as a 49-inch LED TV, a minibar, and an iPod docking station, promising an exhilarating experience. The four-fixture bathrooms, complete with soaking tubs, are the perfect haven for unwinding after a hectic day of celebrations.</p>
//                         <p className='my-6 text-xl leading-8'>Guests who decide to stay at this hotel in Jaipur can expect personalized attention along with a serene environment, which makes the stay truly memorable. Be it a wedding guest or you're planning a romantic retreat, your stay here at The Leela Palace Jaipur will be unparalleled in luxury</p>
//                         <h2 className='text-4xl'>Culinary Delights</h2>
//                         <p className='my-6 text-xl leading-8'>The Leela Palace Jaipur has four beautiful dining venues with diverse gastronomic experiences. Sukh Mahal, the all-day dining restaurant, sports an interactive live kitchen concept with an exciting array of international and local delicacies. Then, there is Mohan Mahal, a more intimate dining destination inspired by the Sheesh Mahal of Amer Fort, creating magical ambiance with their mirrored décors and candlelight setting.</p>
//                         <p className='my-6 text-xl leading-8'>An additional option for guests to unwind is the lounge and bar, Jharokha, offering an exciting variety of coffees and handcrafted cocktails. For a final indulgence, the rooftop dining at Hawa Mahal should be described as an exhilarating 'Under the Stars' experience. With this venue offering a panoramic view of the Aravalli Hills, guests will enjoy the finest grills while appreciating Jaipur's pleasant climate. These alternatives make The Leela Palace Jaipur one of the best hotels in Jaipur for food enthusiasts.</p>
//                         <h2 className='text-4xl '>Wellness and Recreation</h2>
//                         <p className='my-6 text-xl leading-8'>Offering rejuvenation, indulgence, relaxation, and renewal, the Leela Palace Jaipur focuses on delivering a spa service for the holistic wellness of its guests. The guests can also engage in recreation needs with the leisure facilities such as the fitness center and swimming pool.</p>
//                         <p className='my-6 text-xl leading-8'>From a relaxing pre-wedding pampering session to a regenerative retreat after a grand celebration, every whim and desire are taken care of at the wellness facilities at this luxury hotel in Jaipur.</p>
//                         <h2 className='text-4xl'>Close Proximity to Iconic Landmarks</h2>
//                         <p className='my-6 text-xl leading-8'>Strategically located on the Jaipur-Delhi Highway, The Leela Palace Jaipur gives easy access to the city's most happening landmarks. It is 8 km from Seesh Mahal, 9 km from Jaigarh Fort, and 12 km from Jal Mahal, which enables the guests to derive all the splendor of rich culture from Jaipur. Located close to 31 km from Jaipur International Airport, it ensures that wedding guests from every corner of the globe can arrive without hassle.</p>
//                         <h2 className='text-4xl'>Why choose The Leela Palace Jaipur?</h2>
//                         <p className='my-6 text-xl leading-8'>The Leela Palace Jaipur itself stands like a jewel due to its traditional Rajasthani charm juxtaposed with the modern luxury of one of the best hotels in Jaipur. Its grand venues, luxurious accommodations, exceptional dining options, and world-class service define this as one of the best hotels in Jaipur. And so, for couples looking for a fairy-tale destination wedding in Jaipur, the promise from The Leela Palace will be an experience filled with elegance, sophistication, and unforgettable memories.</p>
//                         <p className='my-6 text-xl leading-8'>Whether for a wedding or just to treat your senses to luxury, each moment counts and is very extraordinary for experiences one's never had about at The Leela Palace Jaipur.</p>
//                     </div>
//                     <div className="w-1/2 p-5 border rounded-lg bg-white py-2 gap-2">
//                         <h2 className="text-2xl font-bold mb-6">Gallery</h2>
//                         <div className="grid grid-cols-2 gap-4">
//                             {images.map((image, index) => (
//                                 <img
//                                     key={index}
//                                     src={image}
//                                     alt={`Gallery ${index + 1}`}
//                                     className="w-full h-auto rounded-lg cursor-pointer hover:scale-105 transition-transform"
//                                     onClick={() => openLightbox(image)}
//                                 />
//                             ))}
//                         </div>

//                         {lightboxImage && (
//                             <div
//                                 className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//                                 onClick={closeLightbox}
//                             >
//                                 <div className="relative">
//                                     <img
//                                         src={lightboxImage}
//                                         alt="Lightbox"
//                                         className="max-w-screen-lg max-h-screen rounded-lg"
//                                     />
//                                     <button
//                                         className="absolute top-2 right-2 text-white text-3xl font-bold"
//                                         onClick={closeLightbox}
//                                     >
//                                         ×
//                                     </button>
//                                 </div>
//                             </div>
//                         )}


//                         <div className="flex justify-center items-center py-11">
//                             <div className="w-full max-w-md bg-white p-8  ">
//                                 <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
//                                 <Form
//                                     form={form}
//                                     layout="vertical"
//                                     onFinish={onFinish}
//                                     className="space-y-56-"
//                                 >
//                                     <Form.Item
//                                         label="Name"
//                                         name="name"
//                                         rules={[{ required: true, message: "Please enter your name" }]}
//                                     >
//                                         <Input placeholder="Your Name" className="px-4 py-2 rounded" />
//                                     </Form.Item>

//                                     <Form.Item
//                                         label="Email"
//                                         name="email"
//                                         rules={[
//                                             { required: true, message: "Please enter your email" },
//                                             { type: "email", message: "Please enter a valid email" },
//                                         ]}
//                                     >
//                                         <Input placeholder="Your Email" className="px-4 py-2 rounded" />
//                                     </Form.Item>


//                                     <Form.Item
//                                         label="Mobile"
//                                         name="mobile"
//                                         rules={[{ required: true, message: "Please enter your mobile number" }]}
//                                     >
//                                         <Input placeholder="Your Mobile Number" className="px-4 py-2 rounded" />
//                                     </Form.Item>

//                                     <Form.Item
//                                         label="Tentative Wedding Date"
//                                         name="weddingDate"
//                                         rules={[{ required: true, message: "Please enter the wedding date" }]}
//                                     >
//                                         <Input placeholder="Tentative Wedding Date" className="px-4 py-2 rounded" />
//                                     </Form.Item>

//                                     <Form.Item
//                                         label="No Of Guests"
//                                         name="guests"
//                                         rules={[{ required: true, message: "Please enter the number of guests" }]}
//                                     >
//                                         <Input placeholder="Number of Guests" className="px-4 py-2 rounded" />
//                                     </Form.Item>


//                                     <Form.Item
//                                         label="Message"
//                                         name="message"
//                                         rules={[{ required: true, message: "Please enter your message" }]}
//                                     >
//                                         <Input.TextArea
//                                             rows={4}
//                                             placeholder="Your Message"
//                                             className="px-4 py-2 rounded"
//                                         />
//                                     </Form.Item>

//                                     <Form.Item>
//                                         <Button
//                                             type="primary"
//                                             htmlType="submit"
//                                             className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//                                         >
//                                             Submit
//                                         </Button>
//                                     </Form.Item>
//                                 </Form>


//                                 <div className="w-full max-w-md bg-white p-6 rounded-lg ">
//                             <h3 className="text-xl font-bold text-center mb-4">All Contact Details</h3>
//                             <p className="text-gray-700 mb-2 "><strong>Phone Number:</strong> +91 9351945935</p>
//                             <p className="text-gray-700 mb-2"><strong>Email:</strong> connect.weddinghues@gmail.com</p>
//                             <p className="text-gray-700"><strong>Address:</strong> Jaipur-Delhi Highway, NH 11, Kukas, Rajasthan 302028</p>
//                         </div>
//                             </div>

                            
//                         </div>

                       
//                     </div>



//                 </div>








//             </div>







//         </div>
//     );
// }

// export default Royalroom;



import React, { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { FiPhone } from "react-icons/fi";
import { Form, Input, Button } from 'antd';
import { CiLocationOn } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { GrShareOption } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
import image1 from "../Assests/about1.webp";
import image2 from "../Assests/about2.webp";
import image3 from "../Assests/about3.webp";
import image4 from "../Assests/about4.webp";
import image5 from "../Assests/about5.webp";
import image6 from "../Assests/about6.webp";

function Royalroom() {
    const [lightboxImage, setLightboxImage] = useState(null);

    const images = [image1, image2, image3, image4, image5, image6];

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Form values: ", values);
    };

    return (
        <div className='w-full relative bg-[#fdf8ee]'>
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
                extensions={{ AutoScroll }}
            >
                {images.map((img, index) => (
                    <SplideSlide key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} className="h-full object-cover w-full" />
                    </SplideSlide>
                ))}
            </Splide>

            <div className='w-full md:absolute bottom-0 left-0 right-0 top-[500px]'>
                <ul className='flex flex-col md:flex-row justify-between items-center text-white md:ml-4 px-4'>
                    <li className='text-center md:text-left'>
                        <h1 className='text-3xl text-black md:text-white sm:text-4xl md:text-6xl font-forum'>Laxmi Place</h1>
                    </li>

                    <li>
                        <Button className="custom-button mt-4 sm:mt-0 mr-5 text-sm sm:text-base md:text-lg font-forum flex items-center justify-center">
                            <FiPhone /> Call Now
                        </Button>
                    </li>
                </ul>
            </div>

            <div className='container mx-auto w-full max-w-[1280px] py-10 px-4 sm:px-6'>
                <div>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                        <li className='flex font-forum text-xl sm:text-2xl rounded-full border text-black p-5 items-center'><CiLocationOn className='mr-2' /> Get directions</li>
                        <li className='flex font-forum text-xl sm:text-2xl rounded-full border text-black p-5 items-center'><FiPhone className='mr-2' /> Call now</li>
                        <li className='flex font-forum text-xl sm:text-2xl rounded-full border text-black p-5 items-center'><IoMailUnreadOutline className='mr-2' /> Leave a review</li>
                        <li className='flex font-forum text-xl sm:text-2xl rounded-full border text-black p-5 items-center'><GrShareOption className='mr-2' /> Share</li>
                    </ul>
                </div>

                <div className='flex flex-col md:flex-row py-10 gap-8'>
                    <div className='w-full font-forum md:w-1/2 border  rounded-lg bg-white py-4 px-6'>
                        <h5 className='flex items-center text-xl'><FaBarsStaggered className='mr-2' /> Room Venue Details</h5>
                        <p className='mt-4 text-lg leading-relaxed'>The Leela Palace Jaipur is a beacon of luxury...</p>

                        <p className='mt-4 text-lg leading-relaxed'>There is nothing that can beat The Leela Palace Jaipur...</p>
                        {/* Add the rest of your text here as needed */}
                        <p className='my-6 text-xl leading-8'>The Leela Palace Jaipur is a beacon of luxury and splendor, and therefore, one of the most desired luxury hotels Jaipur has to offer. Rich in splendorous architectures, lavish world-class amenities, and impeccable services, this hotel provides a perfect place for those seeking a stunning destination wedding in Jaipur. Bringing the finest Rajputana grandeur with finest contemporary luxury, The Leela Palace Jaipur is indeed one of the candidates for the top hotels in Jaipur.</p>

                       <h2 className='text-2xl md:text-3xl lg:text-4xl mt-6'>A Luxury Destination for Grand Weddings</h2>
                        <p className='mt-4 text-lg leading-relaxed'>There is nothing that can beat The Leela Palace Jaipur for a regal wedding. It boasts of having a spacious property of 370,260 square meters and has three indoor venues along with four outdoor spaces that can hold events lavishly and sophisticatedly. Whether it is an explosion of grand celebration or an intimate ceremony, the venues let you make the dream wedding happen.</p>
                      <p className='mt-4 text-lg leading-relaxed'>Wedding planners are available at the hotel to take care of everything ranging from décor to catering. The glorious surroundings and incomparable amenities make The Leela Palace Jaipur permanently hold its place as the number one destination wedding venue in Jaipur.</p>
                       <h2 className='text-2xl md:text-3xl lg:text-4xl mt-6'>Luxurious Rooms</h2>
                       <p className='mt-4 text-lg leading-relaxed'>The Leela Palace Jaipur has 200 lavishly set up rooms and suites, offering a haven of comfort and elegance. Every room comes with modern amenities such as a 49-inch LED TV, a minibar, and an iPod docking station, promising an exhilarating experience. The four-fixture bathrooms, complete with soaking tubs, are the perfect haven for unwinding after a hectic day of celebrations.</p>
                        <p className='mt-4 text-lg leading-relaxed'>Guests who decide to stay at this hotel in Jaipur can expect personalized attention along with a serene environment, which makes the stay truly memorable. Be it a wedding guest or you're planning a romantic retreat, your stay here at The Leela Palace Jaipur will be unparalleled in luxury</p>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl mt-6'>Culinary Delights</h2>
                        <p className='mt-4 text-lg leading-relaxed'>The Leela Palace Jaipur has four beautiful dining venues with diverse gastronomic experiences. Sukh Mahal, the all-day dining restaurant, sports an interactive live kitchen concept with an exciting array of international and local delicacies. Then, there is Mohan Mahal, a more intimate dining destination inspired by the Sheesh Mahal of Amer Fort, creating magical ambiance with their mirrored décors and candlelight setting.</p>
                        <p className='mt-4 text-lg leading-relaxed'>An additional option for guests to unwind is the lounge and bar, Jharokha, offering an exciting variety of coffees and handcrafted cocktails. For a final indulgence, the rooftop dining at Hawa Mahal should be described as an exhilarating 'Under the Stars' experience. With this venue offering a panoramic view of the Aravalli Hills, guests will enjoy the finest grills while appreciating Jaipur's pleasant climate. These alternatives make The Leela Palace Jaipur one of the best hotels in Jaipur for food enthusiasts.</p>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl mt-6 '>Wellness and Recreation</h2>
                         <p className='mt-4 text-lg leading-relaxed'>Offering rejuvenation, indulgence, relaxation, and renewal, the Leela Palace Jaipur focuses on delivering a spa service for the holistic wellness of its guests. The guests can also engage in recreation needs with the leisure facilities such as the fitness center and swimming pool.</p>
                         <p className='mt-4 text-lg leading-relaxed'>From a relaxing pre-wedding pampering session to a regenerative retreat after a grand celebration, every whim and desire are taken care of at the wellness facilities at this luxury hotel in Jaipur.</p>
                         <h2 className='text-2xl md:text-3xl lg:text-4xl mt-6'>Close Proximity to Iconic Landmarks</h2>
                         <p className='mt-4 text-lg leading-relaxed'>Strategically located on the Jaipur-Delhi Highway, The Leela Palace Jaipur gives easy access to the city's most happening landmarks. It is 8 km from Seesh Mahal, 9 km from Jaigarh Fort, and 12 km from Jal Mahal, which enables the guests to derive all the splendor of rich culture from Jaipur. Located close to 31 km from Jaipur International Airport, it ensures that wedding guests from every corner of the globe can arrive without hassle.</p>
                         <h2 className='text-2xl md:text-3xl lg:text-4xl mt-6'>Why choose The Leela Palace Jaipur?</h2>
                         <p className='mt-4 text-lg leading-relaxed'>The Leela Palace Jaipur itself stands like a jewel due to its traditional Rajasthani charm juxtaposed with the modern luxury of one of the best hotels in Jaipur. Its grand venues, luxurious accommodations, exceptional dining options, and world-class service define this as one of the best hotels in Jaipur. And so, for couples looking for a fairy-tale destination wedding in Jaipur, the promise from The Leela Palace will be an experience filled with elegance, sophistication, and unforgettable memories.</p>
                         <p className='mt-4 text-lg leading-relaxed'>Whether for a wedding or just to treat your senses to luxury, each moment counts and is very extraordinary for experiences one's never had about at The Leela Palace Jaipur.</p>
                    </div>

                    <div className='w-full font-forum  md:w-1/2 border rounded-lg bg-white py-4 px-6'>
                        <h2 className='text-2xl font-forum mb-6'>Gallery</h2>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-auto rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                    onClick={() => openLightbox(image)}
                                />
                            ))}
                        </div>

                        {lightboxImage && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                                onClick={closeLightbox}
                            >
                                <div className="relative">
                                    <img
                                        src={lightboxImage}
                                        alt="Lightbox"
                                        className="max-w-screen-lg max-h-screen rounded-lg"
                                    />
                                    <button
                                        className="absolute top-2 right-2 text-white text-3xl font-bold"
                                        onClick={closeLightbox}
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="mt-8 font-forum">
                            <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                className="space-y-4"
                            >
                                <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
                                    <Input placeholder="Your Name" className="px-4 py-2 rounded" />
                                </Form.Item>
                                <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }, { type: "email", message: "Please enter a valid email" }]}>
                                    <Input placeholder="Your Email" className="px-4 py-2 rounded" />
                                </Form.Item>
                                <Form.Item label="Mobile" name="mobile" rules={[{ required: true, message: "Please enter your mobile number" }]}>
                                    <Input placeholder="Your Mobile Number" className="px-4 py-2 rounded" />
                                </Form.Item>
                                <Form.Item label="Tentative Wedding Date" name="weddingDate" rules={[{ required: true, message: "Please enter the wedding date" }]}>
                                    <Input placeholder="Tentative Wedding Date" className="px-4 py-2 rounded" />
                                </Form.Item>
                                <Form.Item label="No Of Guests" name="guests" rules={[{ required: true, message: "Please enter the number of guests" }]}>
                                    <Input placeholder="Number of Guests" className="px-4 py-2 rounded" />
                                </Form.Item>
                                <Form.Item label="Message" name="message" rules={[{ required: true, message: "Please enter your message" }]}>
                                    <Input.TextArea rows={4} placeholder="Your Message" className="px-4 py-2 rounded" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>


                            <div className="w-full max-w-md bg-white p-6 rounded-lg ">
                           <h3 className="text-xl font-bold text-center mb-4">All Contact Details</h3>
                             <p className="text-gray-700 mb-2 "><strong>Phone Number:</strong> +91 9351945935</p>
                             <p className="text-gray-700 mb-2"><strong>Email:</strong> connect.weddinghues@gmail.com</p>
                             <p className="text-gray-700"><strong>Address:</strong> Jaipur-Delhi Highway, NH 11, Kukas, Rajasthan 302028</p>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Royalroom;

