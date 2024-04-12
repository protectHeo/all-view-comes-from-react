import './App.css'
import {Routes, Route} from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<New/>} />
      <Route path="/diary" element={<Diary/>} />
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App
