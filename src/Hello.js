/*리액트 컴포넌트 생성시 불러와줘야 함*/
import React from "react";

/*리액트 컴포넌트는 함수 형태(아래) or 클래스 형태로 작성할 수 있다.
  리액트 컴포넌트에서는 XML 값을 반환해줄 수 있는데 이를 JSX라고 부른다.*/
function Hello() {
  return <div>안녕하세요</div>;
}

/* Hello라는 컴포넌트를 내보내겠다.*/
export default Hello;
