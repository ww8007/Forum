import React, { useCallback, useEffect } from 'react';
import Editor from '../../components/write';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const onChagneField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  //언마운트 될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <Editor onChagneField={onChagneField} title={title} body={body}></Editor>
  );
};

export default EditorContainer;
