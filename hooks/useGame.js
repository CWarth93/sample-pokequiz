import { useState } from 'react';
import { loadQuestions } from '../fetchers/api.js';
import { getCurrentLanguage } from '../business/locales.js';

const hook = ({ nextPhase, nameError }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [questionsWithAnswers, setQuestionsWithAnswers] = useState([]);
	const loadQuestionsWithAnswers = async () => {
		setIsLoading(true);
		const qwa = (await loadQuestions(getCurrentLanguage())).questionsWithAnswers;
		setQuestionsWithAnswers(qwa);
		setIsLoading(false);
	};
	const startGame = () => {
		if (!nameError) {
			nextPhase();
			loadQuestionsWithAnswers();
		}
	};
	const [userAnswers, setUserAnswers] = useState([]);
	const [questionIndex, setQuestionIndex] = useState(0);
	const answer = (option) => {
		setUserAnswers([...userAnswers, option]);
		setQuestionIndex(questionIndex + 1);
		if (questionIndex === questionsWithAnswers.length - 1) {
			calculateResults();
		}
	};
	const calculateResults = () => {
		const correctAnswers = questionsWithAnswers.map((qwa) => qwa.answer);
		let score = 0;
		for (let i = 0; i < correctAnswers.length; i++) {
			if (correctAnswers[i] === userAnswers[i]) {
				score++;
			}
		}
		console.log('score', score);
		sendResult();
	};
	const sendResult = () => {
		// request to send result and load highscore
		nextPhase();
	};

	return { startGame, questionsWithAnswers, questionIndex, answer, isLoading };
};

export default hook;
