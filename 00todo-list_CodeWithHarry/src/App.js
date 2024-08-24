import React from 'react';
import Footer from './MyComponents/Footer'; // Import the Footer component
import Header from './MyComponents/Header'; // Import the Header component
import Todos from './MyComponents/Todos'; // Import the Todos component

function App() {
  return (
    <div>
      <Header title="Ankit Mshra"/>{/* Used the Header component */}
      <Todos />{/* Main content goes here */}
      <Footer title="Ankit Mshra"/> {/* Used the Footer component */}
    </div>
  );
}
export default App