import styles from './Footer.module.scss'
import logo from 'src/assets/images/HeaderLogo.svg'
import playmarket from 'src/assets/images/GooglePlay.svg'
import instagram from 'src/assets/images/Instagram.svg'
import telegram from 'src/assets/images/Telegram.svg'
import youtube from 'src/assets/images/youtube.svg'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.wrapper}>
				<Link to='/'>
					<img src={logo} alt='logo' />
				</Link>
				<Link to='/'>
					<img src={playmarket} alt='google playmarket' />
				</Link>
				<div className={styles.contacts}>
					<a className={styles.tel} href='tel:+998933625744'>
						+998 93 362 57 44
					</a>
					<a className={styles.mail} href='mailto:bookie@gmail.com'>
						bookie@gmail.com
					</a>
				</div>
				<div className={styles.social}>
					<h2>Social tarmaqlar</h2>
					<div className={styles.logos}>
						<img src={instagram} alt='instagram' />
						<img src={telegram} alt='telegram' />
						<img src={youtube} alt='youtube' />
					</div>
				</div>
				<div className={styles.support}>
					<Link to='/donate'>Joybardı qollap-quwatlaw</Link>
					<div>© 2023 Bookie | Karsoft</div>
				</div>
			</div>
			<div className={styles.line}></div>
		</div>
	)
}
export { Footer }
