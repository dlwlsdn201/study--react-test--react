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
