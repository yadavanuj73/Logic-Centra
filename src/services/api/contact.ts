import { apiClient } from './client';
import type { ContactFormData } from '../../types';

export const contactApi = {
  submitInquiry: (data: ContactFormData) =>
    apiClient.post('/contact/inquiry', data),
};
