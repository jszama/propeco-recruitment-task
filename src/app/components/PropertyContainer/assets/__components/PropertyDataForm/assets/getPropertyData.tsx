'use server';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.PROPECO_API_URL,
    headers: {
        "x-api-key": process.env.PROPECO_API_KEY,
    },
});

export default async function getPropertyData(prevState: any, formData: FormData) {
    const uprn = formData.get('uprn')?.toString();
    if (!uprn) return;

    try {
        const response = await apiClient.get(uprn);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error('Property not found');
        } else {
            throw new Error('An unknown error occurred');
        }
    }
};