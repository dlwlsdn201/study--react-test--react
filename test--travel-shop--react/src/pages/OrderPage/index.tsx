import React, { useContext } from 'react';
import { OrderContext } from 'src/contexts/OrderContext';
import commonStore from 'src/store/common';
import { BUTTON_MODULE, DIV_FLEX, SECTION_MODULE } from 'src/styles/modules';
import Type from './Type';

const OrderPage = () => {
	const [totalData, updateitemCount] = useContext(OrderContext);
	const { nextStep } = commonStore();
	return (
		<div>
			<header>
				<h2>Travel Products</h2>
			</header>
			<main>
				<SECTION_MODULE borderColor='green'>
					<Type orderType='products' />
				</SECTION_MODULE>
				<div style={{ marginTop: 20 }}>
					<DIV_FLEX>
						<SECTION_MODULE borderColor='purple'>
							<Type orderType='options' />
						</SECTION_MODULE>
						<SECTION_MODULE>
							<div>
								<h2>
									합계: {totalData.totals.total}
									<br />{' '}
								</h2>
								<BUTTON_MODULE type='button' onClick={nextStep}>
									주문하기
								</BUTTON_MODULE>
							</div>
						</SECTION_MODULE>
					</DIV_FLEX>
				</div>
			</main>
		</div>
	);
};

export default OrderPage;
