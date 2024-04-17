import './App.css'
import {useReducer, useRef, createContext} from "react";
import {Routes, Route} from "react-router-dom";
import Diary from "./pages/Diary.jsx";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import NotFound from "./pages/NotFound.jsx";
import Edit from "./pages/Edit.jsx";

const mockData = [
    {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "내용"
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "내용"
    }
];

function reducer(state, action){
    switch (action.type){
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item)=> item.id === action.data.id ? action.data : item);
        case "DELETE":
            return state.filter((item)=> String(item.id) !== String(action.id));
        default:
            return state;
    }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content
            }
        })
    };

    const onUpdate = (id, createdDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionId,
                content
            }
        })
    };

    const onDelete = (id) => {
        dispatch({
            type: "UPDATE",
            id: id
        })
    };

  return (
      <>
          <button onClick={()=>{
              onCreate(new Date().getTime(), 1, "HELLO");
          }}></button>
          <button onClick={()=>{
              onUpdate(1, new Date().getTime(), 3, "수정");
          }}></button>
          <button onClick={()=>{
              onDelete(1);
          }}></button>
          <DiaryStateContext.Provider value={data}>
              <DiaryDispatchContext.Provider value={{
                  onCreate,
                  onUpdate,
                  onDelete
              }}>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/new" element={<New/>}/>
                  <Route path="/edit/:id" element={<Edit/>}/>
                  <Route path="/diary/:id" element={<Diary/>}/>
                  <Route path="*" element={<NotFound/>}></Route>
              </Routes>
              </DiaryDispatchContext.Provider>
          </DiaryStateContext.Provider>

      </>
  )
}

export default App
