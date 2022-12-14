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

# DOM (Document Object Model)

---

- `Document`: 문서
- `Object`: 객체
- `Model`: 모델

## DOM 이란?

→**DOM(문서 객체 모델)** 은 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형 삭제할 수 있도록 돕는 인터페이스이다. 즉, 한마디로 `HTML 요소들의 구조화된 표현`이라고 할 수 있다.

## DOM 의 특성

- DOM은 HTML문서의 내용과 구조가 `객체 모델` 로 변화되어 다양한 프로그램에서 사용될 수 있다.
- HTML과는 다르게 DOM은 JS에 의해 수정될 수 있다.

# 웹페이지 빌드 프로세스 (CRP; Critical Rendering Path)

---

→ **브라우저**가 **서버**에서 페이지에 대한 HTML 응답을 받고 화면에 표시하기 전 여러 프로세스가 있다.

## 프로세스 순서
> ![image](https://user-images.githubusercontent.com/53039583/207474746-3378fe8b-1fb8-4181-ab24-d89f4d876425.png)
1. `(HTML, CSS) + JS` → 문서를 읽어들여서 Parsing 하고 어떤 내용을 page에 rendering 할 지 결정한다.
2. `Render Tree` → 브라우저가 `DOM`과 `CSSOM`을 결합하고 화면에 보이는 모든 내용과 style 정보를 포함하는 최종 **rendering tree** 를 출력한다. 즉, **화면에 표시되는 모든 노드의 콘텐츠 및 스타일 정보를 포함한다.**
3. `Layout` →  브라우저가 page에 표시되는 각 요소의 `크기`, `위치` 를 계산하는 단계이다.
4. `Paint` → 페인트 단계에 도달하면 브라우저는 `layout 결과`를 선택하고 `pixel`을 화면에 페인트 한다.
> ![image](https://user-images.githubusercontent.com/53039583/207474810-1579e1fd-3046-432f-b925-49a884a440cf.png)
