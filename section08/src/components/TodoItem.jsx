import "./TodoItem.css"
import {memo, useContext} from "react";
import {TodoDispatchContext} from "../App.jsx";

const TodoItem = ({id, isdone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

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