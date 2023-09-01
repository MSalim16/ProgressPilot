import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react'
import './App.css'

//pages 

import LogOnPage from "./pages/LogOnPage"
import HomePage from "./pages/HomePage"


function App() {
  return (
<Routes>
  <Route path="/" element={<LogOnPage />} />
  <Route path="/homepage" element={<HomePage />} />
</Routes>
  );
}

export default App;