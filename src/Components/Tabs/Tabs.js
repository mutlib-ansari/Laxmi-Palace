// import React from 'react'
// import frame from '../Assests/frame3.png'
// import { Collapse, Divider } from 'antd';
// import arrow from '../Assests/rightarrow.png'
// import mask1 from '../Assests/m5.png'

// // const text = `
// //   A dog is a type of domesticated animal.
// //   Known for its loyalty and faithfulness,
// //   it can be found as a welcome guest in many households across the world.
// // `;

// function Tabs() {
//   return (
//     <div className='flex container mx-auto w-full max-w-[1280px] '>
//       <div className='w-2/5'>
//         <img src={frame}
//           className=''
//         />

//       </div>
//       <div style={{ backgroundImage: `url(${mask1})` }} className='w-3/5 bg-cover'>
//         <span className="text-lg font-forum text-amber-800 " >FREQUENTLY ASKED QUESTIONS</span>
//         <h2 className='font-forum text-[60px] leading-[70px]  text-gray-800s mt-3'>Our Expert Answers</h2>
//         <p className='font-forum text-amber-950 mt-6 pr-44' >Zenean sed rutrum purus. Nunc nec magna laoreet, sodales nisi at, co rutrum viverra. Nunc nec magna aculis metus libero vehiculaNullam iaculis metus nehicula</p>
//         <div className='w-3/4'>
//           <Collapse className='mt-5  p-3'
//             expandIcon={({ isActive }) => (
//               <img
//                 src={arrow}
//                 alt="Right Arrow"
//                 className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90' : ''
//                   }`}
//               />
//             )}
//             items={[
//               {
//                 key: '1',
//                 label: (<h3 className='font-forum text-amber-950'>'What Do You Get For Beverages?'</h3>),
                
//                 children: (
//                   <p className='font-forum text-amber-950'>
//                     Sed turpis tincidunt id aliquet. Lobortis scelerisque fermentum
//                     dui faucibus. Convallis tellus id Sed turpis tincidunt id
//                     aliquet. Lobortis scelerisque fermentum dui faucibus. Convallis
//                     tellus id interdum velit laoreet. Pulvinar mattis nunc sed
//                     blandit libero.
//                   </p>
//                 ),
//               },
//             ]}
//           />

//           <Collapse className='mt-5   p-3'
//             expandIcon={({ isActive }) => (
//               <img
//                 src={arrow}
//                 alt="Right Arrow"
//                 className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90' : ''
//                   }`}
//               />
//             )}
//             items={[
//               {
//                 key: '1',
//                 label: (<h3 className='font-forum text-amber-950'>'What Do You Get For Beverages?'</h3>),
//                 children: (
//                   <p>
//                     Sed turpis tincidunt id aliquet. Lobortis scelerisque fermentum
//                     dui faucibus. Convallis tellus id Sed turpis tincidunt id
//                     aliquet. Lobortis scelerisque fermentum dui faucibus. Convallis
//                     tellus id interdum velit laoreet. Pulvinar mattis nunc sed
//                     blandit libero.
//                   </p>
//                 ),
//               },
//             ]}
//           />




//           <Collapse className='mt-5 p-3'
//             expandIcon={({ isActive }) => (
//               <img
//                 src={arrow}
//                 alt="Right Arrow"
//                 className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90' : ''
//                   }`}
//               />
//             )}
//             items={[
//               {
//                 key: '1',
//                 label: (<h3 className='font-forum text-amber-950'>'What Do You Get For Beverages?'</h3>),
//                 children: (
//                   <p>
//                     Sed turpis tincidunt id aliquet. Lobortis scelerisque fermentum
//                     dui faucibus. Convallis tellus id Sed turpis tincidunt id
//                     aliquet. Lobortis scelerisque fermentum dui faucibus. Convallis
//                     tellus id interdum velit laoreet. Pulvinar mattis nunc sed
//                     blandit libero.
//                   </p>
//                 ),
//               },
//             ]}
//           />

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Tabs



import React from 'react';
import frame from '../Assests/frame3.png';
import { Collapse } from 'antd';
import arrow from '../Assests/rightarrow.png';
import mask1 from '../Assests/m5.png';

function Tabs() {
  return (
    <div className="container mx-auto w-full max-w-[1280px] flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Section - Image */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-start">
        <img src={frame} alt="Frame" className="w-full md:w-full"/>
      </div>
   


      {/* Right Section - FAQ */}
      <div
        style={{ backgroundImage: `url(${mask1})` }}
        className="w-full md:w-3/5 bg-cover p-6 md:p-10"
      >
        <span className="text-sm md:text-lg font-forum text-amber-800 block">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="font-forum text-2xl md:text-5xl leading-tight text-gray-800 mt-3">
          Our Expert Answers
        </h2>
        <p className="font-forum text-sm md:text-base text-amber-950 mt-6 pr-0 md:pr-16 leading-relaxed">
          Zenean sed rutrum purus. Nunc nec magna laoreet, sodales nisi at, co
          rutrum viverra. Nunc nec magna aculis metus libero vehiculaNullam
          iaculis metus nehicula
        </p>
        <div className="mt-8 space-y-4">
          {/* Collapse Items */}
          {[
            'What Do You Get For Beverages?',
            'How Can You Book a Room?',
            'What Are the Check-in and Check-out Policies?',
          ].map((label, index) => (
            <Collapse
              key={index}
              className="p-3"
              expandIcon={({ isActive }) => (
                <img
                  src={arrow}
                  alt="Right Arrow"
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'rotate-90' : ''
                  }`}
                />
              )}
              items={[
                {
                  key: '1',
                  label: (
                    <h3 className="font-forum text-base md:text-lg text-amber-950">
                      {label}
                    </h3>
                  ),
                  children: (
                    <p className="font-forum text-sm md:text-base text-amber-950">
                      Sed turpis tincidunt id aliquet. Lobortis scelerisque
                      fermentum dui faucibus. Convallis tellus id Sed turpis
                      tincidunt id aliquet. Lobortis scelerisque fermentum dui
                      faucibus. Convallis tellus id interdum velit laoreet.
                      Pulvinar mattis nunc sed blandit libero.
                    </p>
                  ),
                },
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
