import React, { useState } from 'react'
import styles from './MyBooks.module.scss'
import { StyledButton } from 'src/components/ui/button/StyledButtons'
import { $host } from 'src/config/axios'
import { useQuery } from 'react-query'
import { IBookInfo } from 'src/assets/types/Types'
import { BookCard } from 'src/components/shared/BookCard/BookCard'
import prince from 'src/assets/images/prince.png'
import playbtn from 'src/assets/images/blue_play.svg'
import { Slider } from 'antd'

async function getMyBooks() {
	const res = await $host.get('/my-books')
	return res.data.data
}

const MyBooks: React.FC = () => {
	const [active, setActive] = useState('all')
	const { data } = useQuery<IBookInfo[]>({
		queryKey: ['my_books'],
		queryFn: getMyBooks,
	})

	return (
		<div className={styles.my_books}>
			<h1>Meniń kitaplarım</h1>
			<div className={styles.btns}>
				<StyledButton
					onClick={() => setActive('all')}
					backgroundcolor='none'
					color={
						active === 'all'
							? 'var(--brand-color-1)'
							: 'var(--typography-secondary)'
					}
					border={
						active === 'all'
							? '1px solid var(--brand-color-1)'
							: '1px solid var(--typography-secondary)'
					}
				>
					Barlıq kitaplarım
				</StyledButton>
				<StyledButton
					onClick={() => setActive('listen')}
					backgroundcolor='none'
					color={
						active === 'listen'
							? 'var(--brand-color-1)'
							: 'var(--typography-secondary)'
					}
					border={
						active === 'listen'
							? '1px solid var(--brand-color-1)'
							: '1px solid var(--typography-secondary)'
					}
				>
					Esitiliwde
				</StyledButton>
			</div>
			{active === 'all' && (
				<div className={styles.wrapper}>
					{data?.map(item => (
						<BookCard key={item.slug} {...item} />
					))}
				</div>
			)}
			{active === 'listen' && (
				<div className={styles.listen}>
					<div className={styles.audioitem}>
						<img src={prince} alt='img' />
						<div className={styles.text}>
							<h4>Kishkene Shaxzada</h4>
							<p>Antuan de Sent-Ekzyuperi</p>
						</div>
						<div className={styles.player}>
							<img src={playbtn} alt='button' />
							<div className={styles.timeline}>
								<div className={styles.time}>
									1:43:38<span>/3:12:34</span>
								</div>
								<Slider defaultValue={30} />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export { MyBooks }
