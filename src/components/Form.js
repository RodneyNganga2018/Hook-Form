import React, {useState} from 'react';
import styles from './Form.module.css';

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [validation, setValidation] = useState("");
    const [newuser, setNewuser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const processForm = (e) => {
        e.preventDefault();
        if (password === cpassword) {
            setNewuser({ firstname, lastname, email, password, cpassword}) 
            setValidation("");
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            setCpassword("");
        } else {
            setValidation("Passwords do not match!");
        }
    }

    return (
        <div>
            <form onSubmit={processForm}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>First Name: </label>
                    <input className={styles.formInput} type="text" onChange={ (e) => setFirstname(e.target.value) } value={ firstname }/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Last Name: </label>
                    <input className={styles.formInput} type="text" onChange={ (e) => setLastname(e.target.value) } value={ lastname }/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email: </label>
                    <input className={styles.formInput} type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password: </label>
                    <input className={styles.formInput} type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Confirm Password: </label>
                    <input className={styles.formInput} type="password" onChange={ (e) => setCpassword(e.target.value) } value={ cpassword }/>
                </div>
                <p>{ validation }</p>
                <input className={styles.formSubmit} type="submit" value="Submit Form"/>
            </form>
            <div>
                <h1>Your Form Data</h1>
                <div className={styles.userFormGroup}>
                    <p className={styles.userFormLabel}>First name: </p>
                    <p className={styles.userFormInput}>{firstname || newuser.firstname}</p>
                </div>
                <div className={styles.userFormGroup}>
                    <p className={styles.userFormLabel}>Last Name: </p>
                    <p className={styles.userFormInput}>{lastname || newuser.lastname}</p>
                </div>
                <div className={styles.userFormGroup}>
                    <p className={styles.userFormLabel}>Email: </p>
                    <p className={styles.userFormInput}>{email || newuser.email}</p>
                </div>
                <div className={styles.userFormGroup}>
                    <p className={styles.userFormLabel}>Password: </p>
                    <p className={styles.userFormInput}>{password || newuser.password}</p>
                </div>
                <div className={styles.userFormGroup}>
                    <p className={styles.userFormLabel}>Confirm Password: </p>
                    <p className={styles.userFormInput}>{cpassword || newuser.cpassword}</p>
                </div>
            </div>
        </div>
    )
}

export default Form;