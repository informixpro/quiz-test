export interface IAnswer {
	id: string
	label: string
	state: boolean
}

export interface IQuestion {
	id: string
	title: string
	answer: string
	answers: IAnswer[]
}

export interface IScore {
	right: number
	time: number
}
