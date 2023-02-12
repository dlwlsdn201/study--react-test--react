import { create } from 'zustand';

const commonStore = create((set) => ({
	step: 0,
	initStep: () => set((state: { step: number }) => ({ step: 0 })),
	prevStep: () => set((state: { step: number }) => ({ step: state.step - 1 })),
	nextStep: () => set((state: { step: number }) => ({ step: state.step + 1 }))
}));

export default commonStore;
