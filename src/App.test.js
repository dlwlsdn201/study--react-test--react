import { toHaveTextContent } from '@testing-library/jest-dom/dist/matchers';
import { render, screen } from '@testing-library/react';
import App from './App';

test('The counter starts at 0', () => {
	render(<App />); // App 컴포넌트 렌더링 (root 컴포넌트 렌더링)

	// screen object를 이용해서 원하는 element에 접근 (id로 접근)
	const counterElement = screen.getByTestId('counter');

	// id가 counter인 element의 텍스트가 0인지 테스트
	expect(counterElement).toHaveTextContent(0);
});
