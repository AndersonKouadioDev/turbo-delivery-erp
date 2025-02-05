import { io } from 'socket.io-client';

const URL = 'http://147.79.101.226:3009';
// const URL = 'https://turbodeliveryapp.com:3009';
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://147.79.101.226:3009';

export const socket = io(URL);
