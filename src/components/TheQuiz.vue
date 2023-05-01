<template>
	<section class="container">
		<div class="flex flex-col h-screen justify-center items-start">
			<router-view />
		</div>
	</section>
</template>

<script setup lang="ts">
	import {ref, provide} from "vue";
	import {IQuestion, IScore} from '../types/Question'
	// import axios from "axios"
	//
	// const getQuizData = async (): Promise<any> => {
	// 	try {
	// 		const {data} = await axios.get(api)
	// 		questions.value = data
	// 	} catch (error: any) {
	// 		console.log(error)
	// 	}
	// };

	const questions = ref<IQuestion[]>([
		{
			id: '1',
			title: 'What is the best social network?',
			answer: '',
			answers: [
				{
					id: '1',
					label: 'Facebook',
					state: true
				},
				{
					id: '2',
					label: 'Twitter',
					state: false
				},
				{
					id: '3',
					label: 'LinkedIn',
					state: false
				},
			]
		},
		{
			id: '2',
			title: 'What is the best programming language?',
			answer: '',
			answers: [
				{
					id: '1',
					label: 'Python',
					state: false
				},
				{
					id: '2',
					label: 'JavaScript',
					state: true
				},
				{
					id: '3',
					label: 'Java',
					state: false
				},
			]
		}
	])
	const scores = ref<IScore[]>([])

	provide('questions', questions)
	provide('scores', scores)
</script>
