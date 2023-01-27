import './App.css';
import { OrderContext, OrderContextProvider } from './contexts/OrderContext';
import OrderPage from './pages/OrderPage';

function App() {
	return (
		<div style={{ padding: '1em' }}>
			<OrderContextProvider>
				<OrderPage />
			</OrderContextProvider>
		</div>
	);
}

export default App;
