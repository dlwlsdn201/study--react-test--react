import React from 'react';
import { BUTTON_MODULE, DIV_FLEX, SECTION_MODULE } from 'src/styles/modules';
import Type from './Type';

const OrderPage = () => {
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
									상품 총 가격: <br />{' '}
								</h2>
								<BUTTON_MODULE type='button'>주문</BUTTON_MODULE>
							</div>
						</SECTION_MODULE>
					</DIV_FLEX>
				</div>
			</main>
		</div>
	);
};

export default OrderPage;
