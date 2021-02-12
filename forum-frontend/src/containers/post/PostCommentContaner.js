import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  insert,
  remove,
  setOriginalPost,
  toggle,
  updateComment,
} from '../../modules/comment';
import PostCommentList from '../../components/post/PostCommentList';
const PostCommentContaner = () => {
  const { comments, user, selectComment } = useSelector(
    ({ comment, user }) => ({
      comments: comment.comments,
      user: user.user,
      selectComment: comment.selectComment,
    }),
  );
  const dispatch = useDispatch();
  const onInsert = useCallback((comment) => dispatch(insert(comment)), [
    dispatch,
  ]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onSearch = useCallback(
    (comment) => dispatch(setOriginalPost(comment)),
    [dispatch],
  );
  const onUpdate = useCallback(
    ({ id, comment }) => dispatch(updateComment({ id, comment })),
    [dispatch],
  );

  return (
    <PostCommentList
      comments={comments}
      onRemove={onRemove}
      onInsert={onInsert}
      onSearch={onSearch}
      onToggle={onToggle}
      onUpdate={onUpdate}
      user={user}
      selectComment={selectComment}
    ></PostCommentList>
  );
};

export default React.memo(PostCommentContaner);
