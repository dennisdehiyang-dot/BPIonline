export interface FormData {
  id: string;
  fullName: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  approvalBatchCode: string;
  redemptionMethod: 'giftchecked' | 'cashback' | 'savings';
  points: number;
  cashValue: number;
  submittedAt: string;
}

export const saveFormData = (data: Omit<FormData, 'id' | 'submittedAt'>) => {
  const submissions = getSubmissions();
  const newSubmission: FormData = {
    ...data,
    id: Date.now().toString(),
    submittedAt: new Date().toISOString(),
  };
  
  submissions.push(newSubmission);
  localStorage.setItem('bpi-submissions', JSON.stringify(submissions));
  return newSubmission.id;
};

export const getSubmissions = (): FormData[] => {
  const stored = localStorage.getItem('bpi-submissions');
  return stored ? JSON.parse(stored) : [];
};

export const getCurrentFormData = () => {
  const stored = localStorage.getItem('current-form-data');
  return stored ? JSON.parse(stored) : {};
};

export const saveCurrentFormData = (data: Record<string, string>) => {
  localStorage.setItem('current-form-data', JSON.stringify(data));
};

export const clearCurrentFormData = () => {
  localStorage.removeItem('current-form-data');
};