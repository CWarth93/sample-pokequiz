import { useState } from 'react';
import { loadQuestions, postResult } from '../fetchers/api.js';
import { getCurrentLanguage } from '../business/locales.js';

const hook = () => {
	const [questionsWithAnswers, setQuestionsWithAnswers] = useState([]);
	const loadQuestionsWithAnswers = async () => {
		const qwa = (await loadQuestions(getCurrentLanguage())).questionsWithAnswers;
		setQuestionsWithAnswers(qwa);
	};

	const [userAnswers, setUserAnswers] = useState([]);
	const [questionIndex, setQuestionIndex] = useState(0);
	const resetQuestionnaire = () => {
		setQuestionIndex(0);
		setUserAnswers([]);
	};
	const answer = (option) => {
		console.log(userAnswers);
		setUserAnswers([...userAnswers, option]);
		setQuestionIndex(questionIndex + 1);
	};

	return { loadQuestionsWithAnswers, questionsWithAnswers, questionIndex, resetQuestionnaire, answer, userAnswers };
};

export default hook;
