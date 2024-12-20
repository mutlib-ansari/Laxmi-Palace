// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// import './App.css';
// import Dasbord from './Components/Dasbord/Dasbord';
// import Facilities from './Components/Facilities/Facilities';
// import Header from './Components/Header/Header'
// import Herosection from './Components/Herosection/Herosection';
// import Tabs from './Components/Tabs/Tabs';
// import Sliderimage from './Components/Slider/Slider'
// import Testimonials from './Components/Testimonials/Testimonials';
// import Footer from './Components/Footer/Footer';
// import Header2 from './Components/Header2/Header2';
// import Royalroom from './Components/Pages/Royalroom';



// function App() {
//   return (

//     <div>
//       <Header2/>
//       <Header />
//       <Dasbord />
//       <Herosection />
//       <Facilities />
//       <Tabs />
//       <Sliderimage/>
//       <Testimonials/>
//       <Footer/>
//       <Royalroom/>




//     </div>

//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
// import './App.css';
// import Dasbord from './Components/Dasbord/Dasbord';
// import Facilities from './Components/Facilities/Facilities';
// import Header from './Components/Header/Header';
// import Herosection from './Components/Herosection/Herosection';
// import Tabs from './Components/Tabs/Tabs';
// import Sliderimage from './Components/Slider/Slider';
// import Testimonials from './Components/Testimonials/Testimonials';
// import Footer from './Components/Footer/Footer';
// import Header2 from './Components/Header2/Header2';

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Routes define which components should render for specific paths */}
//         <Routes>
//           <Route path="/" element={<Header2 />} />
//           <Route path="/Header" element={<Header />} />
//           <Route path="/dashboard" element={<Dasbord />} />
//           <Route path="/herosection" element={<Herosection />} />
//           <Route path="/facilities" element={<Facilities />} />
//           <Route path="/tabs" element={<Tabs />} />
//           <Route path="/slider" element={<Sliderimage />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//           <Route path="/footer" element={<Footer />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Router components
import './App.css';
import Dasbord from './Components/Dasbord/Dasbord';
import Facilities from './Components/Facilities/Facilities';
import Header from './Components/Header/Header';
import Herosection from './Components/Herosection/Herosection';
import Tabs from './Components/Tabs/Tabs';
import Sliderimage from './Components/Slider/Slider';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Header2 from './Components/Header2/Header2';
import Royalroom from './Components/Pages/Royalroom';

function App() {
  return (
    <Router>
      <div>
        <Header2 />
        <Routes>
          <Route path="/" element={<><Header /> <Dasbord /> <Herosection /> <Facilities /> <Tabs /> <Sliderimage /> <Testimonials /> </>} />
          <Route path="/Royalroom" element={ <Royalroom/>} />
          <Route path="/Herosection" element={<Herosection />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Tabs" element={<Tabs />} />
          <Route path="/Slider" element={<Sliderimage />} />
          <Route path="/Testimonials" element={<Testimonials />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


