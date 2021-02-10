import React, { useState } from 'react';

const TodosItem = ({ todo, onRemove, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onClick={() => onToggle(todo.id)}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({ todos, onToggle, onRemove, onInsert }) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(text);
    setText('');
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          placeholder="내용입력"
          onChange={onChange}
        />
        <button type={'submit'}>등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodosItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
};

export default Todos;
