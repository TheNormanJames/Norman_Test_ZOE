import AdvisorCard from '@/components/AdvisorsCard';
import Link from 'next/link';

export default async function DashoboardPage({ searchParams }) {
  const respuesta = await fetch('http://localhost:3001/advisor');
  const data = await respuesta.json();

  const { income } = await searchParams;

  const MIN_INCOME = +income - 10000;
  const MAX_INCOME = +income + 10000;

  console.log(MIN_INCOME);
  console.log(MAX_INCOME);

  const advisors = data.filter(
    (advisorsElement) =>
      advisorsElement.income >= MIN_INCOME &&
      advisorsElement.income <= MAX_INCOME
  );

  // console.log(advisors);

  const steps = 2;
  const pagination = 1;

  const advisorsPerPage = advisors.slice(0, steps);

  console.log(advisorsPerPage);

  return (
    <>
      <h1>Dashboard</h1>
      <Link href={`dashboard/create`}> Create Advisor</Link>
      <div className="contenedorDashboard">
        {advisorsPerPage.map((advisor) => (
          <AdvisorCard key={advisor.id} advisor={advisor} />
        ))}
      </div>
    </>
  );
}
