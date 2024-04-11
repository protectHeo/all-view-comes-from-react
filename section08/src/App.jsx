import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import {useState, useRef, useReducer, useCallback, createContext, useMemo} from "react";
import {act} from "react-dom/test-utils";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime()
    },{
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime()
    },{
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime()
    }
];

function reducer(state, action){
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map(
                (item)=>
                    item.id === action.targetId
                        ? {...item, isDone: !item.isDone}
                        : item
            );
        case "DELETE":
            return state.filter((item)=> item.id !== action.targetId);
        default:
            return state;
    }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime()
            }
        });
    };

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId
        });
    }, []);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId
        });
    }, []);

    const memorizedDispatch = useMemo(()=>{
        return {onCreate, onUpdate, onDelete};
    }, [])

    return <div className="App">
        <Header></Header>
        <TodoStateContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={memorizedDispatch}>
                <Editor></Editor>
                <List></List>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>


    </div>;
}

export default App
