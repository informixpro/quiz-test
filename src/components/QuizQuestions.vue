<template>
	<div
		v-for="(question, index) in questions"
		:key="index"
	>
		<template v-if="index === currentQuestion">
			<h1 class="font-thin text-5xl">
				{{ question.title }}
			</h1>
			<p class="text-xl mt-4">
				Choose one answer that apply
			</p>
			<div class="space-y-6 mt-8">
				<TheAnswer
					v-for="answer in question.answers"
					:key="answer.id"
					class="w-full"
					:class="[
						answer.id === question.answer ? isAnswerRight(question) ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : ''
					]"
					:disabled="isQuestionAnswered(question)"
					@click="handleAnswer(question, answer)"
				>
					{{ answer.label }}
				</TheAnswer>
			</div>
			<TheButton
				class="mt-8"
				:disabled="!isQuestionAnswered(question)"
				@click="handleNextQuestion"
			>
				Next
			</TheButton>
		</template>
	</div>
</template>

<script setup lang="ts">
	import {ref, inject, Ref, onMounted} from 'vue'
	import {useRouter} from 'vue-router'
	import TheButton from "./ui/TheButton.vue"
	import TheAnswer from "./ui/TheAnswer.vue"
	import {IQuestion, IAnswer, IScore} from '../types/Question'
	import {isAnswerRight, isQuestionAnswered, resetQuestions} from "../composables/checkState"

	let timer = 0
	const questions = inject('questions') as Ref<IQuestion[]>
	const scores = inject('scores') as Ref<IScore[]>
	const currentQuestion = ref(0)
	const router = useRouter()
	const handleNextQuestion = () => {
		if (currentQuestion.value < questions.value.length - 1) {
			currentQuestion.value++
		} else {
			scores.value.push({
				right: questions.value.filter((question: IQuestion)  => isAnswerRight(question)).length,
				time: new Date().getSeconds() - timer,
			})
			router.push('/score')
		}
	}
	const handleAnswer = (question: IQuestion, answer: IAnswer): void => {
		question.answer = answer.id
	}

	onMounted(() => {
		timer = new Date().getSeconds()
		resetQuestions(questions.value)
	})
</script>
