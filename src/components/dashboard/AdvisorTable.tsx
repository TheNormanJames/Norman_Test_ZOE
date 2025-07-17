'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Advisor } from '@/types';
import styles from './AdvisorTable.module.css';
import Link from 'next/link';
import { pathsRoutesAPI } from '@/utils';

type AdvisorTableProps = {
  advisors: Advisor[];
  income: number;
};

const ITEMS_PER_PAGE = 2;

export default function AdvisorTable({ advisors, income }: AdvisorTableProps) {
  const [searchParams, setSearchParams] = useState('');
  const [typeSort, setTypeSort] = useState({
    key: 'name',
    direction: 'asc',
  });
  // console.log(advisors);
  // let filterAdvisors = [...advisors];

  const handleSearch = (text: string) => {
    setSearchParams(text);
    // console.log(filterAdvisors);
  };

  const filterAdvisors = () => {
    let result = [...advisors];
    console.log(result);
    if (typeSort) {
      if (typeSort.key === 'name') {
        result.sort((a, b) =>
          typeSort.direction === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
      }
      if (typeSort.key === 'income') {
        result.sort((a, b) =>
          typeSort.direction === 'asc'
            ? a.income - b.income
            : b.income - a.income
        );
      }
    }
    result = result.filter(
      (advisor) =>
        advisor.name.toLowerCase().includes(searchParams.toLowerCase()) ||
        advisor.income.toString().includes(searchParams.toLowerCase())
    );

    return result;
  };

  const handleSort = (key) => {
    setTypeSort({
      key: key,
      direction: typeSort.direction === 'asc' ? 'desc' : 'asc',
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.topBarMain}>
        <h2 className={styles.subheading}>Advisors Found</h2>
        <input
          type="text"
          placeholder="Search advisors..."
          className={styles.searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th
                className={styles.tableHeader}
                onClick={() => handleSort('name')}
              >
                Advisor Name
                {typeSort.key === 'name' &&
                  (typeSort.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th
                className={styles.tableHeader}
                onClick={() => handleSort('income')}
              >
                Income
                {typeSort.key === 'income' &&
                  (typeSort.direction === 'asc' ? '↑' : '↓')}
              </th>
              <th className={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterAdvisors().map((advisor) => (
              <tr key={advisor.id}>
                <td>{advisor.name}</td>
                <td>{advisor.income}</td>
                <td>
                  <Link href={`${pathsRoutesAPI.advisorsPage}/${advisor.id}`}>
                    Edit
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.paginationContainer}>
        <div className={styles.paginationInfo}>
          <b>10 of 34</b> Advisors
        </div>
        <div className={styles.paginationButtons}>
          <button className={styles.paginationArrow}>&#8676;</button>
          <div className={styles.pageNumbers}>
            <button
              key="first"
              className={`${styles.paginationNumber} ${styles.activePage}`}
              id="Btn1"
            >
              1
            </button>
            <button key="second" className={styles.paginationNumber} id="Btn2">
              2
            </button>
          </div>
          <button className={styles.paginationArrow}>&#8677;</button>
        </div>
      </div>
    </div>
  );
}
