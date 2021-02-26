import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteComment,
  readComment,
  unloadComment,
  readRecomment,
} from '../../modules/comment';
import PostCommentList from '../../components/post/PostCommentList';
import { withRouter } from 'react-router-dom';
import {
  initialize,
  writeComment,
  writeReComment,
} from '../../modules/commentwrite';
const PostCommentContainer = ({ match }) => {
  const { postId } = match.params;
  const { comment, data, user, content, pk, recommentdata } = useSelector(
    ({ comment, user, commentwrite }) => ({
      comment: comment.comment,
      data: comment.data,
      user: user.user,
      content: commentwrite.content,
      pk: postId,
      recommentdata: comment.recommentdata,
    }),
  );

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    dispatch(initialize());
    // 댓글 읽어오기
    dispatch(readComment(postId));
    return () => {
      dispatch(initialize());
      dispatch(unloadComment());
    };
  }, [dispatch, pk, content, postId]);

  // 댓글 쓰기
  const onPublish = ({ content }) => {
    dispatch(writeComment({ pk, content }));
    //댓글 읽어오기
    dispatch(readComment(postId));
  };
  const onWriteRecomment = ({ pk, content }) => {
    dispatch(writeReComment({ pk, content }));
    dispatch(readRecomment(pk));
  };
  // 대댓글 읽어오기
  const onClickRe = ({ id }) => {
    console.log('id값은', id);
    dispatch(readRecomment(id));
  };
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
      recommentdata={recommentdata}
      onWriteRecomment={onWriteRecomment}
      onClickRe={onClickRe}
    ></PostCommentList>
  );
};

export default withRouter(PostCommentContainer);
