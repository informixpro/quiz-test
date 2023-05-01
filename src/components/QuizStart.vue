<template>
	<h1 class="font-thin text-5xl">
		Welcome to quiz!
	</h1>
	<p class="text-xl mt-4">
		Are you ready?
	</p>
	<TheButton
		class="mt-8"
		@click="startQuiz"
	>
		Start quiz
	</TheButton>
</template>

<script setup lang="ts">
	import TheButton from "./ui/TheButton.vue"
	import {useRouter} from "vue-router"

	const router = useRouter()
	const startQuiz = () => {
		router.push('/questions')
	}
</script>
