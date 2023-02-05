import userEvent from '@testing-library/user-event';
import { render, screen } from 'src/test-utils';
import OrderPage from '..';

describe('total price of goods and options', () => {
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

	it('Updating total price when adding one option', async () => {
		render(<OrderPage />);
		const total = screen.getByText('합계:', { exact: false });

		const insuranceCheckbox = await screen.findByRole('checkbox', {
			name: 'Insurance'
		});
		userEvent.click(insuranceCheckbox);
		expect(total).toHaveTextContent('500');
	});

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
