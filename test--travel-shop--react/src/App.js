import './App.css';
import { OrderContextProvider } from './contexts/OrderContext';
import OrderPage from './pages/OrderPage';
import commonStore from './store/common';

function App() {
	const { step } = commonStore();
	return (
		<div style={{ padding: '1em' }}>
			<OrderContextProvider>
				<OrderPage />
			</OrderContextProvider>
		</div>
	);
}

export default App;
