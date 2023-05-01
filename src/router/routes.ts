import {RouteRecordRaw} from 'vue-router'

const QuizStart = () => import('@/components/QuizStart.vue')
const QuizQuestions = () => import('@/components/QuizQuestions.vue')
const QuizScore = () => import('@/components/QuizScore.vue')

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: QuizStart
	},
	{
		path: '/questions',
		component: QuizQuestions
	},
	{
		path: '/score',
		component: QuizScore
	},
]

export default routes
