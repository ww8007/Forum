import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readComment, unloadComment } from '../../modules/comment';
import PostCommentList from '../../components/post/PostCommentList';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
const PostCommentContainer = ({ match }) => {
  const { postId } = match.params;
  const { comment, user, data } = useSelector(({ comment, user }) => ({
    comment: comment.comment,
    user: user.user,
    data: comment.data,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  useEffect(() => {
    dispatch(readComment(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadComment());
    };
  }, [dispatch]);

  return (
    <PostCommentList
      comment={comment}
      // onToggle={onToggle}
      postId={postId}
      data={data}
      user={user}
    ></PostCommentList>
  );
};

export default withRouter(PostCommentContainer);
