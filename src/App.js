import axios from "axios";
import Characters from "./components/Characters";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "./redux/slices/characatersSlice";
import { Route, Routes } from "react-router-dom";
import Character from "./components/Characater";
function App() {
    
  let dispatch = useDispatch()


  useEffect(()=>{
    axios.get("https://hp-api.onrender.com/api/characters")
    .then(response => {
          dispatch(loadData(response.data))
    } )
    .catch()
  })

  return (


    <Routes>

      
      <Route path="/" element={<Characters />}/>
      <Route path="/:id" element={<Character />}/>

    </Routes>



  );
}

export default App;
