import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { insert, remove, toggle } from '../modules/todos';
import Todos from '../components/Todos';
const TodosContainer = () => {
  const { todos } = useSelector(({ todos }) => ({
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  return (
    <Todos
      todos={todos}
      onToggle={onToggle}
      onInsert={onInsert}
      onRemove={onRemove}
    ></Todos>
  );
};

export default React.memo(TodosContainer);
