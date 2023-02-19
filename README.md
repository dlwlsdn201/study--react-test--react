# :mag: 테스팅을 하는 이유?

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

> ### Enzyme

→ 구현 주도 테스트

> ### React Testing Library

→ 행위 주도 테스트

# :mag: Jest란?

→ Facebook 에서 개발한 `자바스크립트 테스팅 라이브러리`.
최소한의 설정으로 동작하면  Test case 를 만들어서 어플리케이션 코드가 잘 작동하는지 검사해준다.
주로 **단위 테스트**를 위해 사용한다.

## 환경 세팅

> ### 설치

```bash
# yarn 패키지 매니저를 사용할 경우
$yarn add jest --dev

# npm 패키지 매니저를 사용할 경우
$npm install jest --save-dev
```

> ### 스크립트

```json
// package.json
{
  "scripts": {
    "test": "jest", // 또는 "jest --watchAll" 
   },
}
```

> ### 테스트 파일 디렉터리

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

## 문법
> ### 테스트 파일 코드 구조

![image](https://user-images.githubusercontent.com/53039583/208230654-6156e9ce-048d-4d90-8d93-1d0e560d70b0.png)

- `describe` : 여러 관련 테스트를 그룹화하는 블록을 만든다. (ex_ 과일)
- `it` : 개별 테스트를 수행하는 곳. 각 test를 작은 문장처럼 설명한다. (ex_ 바나나)
- `test`
    - `test.skip()` : 해당 test() 구문은 skip 하고 다음 test 구문으로 넘어간다.
    - `test.only()` : 해당 test() 구문만 실행한다. (나머지 test구문은 skip).
- `expect` : 값을 테스트할 때마다 사용된다. 그리고 expect  함수 혼자서는 거의 사용되지 않고, **matcher 와 함께 사용된다.**
- `matcher` : expect 에 대한 결과 도출을 위해 테스트 방식을 정의하는 함수
  - `.toHaveStyle()` : 특정 Dom Element 요소에 대한 style 속성값 여부 테스트
  - `.toBeDisabled()` : 특정 Dom Element 요소에 대한 disabled 속성값 테스트
  - `.toHaveTextContent()` : 특정 Dom Element 요소의 textContent 에 대한 값 테스트
  - `.toBeTruthy()` : expect 인스턴스 return 이 true 인지 여부를 테스트 
  <br/>( false 인 경우 : **false | 0 | '' | null | undefined | NaN** )
  - `.toEqual(VALUE)` : expect 인스턴스 return 값과 `VALUE` 값이 동일한지 여부를 테스트
    
    ![image](https://user-images.githubusercontent.com/53039583/208230671-9ad88ea7-e64a-47b5-81ed-df3c11ee1992.png)
    
    ![image](https://user-images.githubusercontent.com/53039583/208230675-d605612c-7d37-4d17-904c-39f86b2e407e.png)
    
    ![image](https://user-images.githubusercontent.com/53039583/208230678-7292641b-4055-458b-89b7-c552452b769d.png)
    
- `render()` : DOM에 컴포넌트를 rendering 하는 함수. 인자 형식은 **react component**.
- `fireEvent` : DOM Element 에 대한 **이벤트**를 제어하는 인스턴스
    - `.click()` : DOM Element 에 클릭 이벤트 발생시킴
- `userEvent` : fireEvent 와 비슷하며, DOM 요소에 대한 focus 이벤트도 발생시킨다. (fireEvent 보다 더욱 신뢰성이 높음)

>### userEvent
→ userEvent는 fireEvent를 참조하여 만들어졌으며, DOM 요소 타입에 따라 그 DOM 요소에 맞는 더욱 적절한 반응을 보여준다. 
예를 들어 fireEvent 로 버튼을 클릭하면 (`fireEvent.click(button)`) 클릭은 되지만 해당 버튼에 focus 이벤트는 발생되지 않는다. 하지만, userEvent으로 버튼을 클릭하면 (`userEvent.click(button)`) 버튼에 focus 이벤트가 발생한다. <br/>
따라서, userEvent 는 실제 사용자가 UI를 사용하는 것 같은 이벤트들을 디테일하게 표현해준다.

사용 추천 순위 : ***userEvent > fireEvent***

> ### userEvent.clear()

input 이나 textarea에 `텍스트를 선택한 후 제거`해준다.

만약 현재 소스 코드보다 위에서 같은 엘리먼트를 위한 `userEvent` 를 사용했다면 `clear` 해준 후에  `userEvent.type()`을 사용하는게 좋다.
#

## React Testing Library  와 Jest 의 비교

→ React Testing Library 와는 다른 개념이기 때문에 보통 함께 사용한다.

- `Jest` : Test runner 이다.
- `React Testing Library(RTL)` : Test runner 를 위한 공간 (Virtual DOM) 을 제공한다.

> ### 예시

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

# :mag: react app 프로젝트 생성하기

## 일반적인 생성

> ### `npm` 패키지 매니저로 생성

```bash
$npm install create-react-app <프로젝트명>

# 로컬에 전역적으로 설치를 하고 싶은 경우
$npm install -g create-react-app <프로젝트명>
```

> ### `yarn`  패키지 매니저로 생성

```bash
$yarn add create-react-app <프로젝트명>

# 로컬에 전역적으로 설치를 하고 싶은 경우
$yarn add global create-react-app <프로젝트명>

```

## Disk 공간을 낭비하지 않고 항상 최신 버전으로 생성하고 싶은 경우

> ### `npx` 패키지 매니저로 생성

- npx는 npm registry에서 `패키지`  데이터를 찾아 `다운로드 없이 바로 실행` 시켜준다.

```bash
$npx create-react-app <프로젝트 폴더명>
```

# :mag: 쿼리 함수

→ 페이지에서 DOM 요소를 찾기 위해 테스트 라이브러리가 제공하는 방법.

- `get-`
- `find-`
- `query-`

![image](https://user-images.githubusercontent.com/53039583/208232230-7ce73237-feac-4477-8c2d-c12180933def.png)

## getBy-

→ 쿼리에 대해 일치하는 노드를 return 하며, 일치하는 요소가 없거나 둘 이상의 일치 결과가 발견되면 설명 오류를 발생시킴.
(둘 이상의 요소가 예상되는 경우, `getAllBy`을 사용)
- 추천 사용 우선순위
    
    
    | 1순위 (Queries Accessible to Everyone) | getByRole |
    | --- | --- |
    |  | getByLabelText |
    |  | getByPlaceholderText |
    |  | getByText |
    |  | getByDisplayValue |
    | 2순위 (Sementic Queries) | getByAltText |
    |  | getByTitle |
    | 3순위 (Test IDs) | getByTestId |
    - **getByTestId** 의 추천 우선순위가 낮은 이유?
      <br/> 
      → 일반 사용자들은 Test ID를 볼 수 없기 때문에 이 쿼리문은 테스트 시, **role / text 등의 요소들을 매칭시킬 수 없을 경우에만 최후의 수단**으로 시용하기를 권장한다.

> ### getByRole()
  - `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio` 등

    ```jsx
    // role='button' 이고, name 속성이 대소문자 상관없이 'submit' 인 DOM Element 
    const testElement = getByRole('button', {name: /submit/i})
    ```

## queryBy-
→ 쿼리에 대해 일치하는 노드를 return  하며, 일치하는 요소가 없으면 `null`을 반환하고 둘 이상의 일치 항목이 발견되면 설명 오류를 발생시킴.
(둘 이상의 일치 항목이 예상되는 경우, `queryAllBy`을 사용)

## findBy-
→ `get-` + `wait`  = `find-`

→ 주어진 쿼리와 일치하는 요소가 발견되면 `Promise`를 return 하며, 요소가 발견되지 않거나 기본 제한 시간인 1000ms 후에 둘 이상의 요소가 발견되면 Promise  가 거부된다. 
(둘 이상의 요소를 find 해야 하는 경우,  `findAllBy`을 사용)

## waitFor
→ 일정 기간 동안 기다려야 할 때, expect() 가 통과할 때까지 기다릴 수 있다.


## waitForElementToBeRemoved
→ `특정 요소가 DOM에서 제거되기 까지 기다림`.

→ 예시로 데이터를 송/수신 중일 때 Loading UI가 DOM 에서 사라지기 전까지 특정한 기능을 테스트 할 수 있음


# Prettier 설치 및 설정

## 설치

> ### npm 으로 설치

→ 여러 개발자와 같은 포맷 유지에 더 좋음

```bash
$yarn add prettier
```

> ### vsCode 익스텐션으로 설치

→ 혼자 편하게 설치해서 사용하기 좋음

![image](https://user-images.githubusercontent.com/53039583/210188927-efb91c42-4a90-4456-bddd-d1b947b3251d.png)


# 테스트 주도 개발(TDD; Test Driven Development)

## TDD(테스트 주도 개발) 란?

→ 애플리케이션 개발 시, 테스트 코드 작성을 선행한 후 실제 코드를 작성하는 개발 방식.

![image](https://user-images.githubusercontent.com/53039583/210188930-9895a121-7a00-4545-8cd1-1fd195047ad9.png)


## TDD의 장점

- 실제 구현할 모든 기능들을 테스트하기 때문에 소스 코드에 **안정감**이 부여됨.
- **디버깅 시간 ⇩**,**실제 개발 시간 ⇩** (실제 개발하면서 디버깅 부분에 대부분 시간이 소요됨.)
- 소스 코드 하나하나를 더욱 신중하게 짤 수 있기 때문에 **깨끗하고 명확한 코드**가 작성될 확률 ⇧

## (실습1) TDD 를 적용하여 간단한 counter 버튼 기능 테스트 해보기

→ +, -, on/off 기능을 가진 버튼들을 구현해야한다고 가정했을 때, TDD 를 적용해본다.

→ TDD의 진행 순서는 반드시 [테스트 코드 작성] → [구현] 임을 유의한다.

> ### 테스트 코드 작성
> 테스트 코드

```jsx
// App.test.js

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('The counter starts at 0', () => {
render(<App />); // App 컴포넌트 렌더링 (root 컴포넌트 렌더링)

// screen object를 이용해서 원하는 element에 접근 (id로 접근)
const counterElement = screen.getByTestId('counter');

// id가 counter인 element의 텍스트가 0인지 테스트
expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
render(<App />);
const minusButtonElement = screen.getByTestId('minus-button');
expect(minusButtonElement).toHaveTextContent('-'); // minusButtonElement 요소가 '-' 이라는 text 요소를 가지고 있는가?
});

test('plus button has correct text', () => {
render(<App />);
const plusButtonElement = screen.getByTestId('plus-button');
expect(plusButtonElement).toHaveTextContent('+'); // plusButtonElement 요소가 '+' 이라는 text 요소를 가지고 있는가?
});

// ------ (+) Button 요소 테스트 코드 ------
test('When the + button is pressed, the counter changes to 1', () => {
render(<App />);

// screen object를 이용해서 원하는 요소에 접근 (접근 시, Id로 접근)
const buttonElement = screen.getByTestId('plus-button');

// click plus button
// fireEvent : DOM 에 대한 이벤트 속성들을 테스트 할 수 있게 해줌
fireEvent.click(buttonElement);

// 카운터가 0에서 +1 로 변화하여 최종 counter 값이 1이 됩니다.
const counterElement = screen.getByTestId('counter');

expect(counterElement).toHaveTextContent(1);
});

// ------ (-) Button 요소 테스트 코드 ------
test('When the - button is pressed, the counter changes to -1', () => {
render(<App />);

const buttonElement = screen.getByTestId('minus-button');

// click minus button
// buttonElement 요소에 클릭 이벤트 발생
fireEvent.click(buttonElement);

const counterElement = screen.getByTestId('counter');
expect(counterElement).toHaveTextContent(-1);
});
```

> ### UI 화면
![image](https://user-images.githubusercontent.com/53039583/210679504-f48763a4-9f16-470f-9c89-2b72ac68b07b.png)
> ### Dom Element 코드

    
  ```jsx
  // App.js (메인 컴포넌트)
  
  import { useState } from 'react';
  import styled from 'styled-components';
  import Button from './components/Button';
  
  const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #282c34;
    height: 100%;
    flex-direction: column;
    align-items: center;
  `;
  
  const DivHeader = styled.div`
    color: red;
  `;
  
  const DivMain = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  `;
  
  const DivPlusMinusButtonWrapper = styled.div`
    display: block;
  `;
  
  function App() {
    const [counter, setCounter] = useState(0);
  
    const onIncrease = () => setCounter(counter + 1);
    const onDecrease = () => setCounter(counter - 1);
  
    return (
      <DivContainer>
        <header>
          <DivHeader>
            <h3 data-testid='counter'>{counter}</h3>
          </DivHeader>
        </header>
        <main>
          <DivMain>
            <DivPlusMinusButtonWrapper>
              <Button
                testid='minus-button'
                content='-'
                onClick={() => onDecrease()}
              />
              <Button
                testid='plus-button'
                content='+'
                onClick={() => onIncrease()}
              />
            </DivPlusMinusButtonWrapper>
            <Button
              testid='onOff-button'
              content='on/off'
              onClick={console.log('스위치 작동')}
            />
          </DivMain>
        </main>
      </DivContainer>
    );
  }
  
  export default App;
  ```
## (실습2) TDD 를 적용하여 Dom Element 요소의 Style 속성값 Test 해보기

→ + 버튼, - 버튼, on/off 버튼 각각의 `background Color` style 속성 값을 테스트 해본다.

→ TDD의 진행 순서는 반드시 **[테스트 코드 작성] → [구현]** 임을 유의한다.

> ### 테스트 코드 작성

```jsx

// App.test.js

// on/off 스위치 생성을 위한 테스트 작성
test('on/off button has blue color', () => {
	render(<App />);

	const buttonElement = screen.getByTestId('on/off-button');
	// button 요소가 backgroundColor: 'blue' 라는 스타일 속성을 가지고 있는지?
	expect(buttonElement).toHaveStyle(`backgroundColor: blue`);
});

test('plus button has red color', () => {
	// 테스트를 진행할 컴포넌트 렌더링
	render(<App />);

	// [+버튼] 요소를 참조하는 변수 생성
	const plusElement = screen.getByTestId('plus-button');

	// [+버튼] 요소에 'backgroundColor' style 속성이 green 인지?
	expect(plusElement).toHaveStyle(`backgroundColor: green`);
});

test('minus button has red color', () => {
	render(<App />);
	// [-버튼] 요소를 참조하는 변수 생성
	const minusElement = screen.getByTestId('minus-button');

	// [+버튼] 요소에 'backgroundColor' style 속성이 red 인지?
	expect(minusElement).toHaveStyle({ backgroundColor: 'white' });
});
```

> ### Dom Element 코드

```jsx
// App.js 

import { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const DivContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: #282c34;
	height: 100%;
	flex-direction: column;
	align-items: center;
`;

const DivHeader = styled.div`
	color: red;
`;

const DivMain = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
`;

const DivPlusMinusButtonWrapper = styled.div`
	display: block;
`;

function App() {
	const [counter, setCounter] = useState(0);

	const onIncrease = () => setCounter(counter + 1);
	const onDecrease = () => setCounter(counter - 1);

	return (
		<DivContainer>
			<header>
				<DivHeader>
					<h3 data-testid='counter'>{counter}</h3>
				</DivHeader>
			</header>
			<main>
				<DivMain>
					<DivPlusMinusButtonWrapper>
						<Button
							testid='minus-button'
							content='-'
							onClick={() => onDecrease()}
							backgroundColor='white'
						/>
						<Button
							testid='plus-button'
							content='+'
							onClick={() => onIncrease()}
							backgroundColor='green'
						/>
					</DivPlusMinusButtonWrapper>
					<Button
						testid='on/off-button'
						content='on/off'
						backgroundColor='blue'
					/>
				</DivMain>
			</main>
		</DivContainer>
	);
}

export default App;
```

> ### 결과
![image](https://user-images.githubusercontent.com/53039583/210679639-eae115c3-3612-4a20-8dc0-c656158d06a0.png)

→ 테스트 에러가 발생한 이유는 테스트 코드에서 [****************- 버튼]**************** 요소의 `backgroundColor` style 에 대한 기댓값은 ‘`red`’ 였으나, 실제 코드에 구현된 값은 ‘`white`’ 이기 때문이다.

```jsx
// App.js
	<Button
		testid='minus-button'
		content='-'
		onClick={() => onDecrease()}
		backgroundColor='white'
	/>
```

따라서, 위의 minus 버튼 요소 코드에서 backgroundColor 속성을 ‘red’ 로 바꾸면, 아래와 같이 정상적으로 테스트가 성공한다.

![image](https://user-images.githubusercontent.com/53039583/210679649-8680b30b-7e74-44ce-8053-103c466d4d37.png)

#
## (실습3) TDD 를 적용하여 Dom Element 요소의 Click event로 인한 상태 변화 Test 해보기

→ on/off 버튼을 클릭 시 **+ 버튼**, **- 버튼의  `disabled` 속성 값이 true가 되는지** 테스트 해본다.

→ TDD의 진행 순서는 반드시 **[테스트 코드 작성] → [구현]** 임을 유의한다.

> ### 테스트 코드 작성

```jsx
// App.test.js

test.only('on/off 버튼 클릭 시, +,- 버튼을 disabled 처리', () => {
	render(<App />);

	// on/off 버튼 요소 참조 변수 생성
	const onoffElement = screen.getByTestId('on/off-button');

	// on/off 버튼 요소 클릭 이벤트 발생
	fireEvent.click(onoffElement);

	// +,- 버튼 요소 참조 변수 생성
	const plusElement = screen.getByTestId('plus-button');
	const minusElement = screen.getByTestId('minus-button');

	expect(plusElement).toBeDisabled(); // +버튼이 disabled 처리 되었는지?
	expect(minusElement).toBeDisabled(); // -버튼이 disabled 처리 되었는지?
```


> ### Dom Element 코드

- `disabled` 라는 state 를 통해 +,- 버튼의 disabled 속성값을 관리한다.
- `disabled` state 변경은 on/off 버튼의 onClick 속성을 통해 `updateDisabled()` 함수를 호출하여 이뤄진다.
    
    ```jsx
    // App.js
    
    import { useState } from 'react';
    import styled from 'styled-components';
    import Button from './components/Button';
    
    const DivContainer = styled.div`
    	display: flex;
    	justify-content: center;
    	background-color: #282c34;
    	height: 100%;
    	flex-direction: column;
    	align-items: center;
    `;
    
    const DivHeader = styled.div`
    	color: red;
    `;
    
    const DivMain = styled.div`
    	display: flex;
    	justify-content: space-around;
    	flex-direction: column;
    	align-items: center;
    `;
    
    const DivPlusMinusButtonWrapper = styled.div`
    	display: block;
    `;
    
    function App() {
    	const [counter, setCounter] = useState(0);
    	const [disabled, setDisabled] = useState(false);
    
    	const onIncrease = () => setCounter(counter + 1);
    	const onDecrease = () => setCounter(counter - 1);
    	const updateDisabled = (value) => {
    		setDisabled(value);
    	};
    
    	return (
    		<DivContainer>
    			<header>
    				<DivHeader>
    					<h3 data-testid='counter'>{counter}</h3>
    				</DivHeader>
    			</header>
    			<main>
    				<DivMain>
    					<DivPlusMinusButtonWrapper>
    						<Button
    							testid='minus-button'
    							content='-'
    							onClick={() => onDecrease()}
    							backgroundColor={!disabled ? 'red' : 'lightgray'}
    							disabled={disabled}
    						/>
    						<Button
    							testid='plus-button'
    							content='+'
    							onClick={() => onIncrease()}
    							backgroundColor={!disabled ? 'green' : 'lightgray'}
    							disabled={disabled}
    						/>
    					</DivPlusMinusButtonWrapper>
    					<Button
    						testid='on/off-button'
    						content='on/off'
    						backgroundColor='blue'
    						onClick={() => updateDisabled(!disabled)}
    					/>
    				</DivMain>
    			</main>
    		</DivContainer>
    	);
    }
    
    export default App;
    ```
    

> ### 결과

![image](https://user-images.githubusercontent.com/53039583/210679663-f2766de5-15ca-49b9-84b4-a4f11e83af26.png)

→ **skipped** 란 ?

- 테스트 코드에서 `test.only(…)` 구문 **외**에 모든 코드들
- 테스트 코드에서  `test.skip(…)` 구문의 코드들

## (실습4) 좀 더 복잡한 앱을 TDD 방식으로 개발하기

> ### 목적

→ 보다 더 다양한 **DOM** **Element** 테스트 

→ **MSW**(Mock Service Worker)을 이용한 **백엔드 서버 통신 테스트**

> ### 컨셉

- 해외여행 패키지 주문 사이트

> ### 주요 기능

- 네 가지 나라에 대한 여행 상품 선택 기능 (image, inputNumber)
- 여행 옵션 기능 (checkbox)
- 총 금액 계산 기능 (여행 상품 + 옵션)
- 주문한 내용 확인 (상품, 옵션)
- 주문 완료 안내 및 누적 주문 정보 테이블 제공
- 메인 페이지로 돌아가기 기능
- 백엔드 통신 기능 (Node.js)

> ### 프로세스

상품 주문 → 주문 내용 확인 → 주문 완료 안내

> ### 파일 구성

    ![image](https://user-images.githubusercontent.com/53039583/212786604-cd5247ef-5795-49de-8dd3-c1e04be03072.png)

> ### typescript + eslint + jest 환경 구성하기

- 필요한 라이브러리
	- `@babel/cli`
	- `@babel/core`
	- `@types/jest`
	- `@eslint-plugin-jest-dom`
	- `@eslint-plugin-testing-library`
	- `@babel-preset-env`
	- `@babel-prest-typescript`

- `babel.config.js`
    
    ```jsx
    module.exports = {
    	presets: ['@babel/preset-env', '@babel/preset-typescript'],
    	env: {
	  test: {
	    plugins: [
	      '@babel/plugin-transform-modules-commonjs',
	      '@babel/plugin-transform-runtime'
	    ]
	  }
    	}
    };
    ```
    
- `jest.config.js`
    
    ```jsx
    /** @type {import('jest').Config} */
    const config = {
    	preset: 'ts-jest',
    	testEnvironment: 'node',
    	transform: {
          '^.+\\.ts?$': 'ts-jest'
    	},
    	transformIgnorePatterns: ['/node_modules/(?!(axios)/)']
    };
    
    module.exports = config;
    ```
    

- node_modules 로부터 라이브러리 import 에러가 발생할 경우 아래의 코드를 추가한다.
    
    ```json
    // package.json
    {
      "script": {
        "test": "react-scripts test -transformIgnorePatterns \"node_modules/(?!axios)/\""
      }
    } 
    
    ```

## context API 을 이용하여 react에서 전역적으로 state를 관리하기

> ### 1. Context 파일 생성

- 전역적으로 관리할 state 을 정의하는 곳
- 정의한 state을 사용할 수 있도록 전달해주는 `Provider` 메서드를 정의하는 곳
- 보통 `./src/contexts/...` 경로에 파일을 생성한다.
    
    ```jsx
    const { createContext, useMemo, useState } = require('react');
    
    // Context API 의 인스턴스 생성 
    export const Context = createContext();
    
    // state을 제공해줄 Provider 인스턴스
    export const OrderContextProvider = (props) => {
    	const [state, setState] = useState(undefined); // 전역적으로 사용될 state
    
    	return <Context.Provider value={state}/>
    }
    ```
    
- 만약 렌더링 성능을 올리고 싶다면, value 로 전달되는 state 값을 `useMemo` 라는 Hook 함수를 사용하여 전달한다.
    
    그 이유는, value 값이 바뀌면 <Provider/> 내부에 있는 모든 컴포넌트들이 Re-rendering  이 발생하는데, 이 useMemo을 사용하면 dependency Array 내에 있는 값이 바뀌었을 때만 Re-rendering 이 발생하기 때문에 약간의 성능 향상을 기대할 수 있다. 
    
    ```jsx
    export const OrderContextProvider = (props) => {
    	const [state, setState] = useState(undefined); // 전역적으로 사용될 state
    
    // state가 변경 되었을 때만, useMemo {...} 내부 코드를 최신화
    	const value = useMemo(() => {
        return [{...state}]
      }, [state]);
    
    	return <Context.Provider value={value}/>
    }
    ```

## Test 시, render 컴포넌트에 wrapper 컴포넌트 적용하기

React test 시, render 의 타겟이 되는 컴포넌트의 상위 컴포넌트도 같이 rendering 되어야 하는 상황들이 종종 있다. (ex_Context API 을 사용할 때, <Provider/> 등) 

이런 상황일 때는, `render()`  컴포넌트의 두 번째 파라미터로 `{wrapper: 컴포넌트명}` 을 정의하여, 테스트 렌더링 시에도 부모 컴포넌트를 같이 rendering할 수 있다.

```jsx
it("it is Context API data", async () => {
	render(<Type/>, { wrapper: OrderContextProvider });
})
```

> ### 모든 render 컴포넌트에 wrapper 컴포넌트를 적용하기 위한 custom render 함수 만들기

테스트 코드에서 다수의 render 컴포넌트에 공통적인 wrapper 컴포넌트를 적용해야할 경우, 일일이 `{wrapper: 컴포넌트명}` 파라미터를 정의하는 것보다는 하나의 커스텀 render 함수를 만드는 것이 훨씬 효율적일 수 있다.

```jsx
// src/test-utils.js

import { render } from '@testing-library/react';
import { ContextProvider } from './contexts/Context'; // Context Provider 컴포넌트

// ui : render 하고자 하는 타겟 컴포넌트 
// options : wrapper 옵션 외 사용자가 정의 하고싶은 option
const customRender = (ui, options) => render(ui, { wrapper: ContextProvider, ...options }; 

// RTL 라이브러리를 re-export
export * from '@testing-library/test';

// override render method (테스트 코드에서 커스텀 렌더 함수를 render 라는 명으로 import 하여 사용할 수 있도록)
export { customRender as render };
```

```jsx
// cacluate.test.js 

import { render, screen } from '../../../test-utils'; // test-utils.js 에서 import 
import userEvent from '@testing-library/user-event';
import Type from '../Type';

// 상품 구매 수량이 업데이트 될 때, 총 상품 합계 업데이트 기능 테스트
it('update product total when products change', async () => {
	render(<Type orderType='products' />); // { wrapper: ContextProvider } 옵션이 기본으로 적용되어 rendering
	(...)
});
```
> ### 선택한 여행 상품과 옵션들의 총 합계를 계산 하는 기능 테스트 코드 작성하기
![image](https://user-images.githubusercontent.com/53039583/216804181-26f49d8a-c1d4-4c3c-add6-02204583e98b.png)


```jsx
describe('total price of goods and options', () => {
// 1. 최초 총 합계는 0이먀, 여행 상품을 선택할 때 총 합계 값을 테스트 
	it('total price starts with 0 and Updating total price when adding one product', async () => {
		render(<OrderPage />);

		const total = screen.getByText('합계:', { exact: false });
		expect(total).toHaveTextContent('0');

		const americaInput = await screen.findByRole('spinbutton', {
			name: 'America'
		}); // 백엔드에서 가져온 후 보여지는 요소이기 때문에 await 사용

		userEvent.clear(americaInput);
		userEvent.type(americaInput, '3');

		userEvent.clear(americaInput);
		userEvent.type(americaInput, '1');

		expect(total).toHaveTextContent('1000');
	});

// 2. 옵션 1개를 추가하였을 때 총 합계 계산 테스트
	it('Updating total price when adding one option', async () => {
		render(<OrderPage />);
		const total = screen.getByText('합계:', { exact: false });

		const insuranceCheckbox = await screen.findByRole('checkbox', {
			name: 'Insurance'
		});

		userEvent.click(insuranceCheckbox);
		expect(total).toHaveTextContent('500');
	});

// 3. 옵션 1개를 취소했을 때 총 합계 계산 테스트
	it('Updating total price when removing option and product', async () => {
		render(<OrderPage />);

		const total = screen.getByText('합계:', { exact: false });

		const insuranceCheckbox = await screen.findByRole('checkbox', {
			name: 'Insurance'
		});

		userEvent.click(insuranceCheckbox);

		const americaInput = await screen.findByRole('spinbutton', {
			name: 'America'
		});

		userEvent.clear(americaInput);
		userEvent.type(americaInput, '3');

		userEvent.clear(americaInput);
		userEvent.type(americaInput, '1');
		expect(total).toHaveTextContent('1500');
	});
});
```
#
> ### 선택한 여행상품들과 옵션 내역들을 최종 확인하는 페이지의 테스트 코드 구현하기

- 최종 확인 페이지에 대한 테스트 코드
    
    ```jsx
    // src/pages/SummaryPage/tests/SummaryPage.test.js
    
    import { render, screen } from 'src/test-utils';
    import SummaryPage from '../SummaryPage';
    
    it('checkbox and button', () => {
    	render(<SummaryPage />);
    
    // <Input type="checkbox" name="주문하려는 것을 확인하셨나요?"/> 이라는 Element 요소
    	const checkbox = screen.getByRole('checkbox', {
    		name: '주문하려는 것을 확인하셨나요?'
    	});
    
    	expect(checkbox.checked).toEqual(false); // 최초 렌더링 시, 체크박스 값은 false 이어야함.
    
    // <button name="주문 확인"/> 이라는 Element 요소
    	const confirmButton = screen.getByRole('button', {
    		name: '주문 확인'
    	});
    	expect(confirmButton.disabled).toBeTruthy(); // 최초 렌더링 시, 체크박스 값은 false 이어야함.
    });
    ```
    

- 상품 주문 → 최종 확인 프로세스에 대한 테스트 코드
    
    ```jsx
    // src/App.test.js
    
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import App from './App';
    
    test('From order to order completion', async () => {
    	render(<App />);
    
    	////////////////// [주문 페이지] //////////////////
    
    	// '미국' 상품 선택 수량 Input Element
    	const americaInput = await screen.findByRole('spinbutton', {
    		name: 'America'
    	});

    
    	userEvent.clear(americaInput);
    	userEvent.type(americaInput, '2'); // 미국 상품 수량 Input 요소에 value: '2' 을 입력
    
      // '영국' 상품 선택 수량 Input Element
    	const englandInput = await screen.findByRole('spinbutton', {
    		name: 'England'
    	});

    
    	userEvent.clear(englandInput);
    	userEvent.type(englandInput, '3'); // 영국 상품 수량 Input 요소에 value: '3' 을 입력
    
    	// '보험' 옵션 선택 Checkbox Element
    	const insuranceCheckbox = await screen.findByRole('checkbox', {
    		name: 'Insurance'
    	});

    
    	// 체크박스 요소에 체크 이벤트 발생
    	userEvent.click(insuranceCheckbox);
    
    	const orderButton = screen.getByRole('button', {
    		name: '주문하기'
    	});
    
    	// [주문하기] 버튼 클릭
    	userEvent.click(orderButton);
    
    	////////////////// [주문 확인 페이지] //////////////////
    	const summaryHeading = screen.getByRole('heading', { // <h$ name="주문 확인"></h$> 이라는 Element 요소
    		name: '주문 확인'
    	});
    	expect(summaryHeading).toBeInTheDocument(); // <h$ name="주문 확인"></h$> 이라는 태그가 document 에 존재하는가?
    
    	const productHeading = screen.getByRole('heading', {  // <h$ name="여행 상품: 5000"></h$> 이라는 Element 요소
    		//
    		name: '여행 상품: 5000'
    	});
    	expect(productHeading).toBeInTheDocument(); // <h$ name="여행 상품: 5000"></h$> 이라는 태그가 document 에 존재하는가? (Refer: 8~20 line)
    
    	const optionsHeading = screen.getByRole('heading', { // <h$ name="옵션: 500"></h$> 이라는 Element 요소
    		name: '옵션: 500'
    	});
    	expect(optionsHeading).toBeInTheDocument(); // <h$ name="옵션: 500"></h$> 이라는 태그가 document 에 존재하는가? (Refer: 22~27 line)
    
    	expect(screen.getByText('2 America')).toBeInTheDocument(); // document 안에 '2 America' 라는 텍스트가 존재하는가?
    	expect(screen.getByText('3 England')).toBeInTheDocument(); // document 안에 '3 England' 라는 텍스트가 존재하는가?
    	expect(screen.getByText('Insurance')).toBeInTheDocument(); // document 안에 'Insurance' 라는 텍스트가 존재하는가?
    
    	// <input type='checkbox' name="주문하려는 것을 확인하셨나요?"/> Element 요소
    	const confirmCheckbox = screen.getByRole('checkbox', {
    		name: '주문하려는 것을 확인하셨나요?'
    	});
    
    	userEvent.click(confirmCheckbox); // 체크박스 클릭
    
    	// <button name="주문 확인"/> Element 요소
    	const confirmOrderButton = screen.getByRole('button', {
    		name: '주문 확인'
    	});
    	userEvent.click(confirmOrderButton); // 버튼 클릭
    });
    ```

# ⚠️ Test Errors

## Context API 에 대한 Test Error 발생 원인

아래의 에러 원인은 실제 <Type/> 이라는 컴포넌트를 렌더링 할 때 Context Provider 컴포넌트로 감싸져있는 상태로 렌더링 되지만, 테스트 할 때는 `render(<Type *orderType*='products' />);` 코드로 작성하여 Provider 컴포넌트로 감싸지 않은 상태로 렌더링 되어, context state 를 사용할 수 없기 때문이다.

![image](https://user-images.githubusercontent.com/53039583/216755337-d24afb8b-f757-4c24-a5d5-a81f7acd7de9.png)

따라서, 해당 에러를 해결하기 위해서는 아래와 같이 테스트 코드에서 `render()` 메서드의 두 번째 파라미터로 `{wrapper: <Context Provider명>}` 을 정의하여, 테스트 렌더링 시에도 Context 의 Provider 컴포넌트가 감싸질 수 있도록 하면 된다.


#
# 참조

## 🔎 Javascript 의 Array.from(Map object)

 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운`Array` 객체를 만든다.

```jsx
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]

const mapObejct = new Map([['name', 'lee'], ['name', 'kim']]);
console.log(Array.from(mapObject);
// Expected output: [['name', 'lee'], ['name', 'kim']]
```

## 🔎 Javascript 의 Map

- Map 객체는 [key, value] 형태의 값을 가지는 객체이다.
- key는 Map 객체에서 고유해야 하며, value는 변경 가능하다.
- Map 은 key 가 있는 data 를 저장한다는 점에서 Object와 유사하지만, 다양한 자료형을 허용한다는 점에서 차이가 있다.

### Map을 사용하면 좋은 상황

- 객체의 property를 자주 변경해야할 때 유용하다. (자주 변경되지 않는 정보들은 일반 object 객체에 저장해도 상관없다)

### 맵을 생성하기

```jsx
new Map()
```

### key를 이용하여 value를 저장하는 `set(key, value)`

```jsx
const map = new Map();

map.set('1', 'str1');
map.set('name', 'Lee');

console.log(map);  // {{'1' => 'str1'}, {'name' => 'Lee'}}
```

### key에 해당하는 값을 반환하는 `get(key)`

- `key`에 대한 value가 존재하지 않으면,  `undefined` 를 return 한다.

```jsx
const map = new Map();

map.set('1', 'str1');
map.set('name', 'Lee');

console.log(map.get('name')); // 'Lee'
```

### key가 존재 여부에 따라 bool 타입의 결과를 반환하는 `has(key)`

```jsx
const map = new Map();

map.set('1', 'str1');
map.set('name', 'Lee');

console.log(map.has('1')); // true
console.log(map.has('2')); // false
```

### key에 해당하는 객체를 삭제하는 `delete(key)`

```jsx
const map = new Map();

map.set('1', 'str1');
map.set('name', 'Lee');

map.delete('name');

console.log(map);  // {{'1' => 'str1'}}
```

### Map 안의 모든 요소를 제거하는 `clear()`

```jsx
const map = new Map();

map.set('1', 'str1');
map.set('name', 'Lee');

map.clear();

console.log(map);  // {size: 0}
```

### Map 안에 있는 요소 개수를 반환하는 `size`

```jsx
const map = new Map();

map.set('1', 'str1');
map.set('name', 'Lee');

console.log(map.size);  // 2
```

## 🔎  Javascript 에서 For 문을 좀 더 섹시하게 사용하기

```jsx
for (const 변수 of [배열]) {
	// 반복 실행 구문
}
```

## 🔎  타입스크립트에서 change event 의 Type 지정하기

```tsx
// Input 태그 요소에 대한 onChange 이벤트 핸들러 함수를 정의할 때
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
	setState(e.target.value);
}
```

## 🔎 **MSW (Mock Service Worker)**

> ### 정의

Service Worker 을 이용해 서버를 향한 실제 네트워크 요청을 가로채서 모의 응답을 보내주는 API Mocking 라이브러리이다.

> **Service Worker** 란?
    
  브라우저가 백그라운드에서 실행하는 스크립트로, 애플리케이션의 UI 블록 없이 연산을 처리할 수 있다.
        웹 서비스와 브라우저 및 네트워크 사이에서 **프록시 서버 역할**을 하며, 오프라인에서도 서비스를 사용할 수 있도록 한다.
      
  - Service Worker 의 수명 주기는 웹페이지와는 완전히 별개이기 때문에 아래와 같은 기능에서 많이 사용되고 있다. ([출처](https://developer.mozilla.org/ko/docs/Web/API/Service_Worker_API))

      - 높은 비용의 계산을 처리할 때
      - 푸시 이벤트를 생성할 때
      - 백그라운도 데이터 동기화
      - 다른 출처에서의 리소스 요청을 응답
      - 위치 정보, 자이로 센서 등 계산에 높은 비용이 들어가는 다수의 페이지에서 함께 사용할 수 있도록 데이터 업데이트를 중앙화
      - 개발 목적으로서 CoffeeScript, Less, CJS/AMD module 등의 의존성 관리와 컴파일, 백그라운드 서비스 훅
      - 특정 URL 패턴에 기반한 사용자 지정 템플릿 제공
      - 성능 향상, 사진 앨범의 다음 사진 몇 장처럼 사용자가 필요로 할 것으로 생각되는 리소스의 pre-fetching 등
  - Service Worker 는 IE 와 같은 일부 브라우저에서 지원 되지 않으며, **HTTPS** 보안 프로토콜 환경에서만 사용 가능하다. (localhost 환경 제외)
  <br/>
      (네트워크 중간에서 연결을 가로채고 조작하는 기능이 있기 때문)

> ### 장점

- 직접 Mock Server 을 구현하지 않아도 네트워크 수준에서 API를  Mocking 할 수 있다.
- Mcoking 테스트를 위한 노드(node.js) 환경, 개발 및 디버깅을 위한 브라우저 환경에서 모두 사용할 수 있다.
- 소스 코드 수정 없이 Mocking 이 필요한 환경에서만  MSW 인스턴스를 실행해 API Mocking을 적용할 수 있다.

> ### 작동 원리
  ![image](https://user-images.githubusercontent.com/53039583/212527387-ff907e2f-6c67-461d-80d9-fc44e1c2279b.png)

1. 브라우저가 Service Worker 에 요청을 보냄
2. Service Worker 가 해당 요청을 가로채서 복사함
3. 서버에 요청을 보내지 않고, MSW 라이브러리의 핸들러와 매칭시킴
4. MSW가 등록된 핸들러에서 모의 응답(mocked response)를 Service Worker에게 전달함
5. 마지막으로 Service Worker 가 모의 응답을 브라우저에게 전달함

참고로, Service Worker 는 **브라우저 환경**에서만 실행 가능하다. 
node 환경에서는 node-request-interceptor 라이브러리를 활용해 네이티브(http, https, XMLHttpRequest) 모듈을 확장해서 request를 처리 해야한다.

> ### MSW 라이브러리 설치

- npm 으로 설치하기
    
    ```bash
    $npm install msw --save-dev  
    ```
    
- yarn 으로 설치하기
    
    ```bash
    $yarn add msw --dev  
    ```
    

> ### MSW 사용 환경 셋팅하기

1. **브라우저에 서비스 워커 등록**
→ 브라우저에서 사용하기 위해서는 MSW를 서비스 워커에 등록하는 과정이 필요한데, 아래의 명령어를 실행하면 서비스 워커 등록을 위한 파일이 public 폴더에 추가된다.
`public/` 폴더는 주로 프로젝트의 정적 리소스를 담는 폴더이다. 

    create-react-app, next.js 에 기본적으로 세팅이 되어 있지만, 다른 프로젝트의 경우 public 디렉토리가 다를 수 있는데, [해당 링크](https://mswjs.io/docs/getting-started/integrate/browser#where-is-my-public-directory)에서 참고 가능하다.
    
    ```bash
    $npx msw init public/ --save
    ```
    

1. Worker 설정
    
    → `src/mocks/browser.js` 파일을 생성해서 worker 설정을 해야한다.
    
    ```bash
    $touch src/mocks/browser.js
    ```
    
    생성한 `browser.js`파일에서 worker 인스턴스를 생성하고 요청 핸들러를 정의한다.
    
    ```jsx
    // src/mocks/browser.js
    import { setupWorker } from 'msw'
    import { handlers } from './handlers'
    
    // 이것은 주어진 요청 핸들러들로 하나의 서비스 워커를 구성한다.
    export const worker = setupWorker(...handlers)
    ```
    

1. Worker 실행
    
    → 어플리케이션 소스에 워커를 실행하는 코드를 추가한다.
    
    ```jsx
    // src/index.js
    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './App'
    
    if (process.env.NODE_ENV === 'development') {
    	const { worker } = require('./mocks/browser');
    	worker.start();
    };
    
    ReactDOM.render(<App />, document.getElementById('root'));
    
    ```
    

1. Worker 적용 확인
    
    → 애플리케이션을 다시 시작하고, 브라우저 콘솔에서 아래와 같은 메세지가 뜨면 Mocking이 활성화 된 것이다.
    
    ```bash
    [MSW] Mocking enabled.
    ```
    
    이제 개발 서버에서 앱을 실행하면, 실제 서버가 아닌 MSW 에서 응답을 보낼 수 있게 된다.
    

> ### MSW 요청 핸들러 작성

MSW 환경 세팅이 완료되면, 서버 대신 MSW 에서 모의 응답을 줄 수 있도록 요청 핸들러를 작성한다. HTTP request가 수신되었을 때, 내가 원하는 대로 임의 응답(Mocked response) 을 해줄 수 있는 핸들러 코드이다.

코드는 되도록이면 `mocks` 폴더에 두는 것이 좋다. `src/mocks/handlers.js` 에 요청 핸들러를 작성해보도록 한다.

```jsx
// src/mocks/handlers.js

import { rest } from 'msw';

const posts = ["post1", "post2", "post3"];

export const handlers = [

	// post 목록 조회
	rest.get("/posts", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(posts));
	});

	// post 추가
	rest.post("/posts", (req, res, ctx) => {
		posts.push(req.body);
		return res(ctx.status(201));
	});
];
```

REST API를 Mocking 하기 위해 MSW의 `rest`  객체를 사용하였다.

post 목록을 조회하기 위한 `GET /posts` 는 Array에 담긴 post를 response 해주고, 새로운 post 등록을 위한 `POST /posts` 는 request body로 넘어온 post를 Array에 추가한다.

> ### Service Worker  요청 테스트

이제 `fetch()` 함수로 `GET /posts` request를 보내보도록 한다. 실제 서버가 아닌 MSW에서 mocked response을 보내줄 것이다.

- Request
    
    ```jsx
    fetch("/posts")
    	.then((response) => response.json())
    	.then((data) => console.log(data));
    ```
    
- Response
    
    ```bash
    [MSW] 18:04:24 GET /posts (200 OK)
    ["post1", "post2", "post3"]
    ```
    

> ### MSW 적용 예시

그렇다면 모의 응답을 제공하는 msw 핸들러는 과연 어떻게 생겼을까?  [공식 도큐](https://mswjs.io/docs/#how-does-it-work)의 예시를 통해서 먼저 알아보자.

Mock Service Worker를 사용하면 선언적 [요청 핸들러](https://mswjs.io/docs/basics/request-handler) (declarative request handler)를 사용하여 URL, RegExp 또는 사용자 지정 기준에 따라 요청을 가로챌 수 있게 하고, 모의 응답을 반환하는 응답 함수를 제공한다.

다음은 POST 메서드의 `/login` 요청을 모킹하는 msw 파일예시다.

```jsx
// src/mocks.js
import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.post('/login', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('username')

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authenticated',
        }),
      )
    }

    return res(
      ctx.json({
        firstName: 'John',
      }),
    )
  }),
)

// Register the Service Worker and enable the mocking
worker.start()
```

- HTTP POST 요청을 처리하기 위해 `rest.post` 함수를 사용해 요청을 보낸다.
- 핸들러 함수의 첫번째 파라미터에는 `'/login'` 라는 요청 경로를 넣었고, 두번째 파라미터에는 [response resolver](https://mswjs.io/docs/getting-started/mocks/rest-api#response-resolver)라는 콜백 함수를 넣었다.
- Response resolver에는 세 가지 인자를 받는다: req, res, ctx
    - `req`: 매칭되는 요청에 대한 정보
    - `res`: 모의 응답을 만들 수 있는 유틸리티
    - `ctx`: 모의 응답의 HTTP 상태 코드, 헤더, 바디 등을 만들 수 있는 함수들
- 위 `req`, `res`, `ctx`를 사용해서 원하는 조건에 따라 모의 응답을 작성한다.
    - 사용자가 검증되었는지 `isAuthenticated` 여부를 세션 스토리지의 username 값으로 판별한다
    - 만약 검증된 사용자라면 `firstName: 'John'` 이라는 값을 리턴한다
    - 만약 검증되지 않았다면, 403 응답과 함께 `errorMessage: 'Not authenticated'` 이라는 값을 리턴한다.
- 최종적으로, 작성한 worker를 `worker.start()`로 등록한다

브라우저별로 세팅 절차가 다르기 때문에 [공식 도큐 - Integrate](https://mswjs.io/docs/getting-started/integrate) 내용을 확인해서 세팅하면 된다. 해당 글에서는 '브라우저' 기준으로 msw를 적용할것이다.

## MSW 다양한 사례

기본적인 내용 이외에도 다양한 케이스에서 [msw를 활용할 수 있는 방법](https://mswjs.io/docs/recipes)들이 있다. 이중, 유용하게 사용할 수 있는 네 가지 사례를 정리해보았다.

> ### Cookies

보안상의 이유로`fetch`에서 Set-Cookie 및 Set-Cookie2 헤더를 설정할 수 없다.

그러나 Mock Service Worker는 클라이언트 측에서 실행되므로, 보안 위반 없이 응답으로부터 Mocked 쿠키를 수신하는 것과 유사한 기능을 제공할 수 있다. `document.cookie` 문자열에 지정된 쿠키를 직접 설정하는 `ctx.cookie()` 응답 변환기 함수(response transformer function)를 사용하면 된다.

**예시**

```jsx
import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.post('/login', (req, res, ctx) => {
    return res(
      // Calling `ctx.cookie()` sets given cookies
      // on `document.cookie` directly.
      ctx.cookie('auth-token', 'abc-123'),
    )
  }),
)

worker.start()
```

> ### Query parameters

인터셉트된 요청의 쿼리 매개 변수에 액세스하려면 `req.url` 인스턴스에서 `searchParams` 속성을 사용하면 된다. 이 속성의 값은 모든 쿼리 매개 변수를 포함하는 [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) 인스턴스이다.

예를 들어, MSW로 테스트를 할 때 요청 파라미터에 따라 다른 응답을 줘야하는 경우가 있는데, 이때 핸들러에서 `req` 객체를 통해 파라미터에 접근이 가능하다.

```jsx
import { setupWorker, rest } from 'msw'
const worker = setupWorker(
  rest.get('/products', (req, res, ctx) => {
    const productId = req.url.searchParams.get('id')
    return res(
      ctx.json({
        productId,
      }),
    )
  }),
)
worker.start()
```

**Request**

`GET fetch('/products?id=123')`

**Response**`200 OK`

**Body**

```bash
{
  // Where '123' is the value of `req.url.searchParams.get('id')`
  // parsed from the request URL.
  "productId": "123"
}
```

더 자세한 설명은 [링크](https://mswjs.io/docs/recipes/query-parameters)에서 확인할 수 있다.

> ### Response patching

Response patching은 모의 응답(mocked response)이 실제 응답을 기반으로 데이터를 구성할 수 있게한다. 이 기법은 핸들러에서 실제 서버에 요청을 보낸 후 받은 데이터에 디버깅 등에 필요한 정보를 임의로 덧붙이는 방식으로 작동한다.

아래는 [Github API v3](https://docs.github.com/en/rest)에서 응답을 패칭하는 예시이다:

```jsx
import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.get('https://api.github.com/users/:username', async (req, res, ctx) => {
    // Perform an original request to the intercepted request URL
    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()

    return res(
      ctx.json({
        location: originalResponseData.location,
        firstName: 'Not the real first name',
      }),
    )
  }),
)

worker.start()
```

**Request**

`GET 'https://api.github.com/users/octocat'`

**Response**`200 OK`

**Body**

```bash
{
  // Resolved from the original response
  "location": "San Francisco",
  "firstName": "Not the real first name"
}
```

더 자세한 설명은 [링크](https://mswjs.io/docs/recipes/response-patching)에서 확인할 수 있다.

> ### Mocking error responses

msw로 요청에 대한 에러 응답을 mocking 할 수도 있다. 오류 응답을 예외가 아닌 실제 응답으로 처리함으로써, 표준을 준수하고 클라이언트 코드가 유효한 오류 응답을 수신하고 처리하는지 확인할 수 있다.

아래는 로그인 `POST`요청에서 에러 응답을 mocking 하는 예제이다:

```jsx
import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.post('/login', async (req, res, ctx) => {
    const { username } = await req.json()

    return res(
      // Send a valid HTTP status code
      ctx.status(403),
      // And a response body, if necessary
      ctx.json({
        errorMessage: `User '${username}' not found`,
      }),
    )
  }),
)

worker.start()
```

**Request**

`POST '/login'`

**Body**

```bash
{
  "username": "admin"
}
```

**Response**

`403 Forbidden`

**Body**

```bash
{
  "errorMessage": "User 'admin' not found"
}
```

더 자세한 설명은 [링크](https://mswjs.io/docs/recipes/mocking-error-responses)에서 확인할 수 있다.
