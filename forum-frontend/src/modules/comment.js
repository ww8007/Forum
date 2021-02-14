import { createAction, handleActions } from 'redux-actions';

const INSERT = 'comment/INSERT';
const REMOVE = 'comment/REMOVE';
const SET_ORIGINAL_COMMENT = 'comment/SET_ORIGINAL_COMMENT';
// const TOGGLE = 'comment/TOGGLE';
const UPDATE_COMMNET = 'comment/UPDATE_COMMENT';
const RECOMMENT = 'commnet/RECOMMENT';
let id = 3;

export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  postDate: new Date().toLocaleDateString(),
  edit: false,
  recomment_id: 0,
  recomments: [{ id: null, text: null }],
}));
export const remove = createAction(REMOVE, (id) => id);
export const setOriginalPost = createAction(SET_ORIGINAL_COMMENT, (id) => id);
// export const toggle = createAction(TOGGLE, (id) => id);
export const updateComment = createAction(UPDATE_COMMNET, ({ id, text }) => ({
  id,
  text,
}));
export const recomment = createAction(RECOMMENT, ({ id, text }) => ({
  id,
  text,
}));

const initialState = {
  comments: [
    {
      id: 1,
      text: '정말 잘 봤어요!',
      postDate: new Date().toLocaleDateString(),
      edit: false,
      recomment_id: 1,
      recomments: [
        {
          id: 1,
          text: '반가워요',
        },
      ],
    },
    {
      id: 2,
      text: '감사합니다.',
      postDate: new Date().toLocaleDateString(),
      edit: false,
      recomment_id: 0,
    },
  ],

  selectComment: null,
  commentError: null,
};

const comment = handleActions(
  {
    [INSERT]: (state, { payload: text }) => ({
      ...state,
      comments: state.comments.concat(text),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      comments: state.comments.filter((comment) => comment.id !== id),
    }),
    [SET_ORIGINAL_COMMENT]: (state, { payload: post }) => ({
      ...state,
      selectComment: state.comments.filter((search) => search.id === id),
      id: post.id,
      text: post.text,
      postDate: post.postDate,
    }),
    // [TOGGLE]: (state, { payload: id }) => ({
    //   ...state,
    //   comments: state.comments.map((post) =>
    //     post.id === id ? { ...post, edit: !post.edit } : post,
    //   ),
    // }),
    [UPDATE_COMMNET]: (state, { payload: { id, text } }) => ({
      ...state,
      comments: state.comments.map(
        (post) => (post.id === id ? { ...post, text: text } : post),
        console.log('id, text : ', id, text),
      ),
    }),
    [RECOMMENT]: (state, { payload: { id, text } }) => ({
      ...state,
      comments: state.comments.recomments.map(
        (post) => (post.id === id ? { ...post, text: text } : post),
        console.log('id, text : ', id, text),
      ),
    }),
  },
  initialState,
);

export default comment;
