export default function TodoItem({
  id,
  title,
  content,
  isDone,
  setTodos,
}) {
  const onDeleteButton = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onToggleButton = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div style={divStyle}>
      <p>{title}</p>
      <p>{content}</p>
      <button onClick={onDeleteButton}>삭제</button>
      <button onClick={onToggleButton}>
        {!isDone ? "완료" : "취소"}
      </button>
    </div>
  );
}

const divStyle = {
  border: "1px solid",
  padding: "10px",
  marginBottom: "5px",
};
