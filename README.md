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

### API 연동하기

yarn add axios redux-saga

### 헤더 컴포넌트 만들기

- 반응형 디자인을 위해서 크기 컴포넌트 만들어주고 그 다음에
  ...rest를 통해여 다른 이벤트들 전달

### 버튼에 LINK 추가하기

wiRouter를 이용하는 방법과 a테그를 이용하는 방법이 존재한다.
하지만 테그의 목적에 맞게 쓰는게 더 좋으므로 Link를 styledLink로 만들어서 사용

```jsx
const StyledLink = styled(Link)`
  ${buttonStyle}
`;
```

### 로그인 상태를 보여 주고 유지하기

로그인 성공시에 헤더 컴포넌트에서 로그인 중인 상태를 보여주고 새로고침에도 이 상태가 유지가 되도록함

### 로그인 상태 보여주기

user를 useSelector로 가져와서 사용

### 로그인 상태 유지하기

브라우저의 localStorage를 사용하여 가져옴
로그인 상태가 처음 랜더링 시에도 유지되고 싶다면 리엑트 앱이 브라우저에서 맨 처음에 랜더링 될때 localStorage에서 가져와야함
useEffect 사용 하거나 index.js(엔트리 파일)에서 처리하여도 됨

### 로그인 검증 실패 시 정보 초기화

로그인 정보가 만료되었을 때 대비하여 사용자 정보를 초기화 하는 작업

checkFailureSaga를 만들어서 사용한다
여기서는 제네레이터 함수를 만들어주지 않아도 괜찮다.

- saga에 꼭 yield를 넣지 않아도 된다.

### 로그아웃 기능 구현

로그아웃 api를 호출하여서 사용하면 된다.
localStorage 에 있는 유저 값을 없애주면 된다.

### 글쓰기

에디터
yarn add quill

### 에디터 하단 컴포넌트 UI 구성하기

### 리덕스로 글쓰기 상태 관리하기

### 날짜 나타내기

publishedData로 꼭 명시해서 사용해야 한다.
다른 이름으로 사용하면 오류 생김
이유는 아직은 모르겟음

### HTML 필터링 하기

yarn add sanitize-html
