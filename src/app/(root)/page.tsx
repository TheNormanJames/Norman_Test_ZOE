// app/page.tsx
// import { redirect } from 'next/navigation';
import styles from './Home.module.css';
// import HomeForm from '@/components/home/HomeForm';
import { getFormDataHome } from '@/actions';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <header className={styles.header}> */}
      {/* </header> */}
      <div className={styles.logo}>
        <Image src={'/Zoe_logo.svg'} fill alt="Logo" priority />
      </div>
      <main className={styles.main}>
        <div className={styles.iconHome}>
          <Image src={'/IconHome.svg'} fill alt="IconoPersona" />
        </div>

        <h1 className={styles.heading}>Find Your Company Advisors!</h1>
        <p className={styles.description}>
          Search by income to find your advisors
        </p>

        {/* <HomeForm handleSubmit={handleSubmit} /> */}
        <form action={getFormDataHome} className={styles.form}>
          <label htmlFor="incomeInput">Current income</label>
          <input
            type="text"
            name="income"
            id="incomeInput"
            className={styles.incomeInput}
          />
          <input
            type="submit"
            value="Search Now"
            className={styles.submitBtn}
          />
        </form>
      </main>
    </div>
  );
}
