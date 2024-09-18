import AuthModal from "../../../shared/ui/components/BaseModal/BaseModal.jsx";
import Button from "../../../shared/ui/components/Button/Button.jsx";
import {useState} from "react";
import Input from "../../../shared/ui/components/Input/Input.jsx";


const OpenRegistrationModal = () => {
	const [open, setOpen] = useState(false);
	
	return (
		<>
			<AuthModal
				open={open}
				onCancel={() => setOpen(false)}
				buttonRegistration={<Button classTitle='button-default' title='Зарегистрироваться'/>}
				inputLogin={<Input required placeholder='Login'/>}
				inputPassword={<Input required placeholder='Passord'/>}
				inputPasswordRepeat={<Input required placeholder='Password repeat'/>}
			/>
			<Button
				title='Регистрация'
				key='button'
				classTitle='button-default'
				onClick={() => {
					setOpen(true)
				}}
			/>		</>
	)
}

export default OpenRegistrationModal;