import { render, screen } from 'src/test-utils';
import SummaryPage from '../SummaryPage';

it('checkbox and button', () => {
	render(<SummaryPage />);
	const checkbox = screen.getByRole('checkbox', {
		name: '주문하려는 것을 확인하셨나요?'
	});

	expect(checkbox.checked).toEqual(false); // 최초 렌더링 시, 체크박스는 false 이어야함.

	const confirmButton = screen.getByRole('button', {
		name: '주문 확인'
	});
	expect(confirmButton.disabled).toBeTruthy();
});
