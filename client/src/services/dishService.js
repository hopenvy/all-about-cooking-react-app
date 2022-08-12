import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/dish';

export const getAll = () => request.get(`${baseUrl}`);

export const create = (dishData) => request.post(baseUrl, dishData)