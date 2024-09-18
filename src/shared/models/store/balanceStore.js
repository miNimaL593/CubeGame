import { create } from 'zustand';

const useBalanceStore = create((set) => ({

	balance: 100,
	setBalance: (user) => {
		const storedBalance = localStorage.getItem(`balance_${user.id}`);
		
		let initialBalance;
		if (storedBalance) {
			initialBalance = Number(storedBalance);
		} else {
			initialBalance = user.balance > 0 ? user.balance : 100;
			localStorage.setItem(`balance_${user.id}`, initialBalance);
		}
		set({ balance: initialBalance });
	},
	updateBalance: (user, newBalance) => {
		localStorage.setItem(`balance_${user.id}`, newBalance);
		
		set({ balance: newBalance });
	},
	placeBet: (betAmount) => set((state) => {
		const newBalance = state.balance >= betAmount ? state.balance - betAmount : state.balance;
		localStorage.setItem(`balance_${state.userId}`, newBalance);
		return { balance: newBalance };
	}),
	addWinnings: (winnings) => set((state) => {
		const newBalance = state.balance + winnings;
		localStorage.setItem(`balance_${state.userId}`, newBalance);
		return { balance: newBalance };
	}),
}));

export default useBalanceStore;
