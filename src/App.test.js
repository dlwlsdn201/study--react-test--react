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
	expect(counterElement).toHaveTextContent('1');
});

// ======== 버튼의 style 속성값 테스트 코드 ========

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
	expect(minusElement).toHaveStyle({ backgroundColor: 'red' });
});

// ======== 버튼의 click event로 인한 dom 속성값 테스트 코드 ========

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
});
