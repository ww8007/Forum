import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { insert, remove } from '../../modules/comment';
import PostCommentList from '../../components/post/PostCommentList';
const PostCommentContaner = () => {
  const { comments, user } = useSelector(({ comment, user }) => ({
    comments: comment.comments,
    user: user.user,
  }));
  const dispatch = useDispatch();
  const onInsert = useCallback((comment) => dispatch(insert(comment)), [
    dispatch,
  ]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  return (
    <PostCommentList
      comments={comments}
      onRemove={onRemove}
      onInsert={onInsert}
      user={user}
    ></PostCommentList>
  );
};

export default React.memo(PostCommentContaner);
