import './App.css'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import NotFound from "./pages/NotFound.jsx";
import {getEmotionImage} from "./util/get-emotion-image.js";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";


function App() {
    const nav = useNavigate();

    const onClickButton = () => {
        nav("/new");
    };

  return (
      <>
          <Header
            title={"Header"}
            leftChild={<Button text={"Left"}/>}
            rightChild={<Button text={"Right"}/>}
          ></Header>
          <Button
            text={"123"}
            type={"DEFAULT"}
            onClick={() => {
                console.log("123");
            }}
          ></Button>

          <Button
              text={"123"}
              type={"POSITIVE"}
              onClick={() => {
                  console.log("123");
              }}
          ></Button>

          <Button
              text={"123"}
              type={"NEGATIVE"}
              onClick={() => {
                  console.log("123");
              }}
          ></Button>

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
