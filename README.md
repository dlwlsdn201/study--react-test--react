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

# :mag: Jest란?

→ Facebook 에서 개발한 `자바스크립트 테스팅 라이브러리`.
최소한의 설정으로 동작하면  Test case 를 만들어서 어플리케이션 코드가 잘 작동하는지 검사해준다.
주로 **단위 테스트**를 위해 사용한다.

## 환경 세팅

### 설치

```bash
# yarn 패키지 매니저를 사용할 경우
$yarn add jest --dev

# npm 패키지 매니저를 사용할 경우
$npm install jest --save-dev
```

### 스크립트

```json
// package.json
{
  "scripts": {
    "test": "jest", // 또는 "jest --watchAll" 
   },
}
```

### 테스트 파일 디렉터리

```bash
# 프로젝트 폴더 (root)

test/
	integration/ # 통합 테스트 파일 폴더
		- products.int.test.js
	unit/ # 유닛 테스트 파일 폴더
		- products.test.js
```

![image](https://user-images.githubusercontent.com/53039583/208230640-2c8e585e-969b-43a9-822e-9832847a488d.png)

![image](https://user-images.githubusercontent.com/53039583/208230646-60ef14bc-3f8c-4de4-81ad-c7f78e162ecf.png)

### 테스트 파일 코드 구조

![image](https://user-images.githubusercontent.com/53039583/208230654-6156e9ce-048d-4d90-8d93-1d0e560d70b0.png)

- `describe` : 여러 관련 테스트를 그룹화하는 블록을 만든다. (ex_ 과일)
- `it` : 개별 테스트를 수행하는 곳. 각 test를 작은 문장처럼 설명한다. (ex_ 바나나)
- `expect` : 값을 테스트할 때마다 사용된다. 그리고 expect  함수 혼자서는 거의 사용되지 않고, **matcher 와 함께 사용된다.**
- `matcher` : expect 에 대한 결과 도출을 위해 테스트 방식을 정의하는 함수
    
    ![image](https://user-images.githubusercontent.com/53039583/208230671-9ad88ea7-e64a-47b5-81ed-df3c11ee1992.png)
    
    ![image](https://user-images.githubusercontent.com/53039583/208230675-d605612c-7d37-4d17-904c-39f86b2e407e.png)
    
    ![image](https://user-images.githubusercontent.com/53039583/208230678-7292641b-4055-458b-89b7-c552452b769d.png)
    
- `render()` : DOM에 컴포넌트를 rendering 하는 함수. 인자 형식은 **react component**. ****

## React Testing Library  와 Jest 의 비교

→ React Testing Library 와는 다른 개념이기 때문에 보통 함께 사용한다.

- `Jest` : Test runner 이다.
- `React Testing Library(RTL)` : Test runner 를 위한 공간 (Virtual DOM) 을 제공한다.

### 예시

→ example 이라는 컴포넌트에서 버튼을 눌렀을 때 기능이 동작하는 지 테스트를 수행하는 상황일 때

- example 컴포넌트를 rendering 하고 컴포넌트에서 버튼을 찾는 것 → `RTL` 의 역할
- 버튼의 동작을 테스트하는 것 → `jest` 의 역할

# :mag:DOM (Document Object Model)

- `Document`: 문서
- `Object`: 객체
- `Model`: 모델

## DOM 이란?

→**DOM(문서 객체 모델)** 은 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형 삭제할 수 있도록 돕는 인터페이스이다. 즉, 한마디로 `HTML 요소들의 구조화된 표현`이라고 할 수 있다.

## DOM 의 특성

- DOM은 HTML문서의 내용과 구조가 `객체 모델` 로 변화되어 다양한 프로그램에서 사용될 수 있다.
- HTML과는 다르게 DOM은 JS에 의해 수정될 수 있다.

# :mag:웹페이지 빌드 프로세스 (CRP; Critical Rendering Path)

→ **브라우저**가 **서버**에서 페이지에 대한 HTML 응답을 받고 화면에 표시하기 전 여러 프로세스가 있다.

## 프로세스 순서
> ![image](https://user-images.githubusercontent.com/53039583/207474746-3378fe8b-1fb8-4181-ab24-d89f4d876425.png)
1. `(HTML, CSS) + JS` → 문서를 읽어들여서 Parsing 하고 어떤 내용을 page에 rendering 할 지 결정한다.
2. `Render Tree` → 브라우저가 `DOM`과 `CSSOM`을 결합하고 화면에 보이는 모든 내용과 style 정보를 포함하는 최종 **rendering tree** 를 출력한다. 즉, **화면에 표시되는 모든 노드의 콘텐츠 및 스타일 정보를 포함한다.**
3. `Layout` →  브라우저가 page에 표시되는 각 요소의 `크기`, `위치` 를 계산하는 단계이다.
4. `Paint` → 페인트 단계에 도달하면 브라우저는 `layout 결과`를 선택하고 `pixel`을 화면에 페인트 한다.
> ![image](https://user-images.githubusercontent.com/53039583/207474810-1579e1fd-3046-432f-b925-49a884a440cf.png)

# react app 프로젝트 생성하기

## 일반적인 생성

### `npm` 패키지 매니저로 생성

```bash
$npm install create-react-app <프로젝트명>

# 로컬에 전역적으로 설치를 하고 싶은 경우
$npm install -g create-react-app <프로젝트명>
```

### `yarn`  패키지 매니저로 생성

```bash
$yarn add create-react-app <프로젝트명>

# 로컬에 전역적으로 설치를 하고 싶은 경우
$yarn add global create-react-app <프로젝트명>

```

## Disk 공간을 낭비하지 않고 항상 최신 버전으로 생성하고 싶은 경우

### `npx` 패키지 매니저로 생성

- npx는 npm registry에서 `패키지`  데이터를 찾아 `다운로드 없이 바로 실행` 시켜준다.

```bash
$npx create-react-app <프로젝트 폴더명>
```
