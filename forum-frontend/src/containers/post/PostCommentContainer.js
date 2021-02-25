import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteComment,
  readComment,
  unloadComment,
} from '../../modules/comment';
import PostCommentList from '../../components/post/PostCommentList';
import { withRouter } from 'react-router-dom';
import { initialize, writeComment } from '../../modules/commentwrite';
const PostCommentContainer = ({ match }) => {
  const { postId } = match.params;
  const { comment, data, user, content, pk } = useSelector(
    ({ comment, user, commentwrite }) => ({
      comment: comment.comment,
      data: comment.data,
      user: user.user,
      content: commentwrite.content,
      pk: postId,
    }),
  );

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    dispatch(initialize());
    dispatch(readComment(postId));
    return () => {
      dispatch(initialize());
      dispatch(unloadComment());
    };
  }, [dispatch, pk, content, postId]);

  // 댓글 쓰기
  const onPublish = ({ content }) => {
    dispatch(writeComment({ pk, content }));
    dispatch(readComment(postId));
  };

  // 댓글 읽어오기

  // // 댓글 삭제하기
  // let is = 'hihi';
  const onRemove = ({}) => {
    console.log('댓글 삭제 pk:');
    dispatch(deleteComment({}));
  };

  return (
    <PostCommentList
      comment={comment}
      // onToggle={onToggle}
      onPublish={onPublish}
      onRemove={onRemove}
      postId={postId}
      data={data}
      user={user}
    ></PostCommentList>
  );
};

export default withRouter(PostCommentContainer);
