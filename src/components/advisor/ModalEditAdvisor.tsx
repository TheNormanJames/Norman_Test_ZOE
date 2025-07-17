import styles from './ModalEditAdvisor.module.css';

export default function ModalEditAdvisor() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3 className={styles.modalName}>Edit Advisor Information</h3>
        <div className={styles.modalDetails}>
          <div className={styles.imageContainer}>
            {/* <div className={styles.advisorIMG}> */}
            <img
              src="https://randomuser.me/api/portraits/men/5.jpg"
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
              />
            </label>
            <label>
              Last Name
              <input
                className="inputBtn"
                type="text"
                placeholder="Johny"
                name="lastName"
              />
            </label>
            <label>
              ID Number
              <input
                className="inputBtn"
                type="number"
                placeholder="1341234"
                name="idNumber"
              />
            </label>
            <label>
              Income
              <input
                className="inputBtn"
                type="number"
                placeholder="20000"
                name="income"
              />
            </label>
            <label>
              Education
              <input
                className="inputBtn"
                type="text"
                placeholder="Northeastern University"
                name="education"
              />
            </label>
            <label>
              Title
              <input
                className="inputBtn"
                type="text"
                placeholder="Financial Management"
                name="title"
              />
            </label>
            <label>
              Years of Experience
              <select className={`inputBtn `} name="yearsOfExperience" id="">
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
          <button type="button" className="btn--ghost">
            Go Back
          </button>
          <button type="button" className="btn">
            Save Changes
          </button>
        </footer>
      </div>
    </div>
  );
}
