1. yarn add react-router-dom

### 개발 시작

처음에는 라우터 설정하는게 좋음
src/pages 디렉토리 생성
5개의 페이지 생성후

- BrowserRouter로 감싸기

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

그 뒤에 App.js에 모든 라우터들을 연동시켜준다.

- path에 배열을 넣어서 사용 가능
  책 724쪽

### 스타일 설정

styled-components 이용

### 리덕스 적용

비동기 작업은 redux-saga
yarn add redux react-redux redux-actions immer redux-devtools-extension

rootReducer와 reducer생성 후 index.js 에서 모든 설정 파일과 스토어 설정 완료

## 회원가입과 로그인 구현

### UI

구현은 알아서

### 페이지에 type 부여하여서 login/register ? 구문으로 비교

파일 자동 저장 잘하기

### 리덕스로 폼 상태 관리하기
