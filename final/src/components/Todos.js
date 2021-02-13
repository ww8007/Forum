import React, { useState } from 'react';

const TodosItem = ({ todo, onRemove, onToggle, onReInsert }) => {
  const { id } = todo;
  const [text, setTexts] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(texts);
    // console.log('id:', todo.id);
    console.log('text-in-com', id, text);
    onReInsert({ id, text });
    setTexts('');
  };
  const onChanges = (e) => {
    setTexts(e.target.value);
    console.log(e.target);
  };

  return (
    <>
      <input
        type="checkbox"
        onClick={() => {
          onToggle(todo.id);
          console.log('안녕', id);
        }}
      />
      <form onSubmit={onSubmit}>
        {todo.text}
        {todo.done ? <input value={text} onChange={onChanges}></input> : null}
        <button type={'submit'}>수정</button>
        <button onClick={() => onRemove(todo.id)}>삭제</button>
        <br />
      </form>
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
