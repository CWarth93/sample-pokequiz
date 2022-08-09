import { sendRequest } from '../basics/http';

const PROTOCOL = process.env.NEXT_PUBLIC_IS_LOCAL === 'true' ? 'http' : 'https';
const HOST = () => window.location.host;

const loadQuestions = async (language) => await sendRequest({ method: 'GET', url: PROTOCOL + '://' + HOST() + '/api/loadQuestions', headers: { language } });

export { loadQuestions };
