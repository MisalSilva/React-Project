import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Welcome from './Welcome';
import Partone from './components/Partone';




// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
      
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

function App() {
  return (
    <div> 
      {/* <Welcome/> */}
      <Partone/>
    </div>
     
  );

}
export default App;
