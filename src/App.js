import colorNames from "colornames";
import Box from "./Box";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [colorValue, setcolorValue] = useState("");
  const [hexValue,   setHexValue]   = useState("");

  const handleColor = (e) => {
    setcolorValue(e.target.value);
    setHexValue(colorNames(e.target.value) || "")
  };

  return (
    <div className="App">
      <Box 
        colorValue={colorValue} 
        hexValue={hexValue}
      />
      <Input 
        handleColor={handleColor}
      />
    </div>
  );
}

export default App;
