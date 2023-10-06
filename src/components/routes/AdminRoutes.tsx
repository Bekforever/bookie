import {
	AdminHome,
	Users,
	Books,
	Author,
	Audio,
	BookInfo,
	Genre,
	Images,
	Narrator,
	Orders,
	Review,
	AdminCategory,
} from 'src/components/screens'

export const AdminRoutes = [
	{ path: '/admin', element: <AdminHome /> },
	{ path: '/admin/users', element: <Users /> },
	{ path: '/admin/books', element: <Books /> },
	{ path: '/admin/books/:slug', element: <BookInfo /> },
	{ path: '/admin/audio', element: <Audio /> },
	{ path: '/admin/author', element: <Author /> },
	{ path: '/admin/narrator', element: <Narrator /> },
	{ path: '/admin/genre', element: <Genre /> },
	{ path: '/admin/category', element: <AdminCategory /> },
	{ path: '/admin/images', element: <Images /> },
	{ path: '/admin/review', element: <Review /> },
	{ path: '/admin/orders', element: <Orders /> },
]
