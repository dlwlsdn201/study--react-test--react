import { create } from 'zustand';

interface INTERFACE_COMMON {
	step: number;
	initStep: () => void;
	prevStep: () => void;
	nextStep: () => void;
}

const commonStore = create<INTERFACE_COMMON>((set) => ({
	step: 0,
	initStep: () => set((state: { step: number }) => ({ step: 0 })),
	prevStep: () => set((state: { step: number }) => ({ step: state.step - 1 })),
	nextStep: () => set((state: { step: number }) => ({ step: state.step + 1 }))
}));

export default commonStore;
