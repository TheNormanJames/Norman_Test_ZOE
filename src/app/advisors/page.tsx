import { redirect } from 'next/navigation';
import styles from './Dashboard.module.css';
import { Advisor } from '@/types';
import { pathsRoutesProject } from '../../utils/index';
import AdvisorTable from '@/components/dashboard/AdvisorTable';
import OpenModalAddAdvisor from '@/components/dashboard/OpenModalAddAdvisor';
import ModalFormAdvisor from '@/components/advisor/ModalFormAdvisor';
// import AdvisorTable from '@/components/dashboard/AdvisorTable';
type DashboardPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const { income: incomeParam, new_advisor } = await searchParams;
  // console.log(incomeParam, 'incomeParam');
  if (incomeParam === undefined) {
    redirect('/');
  }
  const income = +incomeParam;
  if (isNaN(income)) {
    redirect('/');
  }

  // console.log(income);

  const respuesta = await fetch(
    pathsRoutesProject.mainRouteAPI + pathsRoutesProject.advisorAPI
  );
  const data = await respuesta.json();
  // console.log(data);

  if (!respuesta.ok) {
    return 'Hubo un error con la solicitud de la API';
  }

  // console.log(typeof data, 'typeof');

  const MIN_INCOME = income - 10000;
  const MAX_INCOME = income + 10000;

  const filteredAdvisors = await data.filter(
    (advisor: Advisor) =>
      advisor.income >= MIN_INCOME && advisor.income <= MAX_INCOME
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Advisors</h1>
        <OpenModalAddAdvisor className={` btn`} />
      </header>

      <main className={styles.main}>
        {filteredAdvisors.length === 0 ? (
          <div className={styles.noResults}>
            <p>No available Advisors based on the provided income.</p>
            <p>Please try a different income value.</p>
            <a href="/" className={styles.tryAgainButton}>
              Try Different Income
            </a>
          </div>
        ) : (
          <AdvisorTable advisors={filteredAdvisors} income={income} />
        )}
      </main>
      {new_advisor === 'true' && (
        <ModalFormAdvisor isEditMode={false} data={{}} />
      )}
    </div>
  );
}
