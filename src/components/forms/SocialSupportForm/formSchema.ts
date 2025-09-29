import { z } from 'zod';

export const SocialSupportFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  nationalId: z.string().min(1, { message: 'National ID is required' }),

  gender: z.string().min(1, { message: 'Gender is required' }),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z
    .string()
    .min(10)
    .max(14, { message: 'Phone number must be between 10 and 14 characters' }),
  dateOfBirth: z.date().min(1, { message: 'Date of birth is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
  maritalStatus: z.string().min(1, { message: 'Marital status is required' }),
  dependents: z.number({ message: 'Dependents is required' }),
  employmentStatus: z
    .string()
    .min(1, { message: 'Employment status is required' }),
  monthlyIncome: z.number({ message: 'Monthly income is required' }).nullable(),
  housingStatus: z.string().min(1, { message: 'Housing status is required' }),
  financialSituation: z.string().min(10, {
    message:
      'Financial situation is required and must be at least 10 characters',
  }),
  employmentCircumstances: z.string().min(10, {
    message:
      'Employment circumstances is required and must be at least 10 characters',
  }),
  reasonForApplying: z.string().min(10, {
    message:
      'Reason for applying is required and must be at least 10 characters',
  }),
});
