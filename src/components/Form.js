import React, {useState} from 'react';
import styles from './Form.module.css';

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [validfirstname, setValidfirstname] = useState("");
    const [error, setError] = useState(false);
    const [validlastname, setValidlastname] = useState("");
    const [validemail, setValidemail] = useState("");
    const [validpassword, setValidpassword] = useState("");
    const [validcpassword, setValidcpassword] = useState("");
    const [newuser, setNewuser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const processForm = (e) => {
        e.preventDefault();

        if (firstname.length<2 && firstname.length!=0) {
            setValidfirstname("First name must be at least 2 characters")
            setError(true);
        } else {
            setValidfirstname("");
            setError(false);
        }
        
        if (lastname.length<2 && lastname.length!=0) {
            setValidlastname("Last name must be at least 2 characters");
            setError(true);
        } else {
            setValidlastname("")
            setError(false);
        }

        if (email.length<5 && email.length!=0) {
            setValidemail("Email must be at least 5 characters") 
            setError(true);
        } else {
            setValidemail("")
            setError(false);
        }

        if (password.length<8 && password.length!=0) {
            setValidpassword("Password must be at least 8 characters")
            setError(true);
        } else {
            setValidpassword("")
            setError(false);
        }
        
        if (password!=cpassword) {
            setValidcpassword("Passwords must match");
            setError(true);
        } else {
            setValidcpassword("")
            setError(false);
        }

        if (error==false) {
            setNewuser({ firstname, lastname, email, password, cpassword})
            setFirstname("");
            setLastname("");
            setEmail("");
            setPassword("");
            setCpassword("");
        }
    }

    return (
        <div>
            <form onSubmit={processForm}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>First Name: </label>
                    <input className={styles.formInput} type="text" onChange={ (e) => setFirstname(e.target.value) } value={ firstname }/>
                </div>
                { validfirstname? <p style={{color:'red'}}>{validfirstname}</p>: '' }
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Last Name: </label>
                    <input className={styles.formInput} type="text" onChange={ (e) => setLastname(e.target.value) } value={ lastname }/>
                </div>
                { validlastname? <p style={{color:'red'}}>{validlastname}</p>: '' }
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email: </label>
                    <input className={styles.formInput} type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }/>
                </div>
                { validemail? <p style={{color:'red'}}>{validemail}</p>: '' }
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password: </label>
                    <input className={styles.formInput} type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
                </div>
                { validpassword? <p style={{color:'red'}}>{validpassword}</p>: '' }
                { validcpassword? <p style={{color:'red'}}>{validcpassword}</p>: '' }
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Confirm Password: </label>
                    <input className={styles.formInput} type="password" onChange={ (e) => setCpassword(e.target.value) } value={ cpassword }/>
                </div>
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