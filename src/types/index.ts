// types/index.ts
export interface Advisor {
  id: number;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  address: string;
  income: number;
  education?: string;
  title?: string;
  yearsOfExperience?: number;
  idNumber?: string;
}
