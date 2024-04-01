import './App.css'
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import {useState, useEffect, useRef} from "react";
import Even from "./components/Even.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    //1. 마운트 : 탄생
    useEffect(() => {
        console.log("mount");
        //최초만 실행됨
    }, []);

    //2. 업데이트 : 변화, 리랜더링
    useEffect(() => {
        //랜더링될 때마다

        if(!isMount.current){
            isMount.current = true;

            return;
        }

        console.log("update");
    });

    //3. 언마운트 : 죽음

    useEffect(() => {
        console.log(`count : ${count} / input :  ${input}`);
    }, [count, input]);
    //의존성배열

    const onClickButton = (value) => {
        setCount(count + value);
    }

  return (
    <div className="App">
        <h1>Simple Counter</h1>
        <section>
            <input
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            ></input>
        </section>
        <section>
            <Viewer count={count}></Viewer>
            {count%2===0? <Even></Even>:null}
        </section>
        <section>
            <Controller onClickButton={onClickButton}></Controller>
        </section>
    </div>
  )
}

export default App
