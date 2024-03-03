import axios, { AxiosInstance } from 'axios';
import { appConfig } from '../appConfig';

const env = 'development';
const { apiUrl } = appConfig[env];

export const apiClient: AxiosInstance = axios.create({
    baseURL: apiUrl,
});