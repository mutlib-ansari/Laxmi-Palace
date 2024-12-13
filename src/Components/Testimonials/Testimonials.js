import React from "react";
import img1 from '../Assests/testiminial.png.png'
import img2 from '../Assests/testimonial2.jpg.png'
import img3 from '../Assests/testimonial3.jpg.png'
import bg from '../Assests/m5.png'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sacha Stevone",
      role: "Designer",
      image: [img1],
      text: "Praesent tempus risus, eget bortis metus convallis con Pellentesq ue ullamcorper eros a lectuctut. Sed imperdiet dignissim.",
      rating: 5,
    },
    {
      id: 2,
      name: "Tad Armstrong",
      role: "CEO",
      image: [img2], 
      text: "Sed imperdiet dignissim nislm bibe ndum. Praesent tempus risus, eget bortis metus convallis con Pellentesq ue ullamcorper.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessi Pinkman",
      role: "Racer",
      image: [img3], 
      text: "Cellentesq ue ullamcorper eros a lectuctut. Sed imperdiet dignissim nislm bibe ndum. Praesent tempus risus, eget bortis.",
      rating: 5,
    },
  ];

  return (
    <section style={{ backgroundImage: `url(${bg})` }}  className="bg-cream py-16 px-6 bg-no-repeat bg-left-top">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg font-serif text-amber-800">Testimonial</h2>
        <h3 className="font-serif text-[60px] leading-[70px]  text-amber-950">Happy Customer Thoughts</h3>
        <p className="font-serif text-amber-950 mt-4">
          Nunc nec magna acilis metus libero vehiculabibulum inisis metus vehicula. Arenten sed rutrum purus. 
          Nunc nec magna bottet, vehida et ris, et rutrum viverra.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-customBeige shadow-md rounded-lg p-6 flex flex-col items-center "
            >
              <p className="text-gray-600 mb-4 text-sm text-center">{testimonial.text}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-1">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="text-yellow-500">&#9733;</span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
