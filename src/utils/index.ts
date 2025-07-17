export const pathsRoutesAPI = {
  mainRoute: 'http://localhost:3001',
  advisorsPage: '/advisors',
  advisorAPI: '/advisor',
};

export const formatIncome = (income: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(income);
};
