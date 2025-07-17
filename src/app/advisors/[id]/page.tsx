import { pathsRoutesAPI } from '@/utils';
import React from 'react';
import { Advisor } from '../../../types/index';
import style from './page.module.css';
import { redirect } from 'next/navigation';
import { deleteAdvisor } from '@/actions';

export default async function AdvisorPage({
  params,
}: {
  params: { id: string };
}) {
  const advisorDetails = await fetch(
    pathsRoutesAPI.mainRoute + pathsRoutesAPI.advisorAPI + `/${params.id}`
  );
  const data: Advisor = await advisorDetails.json();
  console.log(data);

  const handleDelete = async () => {
    'use server';
    await deleteAdvisor(data.id);
    redirect(pathsRoutesAPI.advisorsPage);
  };
  const handleEdit = async () => {
    'use server';
  };
  // const deleteAdvisor = async () => {
  //   'use server';
  // };

  return (
    <main className={style.mainContainer}>
      <div className={style.btnContainer}>
        <form action={handleDelete}>
          <button type="submit" className={style.btnDelete}>
            Delete
          </button>
        </form>
        <form action={handleEdit}>
          <button type="submit" className={style.btnEdit}>
            Edit Advisor
          </button>
        </form>
      </div>
      <img src={data.avatar} className={style.avatar} alt="IconoPersona" />
      <div className={style.advisorHeader}>
        <h1 className={style.name}>{data.name}</h1>
        <p className={style.address}>{data.address}</p>
        <p className={style.phone}>{data.phone}</p>
      </div>
      <div className={style.advisorDetails}>
        <div className={style.advisorDetail}>
          <h3>Id Number</h3>
          <p>{data.id}</p>
        </div>
        <div className={style.advisorDetail}>
          <h3>Income</h3>
          <p>{data.income}</p>
        </div>
        <div className={style.advisorDetail}>
          <h3>E-mail</h3>
          <p>{data.email}</p>
        </div>
        <div className={style.advisorDetail}>
          <h3>Education</h3>
          <p>{data.education}</p>
        </div>
        <div className={style.advisorDetail}>
          <h3>Title</h3>
          <p>{data.title}</p>
        </div>
        <div className={style.advisorDetail}>
          <h3>Years of Experience</h3>
          <p>{data.yearsOfExperience}</p>
        </div>
      </div>
    </main>
  );
}
