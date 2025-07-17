import BtnBack from './BtnBack';
import styles from './ModalFormAdvisor.module.css';
import { Advisor } from '../../types/index';
import { editActionAdvisor } from '@/actions/editActionAdvisor';
import { redirect } from 'next/navigation';
import { pathsRoutesProject } from '@/utils';
import { createActionAdvisor } from '@/actions/createActionAdvisor';
import SubmitButton from '../SubmitButton';

type ModalFormAdvisorProps = {
  data?: Advisor;
  isEditMode?: boolean;
};

export default function ModalFormAdvisor({
  data,
  isEditMode = true,
}: ModalFormAdvisorProps) {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    if (isEditMode && data?.id) {
      await editActionAdvisor(data.id, formData);
      redirect(
        `${pathsRoutesProject.mainRoutePage}${pathsRoutesProject.advisorsPage}/${data.id}`
      );
    } else {
      await createActionAdvisor(formData);
      // console.log('asdfasdf');

      // redirect(
      //   `${pathsRoutesProject.mainRoutePage}${pathsRoutesProject.advisorsPage}`
      // );
    }
  };
  const action =
    isEditMode && data?.id
      ? (formData: FormData) => editActionAdvisor(data.id, formData)
      : createActionAdvisor;
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3 className={styles.modalName}>
          {isEditMode ? 'Edit' : 'Create'} Advisor Information
        </h3>
        <form action={isEditMode ? handleSubmit : ''}>
          <div className={styles.modalDetails}>
            <div className={styles.imageContainer}>
              {/* <div className={styles.advisorIMG}> */}
              <img
                src={data?.avatar || '/IconHome.svg'}
                alt="Avatar Persona"
                className={styles.advisorIMG}
              />
              {/* </div> */}
              {/* <button type="button" className="btnEdit">
                Upload Picture
              </button> */}
              <input
                type="file"
                name="avatar"
                id=""
                className="btnEdit"
                // defaultValue={isEditMode ? data?.avatar : '/IconHome.svg'}
              />
              <button type="button" className="btnDelete">
                remove
              </button>
            </div>
            <div className={styles.modalForm}>
              <label>
                First Name
                <input
                  className="inputBtn"
                  type="text"
                  placeholder="Johny"
                  name="firstName"
                  // defaultValue={data.name.split(' ')[0]}
                  defaultValue={isEditMode ? data?.name.split(' ')[0] : ''}
                />
              </label>
              <label>
                Last Name
                <input
                  className="inputBtn"
                  type="text"
                  placeholder="Johny"
                  name="lastName"
                  defaultValue={isEditMode ? data?.name.split(' ')[1] : ''}
                />
              </label>
              <label>
                ID Number
                <input
                  className="inputBtn"
                  type="number"
                  placeholder="1341234"
                  name="idNumber"
                  defaultValue={isEditMode ? data?.idNumber : ''}
                />
              </label>
              <label>
                Income
                <input
                  className="inputBtn"
                  type="number"
                  placeholder="20000"
                  name="income"
                  defaultValue={isEditMode ? data?.income : ''}
                />
              </label>
              <label>
                Education
                <input
                  className="inputBtn"
                  type="text"
                  placeholder="Northeastern University"
                  name="education"
                  defaultValue={isEditMode ? data?.education : ''}
                />
              </label>
              <label>
                Title
                <input
                  className="inputBtn"
                  type="text"
                  placeholder="Financial Management"
                  name="title"
                  defaultValue={isEditMode ? data?.title : ''}
                />
              </label>
              <label>
                E-mail
                <input
                  className="inputBtn"
                  type="email"
                  placeholder="Northeastern University"
                  name="email"
                  defaultValue={isEditMode ? data?.email : ''}
                />
              </label>
              <label>
                Phone
                <input
                  className="inputBtn"
                  type="tel"
                  placeholder="123-456-7898"
                  name="phone"
                  defaultValue={isEditMode ? data?.phone : ''}
                />
              </label>
              <label>
                Years of Experience
                <select
                  className={`inputBtn `}
                  name="yearsOfExperience"
                  id=""
                  defaultValue={isEditMode ? data?.yearsOfExperience : ''}
                >
                  <option value="">--Select--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="10">+10</option>
                </select>
              </label>
            </div>
          </div>
          <footer className={styles.footer}>
            <BtnBack />
            {isEditMode ? (
              <button type="submit" className="btn">
                {isEditMode ? 'Save Changes' : 'Create Advisor'}
              </button>
            ) : (
              <SubmitButton action={action}>
                {isEditMode ? 'Save Changes' : 'Create Advisor'}
              </SubmitButton>
            )}
          </footer>
        </form>
      </div>
    </div>
  );
}
