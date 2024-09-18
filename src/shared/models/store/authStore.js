import { create } from 'zustand';
import axios from 'axios';
import {message} from "antd";

const useAuthStore = create((set) => ({
	user: null,
	isLoggedIn: false,
	error: null,
	login: async (login, password) => {
		try {
			const response = await axios.post(
				'https://api.lettobet.dev.bet4skill.com/api/client-login',
				{ login, password },
				{
					headers: {
						'Accept': 'application/json, text/plain, */*',
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			);
			
			
			if (response.data.error) {
				// Если есть ошибка в ответе от сервера, выбрасываем исключение
				throw new Error(response.data.message);
			}
			message.success('Вход совершен');
			set({ user: response.data, isLoggedIn: true, error: null });
			
		} catch (error) {
			message.error('Ошибка авторизации');
			set({ error: 'Ошибка авторизации' });
			console.error("Ошибка авторизации:", error.response?.data || error.message);
		}
	},
	fetchUser: async () => {
		try {
			const response = await axios.get(
				'https://api.lettobet.dev.bet4skill.com/api/auth/me',
				{
					headers: {
						'Accept': 'application/json, text/plain, */*',
					},
					withCredentials: true,
				}
			);
			set({ user: response.data, isLoggedIn: true, error: null });
			console.log("Данные пользователя:", response.data);
		} catch (error) {
			set({ error: 'Ошибка получения данных пользователя' });
			console.error("Ошибка получения пользователя:", error.response?.data || error.message);
		}
	}
}));

export default useAuthStore;
