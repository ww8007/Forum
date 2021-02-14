import React, { useState } from 'react';

const PostRecommentItem = ({ recomment, onRecomment }) => {
  const { id } = recomment;
  const [text, setText] = useState('');
  const [set, onSet] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    onRecomment(id, text);
    setText('');
  };
  return <div>{recomment.text}</div>;
};

export default PostRecommentItem;
