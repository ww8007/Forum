import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { insert, remove, setOriginalPost, toggle } from '../../modules/comment';
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

  const onSearch = useCallback((id) => dispatch(setOriginalPost(id)), [
    dispatch,
  ]);

  return (
    <PostCommentList
      comments={comments}
      onRemove={onRemove}
      onInsert={onInsert}
      onSearch={onSearch}
      user={user}
      selectComment={selectComment}
    ></PostCommentList>
  );
};

export default React.memo(PostCommentContaner);
