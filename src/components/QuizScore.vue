<template>
	<h1 class="font-thin text-5xl">
		Scores
	</h1>
	<div
		v-for="(score, index) in sortedScores"
		:key="index"
		class="pt-8 space-y-6"
	>
		<p class="text-xl">
			<span><span class="text-blue-400">{{ questions.length }}</span> questions, </span>
			<span><span class="text-blue-400">{{ score.right }}</span> correct answers, </span>
			<span><span class="text-blue-400">{{ questions.length - score.right }}</span> wrong answers, </span>
			<span><span class="text-blue-400">{{ 100 * score.right / questions.length }}%</span> success, </span>
			<span><span class="text-blue-400">{{ score.time  }}sec</span> spend, </span>
		</p>
	</div>
	<TheButton
		class="mt-8"
		@click="router.go(-1)"
	>
		Once more?
	</TheButton>
</template>

<script setup lang="ts">
	import {inject, Ref} from "vue"
	import {IQuestion, IScore} from "../types/Question"
	import {useRouter} from 'vue-router'
	import TheButton from "./ui/TheButton.vue"

	const router = useRouter()
	const questions = inject('questions') as Ref<IQuestion[]>
	const scores = inject('scores') as Ref<IScore[]>
	const sortedScores = scores.value.sort((a, b) => a.time - b.time)

</script>
