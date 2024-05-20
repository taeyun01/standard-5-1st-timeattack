import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const createTodo = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      return alert("제목과 내용을 입력해주세요.");
    }
    const newTodo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    };

    setTodos((prev) => [...prev, newTodo]);

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <hr />
      <form onSubmit={createTodo}>
        제목 :{" "}
        <input type="text" value={title} onChange={onTitleChange} />
        내용 :{" "}
        <input
          type="text"
          value={content}
          onChange={onContentChange}
        />
        <button>추가</button>
      </form>
      <hr />
    </div>
  );
}
