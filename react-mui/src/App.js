import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Stack } from "@mui/system";
import useCustomCounter from "./hooks/CustomHooks";
function App() {
  const numbers = [10, 20, 30, 40, 50]
  
  return (
    <>
      <ul>
        {numbers.map((value, index)=> {return <li key={index}>index[{index}] - {value}</li>})}
      </ul>
    </>
  );
}

export default App;
