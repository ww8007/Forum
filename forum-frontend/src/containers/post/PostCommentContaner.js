import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readComment, unloadComment } from '../../modules/comment';
import PostCommentList from '../../components/post/PostCommentList';
const PostCommentContaner = ({ match }) => {
  const { comments, user, data } = useSelector(({ comment, user }) => ({
    comments: comment.comments,
    user: user.user,
    data: comment.data,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readComment(1));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadComment());
    };
  }, [dispatch]);

  return (
    <PostCommentList
      comments={comments}
      // onToggle={onToggle}
      data={data}
      user={user}
    ></PostCommentList>
  );
};

export default React.memo(PostCommentContaner);
