import './MainPage.scss'
import Header from "../../../shared/ui/components/Header/Header.jsx";
import {OpenLoginModal} from "../../../features/login/index.js";
import {OpenRegistrationModal} from "../../../features/registration/index.js";
import GameCubeBlock from "../../../widgets/game/ui/GameCubeBlock.jsx";
import {useEffect} from "react";
import {useAuthStore} from "../../../shared/models/store/index.js";

const MainPage = () => {
	
	const { fetchUser, isLoggedIn } = useAuthStore();
	
	
	useEffect(() => {
		fetchUser();
	}, [fetchUser]);
	
	return (
		<main className="main">
			<Header isLoggedIn={isLoggedIn} openLoginModalSlot={<OpenLoginModal />} openRegistrationModal={<OpenRegistrationModal />} />
			{isLoggedIn ? (
				<GameCubeBlock />
			) : (
				<>
					<GameCubeBlock />
					<div className="main-login">
						<div className='main-login__text-box'>
							Войдите чтобы продолжить
						</div>
					</div>
				</>
			)}
			{/*<BaseModal/>*/}
		</main>
	)
}

export default MainPage;