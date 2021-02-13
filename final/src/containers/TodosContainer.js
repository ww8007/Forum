import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { insert, remove, toggle, reInsert } from '../modules/todos';
import Todos from '../components/Todos';
const TodosContainer = () => {
  const { todos } = useSelector(({ todos }) => ({
    todos: todos.todos,
  }));

  const dispatch = useDispatch();
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onReInsert = useCallback(
    ({ id, text }) => dispatch(reInsert({ id, text })),
    [dispatch],
  );
  return (
    <Todos
      todos={todos}
      onToggle={onToggle}
      onInsert={onInsert}
      onRemove={onRemove}
      onReInsert={onReInsert}
    ></Todos>
  );
};

export default React.memo(TodosContainer);
