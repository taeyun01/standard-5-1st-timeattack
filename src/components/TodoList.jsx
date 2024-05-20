import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos, isDone }) {
  return (
    <div>
      <h2>{!isDone ? "Working..!" : "Done..!"}</h2>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => (
          <TodoItem key={todo.id} {...todo} setTodos={setTodos} />
        ))}
    </div>
  );
}
