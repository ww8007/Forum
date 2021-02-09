import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, toggle, remove, insert } from '../modules/todos';
const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
    dispatch,
  ]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onToggle={onToggle}
      onRemove={onRemove}
      onInsert={onInsert}
    ></Todos>
  );
};

export default React.memo(TodosContainer);
