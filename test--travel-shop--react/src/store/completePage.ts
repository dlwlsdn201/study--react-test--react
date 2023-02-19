import { create } from 'zustand';

interface INTERFACE_COMPLETE_PAGE {
	error: boolean;
	loading: boolean;
	orderHistory: Array<any>;
	changeError: (nextState: boolean) => void;
	changeLoading: (nextState: boolean) => void;
	changeOrderHistory: (nextState: Array<any>) => void;
}

// [완료 페이지] 에서 관리되는 state
const completePageStore = create<INTERFACE_COMPLETE_PAGE>((set) => ({
	error: false,
	loading: true,
	orderHistory: [],
	changeError: (nextState) => set(() => ({ error: nextState })),
	changeLoading: (nextState) => set(() => ({ loading: nextState })),
	changeOrderHistory: (nextState) => set(() => ({ orderHistory: nextState }))
}));

export default completePageStore;
