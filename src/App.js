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



// import { Slider } from 'antd';
import './App.css';
import Dasbord from './Components/Dasbord/Dasbord';
import Facilities from './Components/Facilities/Facilities';
import Header from './Components/Header/Header'
import Herosection from './Components/Herosection/Herosection';
import Tabs from './Components/Tabs/Tabs';
import Sliderimage from './Components/Slider/Slider'
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';



function App() {
  return (

    <div>
      <Header />
      <Dasbord />
      <Herosection />
      <Facilities />
      <Tabs />
      <Sliderimage/>
      <Testimonials/>
      <Footer/>



    </div>

  );
}

export default App;
