import { useState } from 'react';
import { loadQuestions } from '../fetchers/api.js';
import { getCurrentLanguage } from '../business/locales.js';

const hook = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [questionsWithAnswers, setQuestionsWithAnswers] = useState([]);
	const startGame = async () => {
		setIsLoading(true);
		const qwa = (await loadQuestions(getCurrentLanguage())).questionsWithAnswers;
		setQuestionsWithAnswers(qwa);
		setIsLoading(false);
	};

	const [userAnswers, setUserAnswers] = useState([]);
	const [questionIndex, setQuestionIndex] = useState(0);
	const answer = (option) => {
		setUserAnswers([...userAnswers, option]);
		setQuestionIndex(questionIndex + 1);
	};

	const endGame = async () => {
		setIsLoading(true);
		const correctAnswers = questionsWithAnswers.map((qwa) => qwa.answer);
		let score = 0;
		for (let i = 0; i < correctAnswers.length; i++) {
			if (correctAnswers[i] === userAnswers[i]) {
				score++;
			}
		}
		console.log('score', score);
		// request to send result and load highscore (we gonna need the name here)
		setIsLoading(false);
	};

	return { startGame, questionsWithAnswers, questionIndex, answer, isLoading, endGame };
};

export default hook;
