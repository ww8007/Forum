import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      ></span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.prventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" value={input} onChange={onChange} />
          <button type="submit">등록</button>
        </form>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default Todos;
