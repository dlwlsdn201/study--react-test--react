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

> ### 테스트 파일 코드 구조

![image](https://user-images.githubusercontent.com/53039583/208230654-6156e9ce-048d-4d90-8d93-1d0e560d70b0.png)

- `describe` : 여러 관련 테스트를 그룹화하는 블록을 만든다. (ex_ 과일)
- `it` : 개별 테스트를 수행하는 곳. 각 test를 작은 문장처럼 설명한다. (ex_ 바나나)
- `test`
    - `test.skip()` : 해당 test() 구문은 skip 하고 다음 test 구문으로 넘어간다.
    - `test.only()` : 해당 test() 구문만 실행한다. (나머지 test구문은 skip).
- `expect` : 값을 테스트할 때마다 사용된다. 그리고 expect  함수 혼자서는 거의 사용되지 않고, **matcher 와 함께 사용된다.**
- `matcher` : expect 에 대한 결과 도출을 위해 테스트 방식을 정의하는 함수
    
    ![image](https://user-images.githubusercontent.com/53039583/208230671-9ad88ea7-e64a-47b5-81ed-df3c11ee1992.png)
    
    ![image](https://user-images.githubusercontent.com/53039583/208230675-d605612c-7d37-4d17-904c-39f86b2e407e.png)
    
    ![image](https://user-images.githubusercontent.com/53039583/208230678-7292641b-4055-458b-89b7-c552452b769d.png)
    
- `render()` : DOM에 컴포넌트를 rendering 하는 함수. 인자 형식은 **react component**.
- `fireEvent` : DOM Element 에 대한 **이벤트**를 제어하는 인스턴스
    - `.click()` : DOM Element 에 클릭 이벤트 발생시킴

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

→ 주어진 쿼리와 일치하는 요소가 발견되면 `Promise`를 return 하며, 요소가 발견되지 않거나 기본 제한 시간인 1000ms 후에 둘 이상의 요소가 발견되면 Promise  가 거부된다. 
(둘 이상의 요소를 find 해야 하는 경우,  `findAllBy`을 사용)

## waitFor

→ 일정 기간 동안 기다려야 할 때, expect() 가 통과할 때까지 기다릴 수 있다.


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

