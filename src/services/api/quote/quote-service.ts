import { get } from '../api.service';

export const getQuoteOfDayRequest = () => get('qod?language=en');
