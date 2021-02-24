import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readComment, unloadComment } from '../../modules/comment';
import PostCommentList from '../../components/post/PostCommentList';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import { initialize, writeComment } from '../../modules/commentwrite';
const PostCommentContainer = ({ match }) => {
  const { postId } = match.params;
  const { comment, data, user, contents, pk } = useSelector(
    ({ comment, user, commentwrite }) => ({
      comment: comment.comment,
      data: comment.data,
      user: user.user,
      contents: commentwrite.contents,
      pk: 3,
    }),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    dispatch(initialize());
    return () => {
      dispatch(initialize());
    };
  }, [dispatch, postId]);

  // 댓글 쓰기
  const onPublish = () => {
    dispatch(writeComment({ pk, contents }));
  };

  // 댓글 읽어오기
  useEffect(() => {
    dispatch(readComment(postId));
    console.log('comment id : ', postId);
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadComment());
    };
  }, [dispatch, postId]);

  return (
    <PostCommentList
      comment={comment}
      // onToggle={onToggle}
      onPublish={onPublish}
      postId={postId}
      data={data}
      user={user}
    ></PostCommentList>
  );
};

export default withRouter(PostCommentContainer);
