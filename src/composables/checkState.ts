import {IAnswer, IQuestion} from "../types/Question"

export const isQuestionAnswered = (question: IQuestion): boolean => {
	return question.answer !== ''
}

export const isAnswerRight = (question: IQuestion): boolean => {
	if (!isQuestionAnswered(question)) return false
	const answer = question.answers.find((answer: IAnswer) => answer.id == question.answer)
	return answer ? answer.state : false
}

export const resetQuestions = (questions: IQuestion[]): void => {
	questions.map((question: IQuestion) => {
		question.answer = ''
	})
}
