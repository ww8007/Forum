import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../components/Comment';
import CreateComment from '../components/CreateComment';
import {
  changeFiled,
  initialize,
  writeComment,
  deleteComment,
} from '../modules/comment';

const CommentContainer = () => {
  const dispatch = useDispatch();
  const { loading, comment, body, error } = useSelector(
    ({ loading, comment }) => ({
      loading: loading['comment/READ_COMMENT'],
      body: comment.body,
      comment: comment.comment,
      error: comment.error,
    }),
  );

  const onPublish = () => {
    dispatch(writeComment({ body }));
  };

  const onDelete = () => {
    dispatch(deleteComment(2));
  };

  const onChangeFiiled = useCallback(
    (payload) => dispatch(changeFiled(payload)),
    [dispatch],
  );
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <>
      <CreateComment
        onChangeField={onChangeFiiled}
        onCreate={onPublish}
        comment={comment}
        onDelete={onDelete}
      ></CreateComment>
      <Comment comments={comment} error={error} loading={loading}></Comment>
    </>
  );
};

export default CommentContainer;
