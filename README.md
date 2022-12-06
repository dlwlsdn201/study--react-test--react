# :mag: 테스팅을 하는 이유?

---

## 왜 어플리케이션을 TEST 해야 할까? 

→ 간단하게 더 안정적인 어플리케이션을 위해서는 여러 방법으로 테스트를 해줘야 더 안정적인 어플리케이션이 될 수 있기 때문이다.

## 테스팅으로 얻는 이점은 무엇일까?

1. `디버깅 시간을 단축`할 수 있다.
    
    → 만약 데이터가 잘못 나왔다면 그것이 UI의 문제인지 DB의 문제인지 등.. 전부 사용자가 직접 테스트를 진행하면서 찾아야 하는데 만약 테스트 환경이 구축되어 있다면, 자동화 된 Unit Testing으로 특정 버그를 쉽게 찾아 낼 수 있다.
    
2. `더욱 안정적인 어플리케이션`을 만들 수 있다.
    
    → 많은 테스트 코드와 함께 작성된 코드의 어플리케이션이 되기 때문에 훨씬 안정적인 어플리케이션을 만들 수 있다.
    
3. 그 외 `재설계 시간의 단축`, 기능 추가 및 고도화가 필요할 때 `더욱 용이하게 작업` 가능

# :mag: React Testing Library 란 ?

---

→ *React Component 를 Test 하는 가벼운 솔루션!*

React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM  Testing Library 위에 구축된다.

DOM Testing Library란 DOM Node 를 테스트하기 위한 매우 가벼운 솔루션이다.

Create React App 으로 생성된 프로젝트는 즉시 React Testing Library를 지원하는데, 그렇지 않은 경우 다음과 같이 npm을 통해 따로 설치할 수 있다.

```bash
$npm install --save-dev @testing-library/react
```

### Enzyme

→ 구현 주도 테스트

### React Testing Library

→ 행위 주도 테스트
