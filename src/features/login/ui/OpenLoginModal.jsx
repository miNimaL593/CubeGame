import {useState} from "react";
import {BaseModal, Button, Input} from "../../../shared/ui/components/index.js";
import {useAuthStore} from "../../../shared/models/store/index.js";
import {message} from "antd";



const OpenLoginModal = () => {
	
	const [open, setOpen] = useState(false);
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const { login: authenticate } = useAuthStore();
	
	const handleLogin = async () => {
		if (!login && !password) {
			message.error('Логин и пароль не введены');
		} else if (!login) {
			message.error('Логин не введен');
		} else if (!password) {
			message.error('Пароль не введен');
		} else {
			const result = await authenticate(login, password);
			if (result.success) {
				message.success('Вход совершен');
			} else {
				message.error('Неверный логин или пароль');
			}
		}
	};
	
	return (
		<>
			<BaseModal
				open={open}
				onCancel={() => setOpen(false)}
				buttonLogin={<Button classTitle='button-default' title='Войти' onClick={() => handleLogin()} />}
				inputLogin={<Input required type="text" value={login} onChange={(e) => {setLogin(e.target.value); console.log("Login changed:", e.target.value);} } placeholder="Логин" />}
				inputPassword={<Input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />}
			/>
			<Button
				title='Вход'
				key='button'
				classTitle='button-default'
				onClick={() => {
					setOpen(true)
				}}
			/>
		
		</>
	)
}

export default OpenLoginModal;

OpenLoginModal.propTypes = {

}
