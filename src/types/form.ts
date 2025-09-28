export type FormData = {
  name: string;
  nationalId: string;
  dateOfBirth: string;
  gender: Gender;
  address: string;
  city: string;
  state: string;
  country: string;
  phoneNumber: string;
  email: string;
  maritalStatus: string;
  dependents: number;
  employmentStatus: string;
  monthlyIncome: number | null;
  financialSituation: string;
  employmentCircumstances: string;
  reasonForApplying: string;
};
