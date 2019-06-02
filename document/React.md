# My docs about React

### [이전 React 정리 사이트로 이동하기]

---

## 이번 React 정리 내용

### Hooks

![Hooks](https://images.velog.io/post-images/velopert/4e8a60f0-da84-11e8-8483-39fd55313fb0/reacthooks.png)

> `Hooks`는 리액트 v16.8 에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태 관리를 할 수 있는 `useState`, 렌더링 직후 작업을 설정하는 `useEffect` 등의 기능 등을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줍니다.

#### useState

> 가장 기본적인 `Hook` 로써 함수형 컴포넌트에서 가변적인 상태를 구현할 수 있도록 도와준다.

```JS
import React, { useState } from 'react';

// const [variableName, setvariableName] = useState(defaultValue);
const [zero, setZero] = useState(0);

console.log(zero); // 0
setZero(10);

console.log(zero); // 10
```

#### useEffect

> `useEffect` 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 `Hook` 입니다. 클래스형 컴포넌트의 `componentDidMount` 와 `componentDidUpdate` 를 합친 형태로 보아도 괜찮다.

```JS
import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
  });

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    (...)
  );
};

export default Info;
```

##### ※ 가장 처음 렌더링 될 때에만 실행하기

```JS
  useEffect(() => {
    console.log('마운트 될 때만 실행됩니다.');
  }, []);
```

> useEffect 2번째 인자 값으로 `[ ]` 를 넣어준다.

##### ※ 특정 값이 변경 될 때만 실행하기

```JS
  useEffect(() => {
    console.log(name);
  }, [name]);
```

> useEffect 2번째 인자 값으로 `[ ]` 안에 해당 값을 넣어준다.

##### ※ 마운트 & 언마운트 구분하여 실행하기

```JS
  useEffect(() => {
    console.log('effect');      // 마운트 부분
    console.log(name);
    return () => {
      console.log('cleanup');   // 언마운트 부분
      console.log(name);
    };
  });
```

> `useEffect` 의 `return` 값으로 넣어준다.

###### Reference : [velopert - 리액트의 Hooks 완벽 정복하기]

### Presenter and Container

> React 디자인 패턴 중 하나이고 대중적인 축에 속한다. 이 패턴의 특징을 간단하게 설명해서 `Container` 의 특징은 state 이해, api, redux, grapql 등을 부르고 전체적인 프로세스의 흐름(?)을 표현하고, `Presenter` 는 `props` 와 `state` 의 따라서 데이터의 변화를 표현해준다. 쉽게 데이터와 데이터의 출력을 분리 한다고 볼 수도 있다.

###### Reference : [리액트 디자인 패턴 react design pattern]

### WithRouter

> `Component` 에서 `Router` 에 접근하는 방법 중 하나이다. 또한 쉽게 설명하자면 `withRouter` 는 주로 **history에 접근하여 컴포넌트에서 라우터를 조작하는 데 사용합니다.**

### Switch

```JS
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
```

> 스위치는 라우터들을 묶은 다음, 가장 먼저 path에 매치되는 Route에 연결시킵니다.

###### Reference: [리액트 라우터 v4의 switch 알아보기]

<!-- Reference Connection Link List -->

[이전 react 정리 사이트로 이동하기]: https://github.com/engus93/ReactJS_Movie_App/tree/master/document
[velopert - 리액트의 hooks 완벽 정복하기]: https://velog.io/@velopert/react-hooks
[리액트 디자인 패턴 react design pattern]: https://dev-yong.tistory.com/12
[리액트 라우터 v4의 switch 알아보기]: https://justmakeyourself.tistory.com/entry/react-router-dom-switch
