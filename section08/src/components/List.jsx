import "./List.css"
import TodoItem from "./TodoItem.jsx";
import {useState, useMemo, useContext} from "react";
import {TodoStateContext} from "../App.jsx";

const List = () => {
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }

        return todos.filter((todo) => {
           todo.content
               .toLowerCase()
               .includes(search);
        });
    };

    const filteredTodos = getFilteredData();

    // const getAnalyzedData = () => {
    //   const totalCount = todos.length;
    //   const doneCount = todos.filter(
    //       (todo) => todo.isDone
    //   ).length;
    //   const notDoneCount = totalCount - doneCount;
    //
    //   return {
    //     totalCount,
    //     doneCount,
    //     notDoneCount
    //   };
    // };

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        };
    }, [todos]);

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return <div className="List">
        <h4>Todo List💕</h4>
        <div>
            <div>totalCount : {totalCount}</div>
            <div>doneCount : {doneCount}</div>
            <div>notDoneCount : {notDoneCount}</div>
        </div>
        <input
            placeholder="검색어를 입력하세요"
            value={search}
            onChange={onChangeSearch}
        />
        <div className={"todos_wrapper"}>
            {todos.map((todo)=> {
                return <TodoItem
                    key={todo.id}
                    {...todo}
                ></TodoItem>
            })};
        </div>
    </div>;
};

export default List;