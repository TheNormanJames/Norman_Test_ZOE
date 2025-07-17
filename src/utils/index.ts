export const pathsRoutesAPI = {
  mainRoute: 'http://localhost:3001',
  advisor: '/advisor',
};

export const formatIncome = (income: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(income);
};
