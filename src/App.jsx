import React from "react";
import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

function App(){
  return(
    <div>
      <Info />
      <div className="inbout">
        <About /> 
        <Interest />
        <Footer />
      </div>
    </div>
  )
}

export default App;
