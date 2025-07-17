import BtnBack from './BtnBack';
import styles from './ModalEditAdvisor.module.css';
import { Advisor } from '../../types/index';
import { editActionAdvisor } from '@/actions/editActionAdvisor';
import { redirect } from 'next/navigation';
import { pathsRoutesAPI } from '@/utils';

export default function ModalEditAdvisor({ data }: { data: Advisor }) {
  const handleSubmit = async (formData: FormData) => {
    'use server';
    await editActionAdvisor(data.id, formData);
    redirect(
      `${pathsRoutesAPI.mainRoutePage}${pathsRoutesAPI.advisorsPage}/${data.id}`
    );
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3 className={styles.modalName}>Edit Advisor Information</h3>
        <form action={handleSubmit}>
          <div className={styles.modalDetails}>
            <div className={styles.imageContainer}>
              {/* <div className={styles.advisorIMG}> */}
              <img
                src={data.avatar}
                alt="Avatar Persona"
                className={styles.advisorIMG}
              />
              {/* </div> */}
              <button type="button" className="btnEdit">
                Upload Picture
              </button>
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
                  defaultValue={data.name.split(' ')[0]}
                />
              </label>
              <label>
                Last Name
                <input
                  className="inputBtn"
                  type="text"
                  placeholder="Johny"
                  name="lastName"
                  defaultValue={data.name.split(' ')[1]}
                />
              </label>
              <label>
                ID Number
                <input
                  className="inputBtn"
                  type="number"
                  placeholder="1341234"
                  name="idNumber"
                  defaultValue={data.idNumber}
                />
              </label>
              <label>
                Income
                <input
                  className="inputBtn"
                  type="number"
                  placeholder="20000"
                  name="income"
                  defaultValue={data.income}
                />
              </label>
              <label>
                Education
                <input
                  className="inputBtn"
                  type="text"
                  placeholder="Northeastern University"
                  name="education"
                  defaultValue={data.education}
                />
              </label>
              <label>
                Title
                <input
                  className="inputBtn"
                  type="text"
                  placeholder="Financial Management"
                  name="title"
                  defaultValue={data.title}
                />
              </label>
              <label>
                E-mail
                <input
                  className="inputBtn"
                  type="email"
                  placeholder="Northeastern University"
                  name="email"
                  defaultValue={data.email}
                />
              </label>
              <label>
                Phone
                <input
                  className="inputBtn"
                  type="tel"
                  placeholder="123-456-7898"
                  name="phone"
                  defaultValue={data.phone}
                />
              </label>
              <label>
                Years of Experience
                <select
                  className={`inputBtn `}
                  name="yearsOfExperience"
                  id=""
                  defaultValue={data.yearsOfExperience}
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
            <button type="submit" className="btn">
              Save Changes
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
