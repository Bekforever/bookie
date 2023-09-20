import { Rate } from 'antd'
import React, { useState } from 'react'
import feedback from 'src/assets/images/feedback.png'
import styles from './HomeFeedback.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'

const HomeFeedback: React.FC = () => {
	const [name, setName] = useState('')
	const [text, setText] = useState('')
	const [rating, setRating] = useState(5)
	return (
		<div className={styles.wrapper}>
			<div className={styles.feedback}>
				<h2>Pikir bildiriw</h2>
				<Rate value={rating} onChange={e => setRating(e)} />
				<input
					placeholder='Atıńız'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<textarea
					placeholder='Pikiriniz'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<UiButton>Jollaw</UiButton>
			</div>
			<div className={styles.img}>
				<img src={feedback} alt='feedback' />
			</div>
		</div>
	)
}

export { HomeFeedback }
