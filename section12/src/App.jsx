import './App.css'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    const nav = useNavigate();

    const onClickButton = () => {
        nav("/new");
    };

  return (
      <>
        <div>
            <Link to={"/"}>home</Link>
            <Link to={"/new"}>new</Link>
            <Link to={"/diary"}>diary</Link>
        </div>
        <button onClick={onClickButton}>New페이지로 이동</button>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<New/>} />
            <Route path="/diary/:id" element={<Diary/>} />
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </>
  )
}

export default App
