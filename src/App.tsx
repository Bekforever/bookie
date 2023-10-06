import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import s from 'src/assets/styles/App.module.scss'
import { Layout } from './components/layouts/user/Layout'
import { routes } from './components/routes/Routes'
import { protectedRoutes } from './components/routes/ProtectedRoutes'
import { authStore } from './store/authStore'
import { NotFound } from './components/screens'
import ScrollToTop from './utils/ScrollToTop'
import { AdminRoutes } from './components/routes/AdminRoutes'
import { AdminLayout } from './components/layouts/admin/AdminLayout'

const App = () => {
	const { auth, setRole, role } = authStore()

	return (
		<div className={s.app}>
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<Layout />}>
						{routes.map(item => (
							<Route key={item.path} path={item.path} element={item.element} />
						))}
						{auth &&
							protectedRoutes.map(item => (
								<Route
									key={item.path}
									path={item.path}
									element={item.element}
								/>
							))}
						<Route path='*' element={<NotFound />} />
					</Route>
					{role === ('admin' || 'super_admin') && (
						<Route path='/admin' element={<AdminLayout />}>
							{AdminRoutes.map(item => (
								<Route
									key={item.path}
									path={item.path}
									element={item.element}
								/>
							))}
							<Route path='*' element={<NotFound />} />
						</Route>
					)}
				</Routes>
			</ScrollToTop>
		</div>
	)
}
export { App }
