import { formatIncome } from '@/utils';
import styles from './Advisor.module.css';

export default function AdvisorCard({ advisor }) {
  console.log(advisor, 'advisor');

  return (
    <>
      <tr key={advisor.advisor} className={styles.advisor}>
        <td>{advisor.name}</td>
        <td>{formatIncome(advisor.income)}</td>
      </tr>
    </>
  );
}
