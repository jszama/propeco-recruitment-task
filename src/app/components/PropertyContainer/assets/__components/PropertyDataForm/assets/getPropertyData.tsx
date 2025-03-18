'use server';
import axios from 'axios';
import { RawData } from '@/app/lib/types';

const apiClient = axios.create({
    baseURL: process.env.PROPECO_API_URL,
    headers: {
        "x-api-key": process.env.PROPECO_API_KEY,
    },
});

export default async function getPropertyData(prevState: RawData, formData: FormData) {
    const uprn = formData.get('uprn')?.toString();
    if (!uprn) {
        return { error: 'UPRN is required', data: null };
    }

    try {
        const response = await apiClient.get(uprn);
        return { data: response.data, error: null };
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            return { error: 'Property not found', data: null };
        } else {
            return { error: 'An unknown error occurred', data: null };
        }
    }
};