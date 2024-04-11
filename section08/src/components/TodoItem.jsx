import "./TodoItem.css"
import {memo, useContext} from "react";
import {TodoContext} from "../App.jsx";

const TodoItem = () => {
    const {id, isdone, content, date, onUpdate, onDelete} = useContext(TodoContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
      onDelete(id);
    };

    return <div className={"TodoItem"}>
        <input
            type={"checkbox"}
            checked={isdone}
            onChange={onChangeCheckbox}
        />
        <div className={"content"}>{content}</div>
        <div className={"date"}>{new Date(date)}</div>
        <button
            onClick={onClickDeleteButton}
        >삭제</button>
    </div>;
}

export default memo(TodoItem, (prevProps, nextProps) => {
    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isdone !== nextProps.isdone) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;

    return true;
});