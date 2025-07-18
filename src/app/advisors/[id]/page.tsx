import { pathsRoutesProject } from '@/utils';
import { Advisor } from '../../../types/index';
import style from './page.module.css';
import { redirect } from 'next/navigation';
import { deleteAdvisor } from '@/actions';
import ModalFormAdvisor from '@/components/advisor/ModalFormAdvisor';
import Link from 'next/link';

type CustomPageProps = {
  params: { id: string };
  searchParams?: { edit?: string };
};

export default async function AdvisorPage({
  params,
  searchParams,
}: CustomPageProps & { __pageProps?: any }) {
  const advisorDetails = await fetch(
    `${pathsRoutesProject.mainRouteAPI}${pathsRoutesProject.advisorAPI}/${params.id}`
  );

  if (!advisorDetails.ok) {
    redirect('/error');
  }

  const data: Advisor = await advisorDetails.json();

  const handleDelete = async () => {
    'use server';
    await deleteAdvisor(data.id);
    redirect(pathsRoutesProject.advisorsPage);
  };
  return (
    <>
      <main className={style.mainContainer}>
        <div className={style.btnContainer}>
          <form action={handleDelete}>
            <button type="submit" className={'btnDelete'}>
              Delete
            </button>
          </form>
          {/* <form action={handleEdit}>
            <button type="submit" className={'btnEdit'}>
              Edit Advisor
            </button>
          </form> */}
          <Link href={`?edit=true`} className={'btnEdit'}>
            Edit Advisor
          </Link>
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
            <p>{data.idNumber}</p>
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
      {searchParams.edit === 'true' && (
        <ModalFormAdvisor data={data} isEditMode={true} />
      )}
    </>
  );
}
