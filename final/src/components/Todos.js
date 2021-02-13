import React, { useState } from 'react';

const TodosItem = ({ todo, onRemove, onToggle, onReInsert }) => {
  const { id, text } = todo;
  const [texts, setTexts] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onReInsert(texts);
    setTexts('');
  };
  const onChanges = (e) => {
    setTexts(e.target.value);
  };
  return (
    <>
      <input
        type="checkbox"
        checked={todo.done}
        onClick={() => onToggle(todo.id)}
      />
      {todo.text}
      {todo.done ? <input value={texts} onChange={onChanges}></input> : null}
      <button onClick={() => onReInsert(texts)}>수정</button>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
      <br />
    </>
  );
};

const Todos = ({ todos, onToggle, onRemove, onInsert, onReInsert }) => {
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
            onReInsert={onReInsert}
          />
        ))}
      </div>
    </>
  );
};

export default Todos;
