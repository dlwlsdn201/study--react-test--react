import './App.css';
import { OrderContextProvider } from './contexts/OrderContext';
import CompletePage from './pages/CompletePage/CompletePage';
import OrderPage from './pages/OrderPage';
import SummaryPage from './pages/SummaryPage/SummaryPage';
import commonStore from './store/common';

function App() {
	const { step } = commonStore(); // zustand

	const renderPage = (currentStep) => {
		if (currentStep === 0) return <OrderPage />;
		else if (currentStep === 1) return <SummaryPage />;
		else if (currentStep === 2) return <CompletePage />;
	};

	return (
		<div style={{ padding: '1em' }}>
			<OrderContextProvider>{renderPage(step)}</OrderContextProvider>
		</div>
	);
}

export default App;
