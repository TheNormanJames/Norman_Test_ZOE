'use client';

import { useEffect, useState } from 'react';
import { Advisor } from '@/types';
import styles from './AdvisorTable.module.css';
import Link from 'next/link';
import { formatIncome, pathsRoutesProject } from '@/utils';
import { useRouter, useSearchParams } from 'next/navigation';

type AdvisorTableProps = {
  advisors: Advisor[];
  income: number;
};

const ITEMS_PER_PAGE = 2;

export default function AdvisorTable({ advisors, income }: AdvisorTableProps) {
  const router = useRouter();
  const paramsURL = useSearchParams();
  const [searchParams, setSearchParams] = useState('');
  const [typeSort, setTypeSort] = useState({
    key: 'name',
    direction: 'asc',
  });

  useEffect(() => {
    setTypeSort({
      key: paramsURL.get('sort') || 'name',
      direction: paramsURL.get('order') || 'asc',
    });
  }, []);

  const totalPages = Math.ceil(advisors.length / ITEMS_PER_PAGE);
  console.log(totalPages);

  const handleSearch = (text: string) => {
    setSearchParams(text);
    // console.log(filterAdvisors);
  };

  const filterAdvisors = () => {
    let result = [...advisors];
    // console.log(result);
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
  const updateParams = () => {
    const params = new URLSearchParams(paramsURL.toString());
    params.set('order', typeSort.direction);
    params.set('sort', typeSort.key);
    router.push(`/advisors?${params.toString()}`);
    // console.log(params.toString());
  };
  const handleSort = (key: keyof Advisor) => {
    setTypeSort({
      key: key,
      direction: typeSort.direction === 'asc' ? 'desc' : 'asc',
    });
    updateParams();
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
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {filterAdvisors().map((advisor) => {
              const url = `${pathsRoutesProject.advisorsPage}/${advisor.id}`;
              return (
                <tr
                  key={advisor.id}
                  className={styles.tableRow}
                  onClick={() => router.push(url)}
                  style={{ cursor: 'pointer' }}
                >
                  <td>{advisor.name}</td>
                  <td>{formatIncome(advisor.income)}</td>
                </tr>
              );
            })}
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
            {totalPages}
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
