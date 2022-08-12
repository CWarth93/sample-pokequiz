import { sendRequest } from '../basics/http';

const PROTOCOL = process.env.NEXT_PUBLIC_IS_LOCAL === 'true' ? 'http' : 'https';
const HOST = () => window.location.host;

const loadQuestions = async (language) => await sendRequest({ method: 'GET', url: PROTOCOL + '://' + HOST() + '/api/loadQuestions', headers: { language } });
const postResult = async (name, score) => await sendRequest({ method: 'POST', url: PROTOCOL + '://' + HOST() + '/api/postResult', body: { name, score } });

export { loadQuestions, postResult };
