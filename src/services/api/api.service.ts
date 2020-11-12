import axios from 'axios';

// replace with env
const baseUrl = 'https://quotes.rest';

// eslint-disable-next-line import/prefer-default-export
export const get = (url: string) => axios.get(`${baseUrl}/${url}`);
