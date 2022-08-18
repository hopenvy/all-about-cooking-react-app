import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}`);

export const getOne = (dishId) => request.get(`${baseUrl}/dishes/${dishId}`);

export const create = (dishData) => request.post(`${baseUrl}/dishes`, dishData);

export const edit = (dishId, dishData) => request.put(`${baseUrl}/dishes/${dishId}`, dishData);

export const remove = (dishId) => request.del(`${baseUrl}/dishes/${dishId}`);