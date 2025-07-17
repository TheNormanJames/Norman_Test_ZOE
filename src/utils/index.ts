export const pathsRoutesProject = {
  mainRoutePage: 'http://localhost:3000',
  advisorsPage: '/advisors',
  mainRouteAPI: 'http://localhost:3001',
  advisorAPI: '/advisor',
};

export const formatIncome = (income: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(income);
};
