import React from "react";
import Dropdown from "./components/menu";

const App = () => {
  const menuOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="App" 
         style={
          { display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center'}}>
      <h1>Dropdown Menu</h1>
      <Dropdown label="Select an Option" options={menuOptions} />
    </div>
  );
};

export default App;
