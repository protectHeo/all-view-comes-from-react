import "./TodoItem.css"

const TodoItem = ({id, isdone, content, date, onUpdate, onDelete}) => {

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

export default TodoItem;