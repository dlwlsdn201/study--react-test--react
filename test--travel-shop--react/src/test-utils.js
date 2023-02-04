import { render } from '@testing-library/react';
import { OrderContextProvider } from './contexts/OrderContext';

const customRender = (ui, options) =>
	render(ui, { wrapper: OrderContextProvider, ...options });

export * from '@testing-library/react'; // RTL 라이브러리의 모든 패키지를 다시 export

// override render method
export { customRender as render };
