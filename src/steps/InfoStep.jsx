import {useState} from "react";
import {isEmailValid, isFullNameValid, isPhoneValid} from "../formUtils.js";

export default function InfoStep() {
    const [fieldMapping, setFieldMapping] = useState({
        fullName: {
            value: '',
            validator: isFullNameValid,
            validity: null,
        },
        phoneNumber: {
            value: '',
            validator: isPhoneValid,
            validity: null,
        },
        emailAddress: {
            value: '',
            validator: isEmailValid,
            validity: null,
        }
    });

    const fieldValue = id => fieldMapping[id].value;

    const setFieldValue = id => e => setFieldMapping({
        ...fieldMapping, [id]: {
            ...fieldMapping[id],
            value: e.target.value
        }
    })

    const validate = id => {
        const validity = fieldMapping[id].validator(fieldMapping[id].value);
        setFieldMapping({...fieldMapping, [id]: { ...fieldMapping[id], validity}});
    };

    const isInvalid = id => false === fieldMapping[id].validity;

    return (
        <section className="card" id="personalInfoCard">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form id="personalInfo">
                <fieldset>
                    <label htmlFor="fullName" className={isInvalid('fullName') && 'error'}>
                        Name
                        <strong>This field is required</strong>
                    </label>
                    <input
                        name="fullName"
                        id="fullName"
                        className="textInput"
                        placeholder="e.g. Stephen King"
                        value={fieldValue('fullName')}
                        onChange={e => setFieldValue('fullName')(e)}
                        onBlur={() => validate('fullName')}
                    />
                    <label htmlFor="emailAddress" className={isInvalid('emailAddress') && 'error'}>
                        Email Address
                        <strong>Please enter a valid email address</strong>
                    </label>
                    <input
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        className="textInput"
                        placeholder="e.g. stephenking@lorem.com"
                        value={fieldValue('emailAddress')}
                        onChange={e => setFieldValue('emailAddress')(e)}
                        onBlur={() => validate('emailAddress')}
                    />
                    <label htmlFor="phoneNumber" className={isInvalid('phoneNumber') && 'error'}>
                        Phone Number
                        <strong>A ten digit phone number is required</strong>
                    </label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="textInput"
                        placeholder="e.g. 255-755-6585"
                        value={fieldValue('phoneNumber')}
                        onChange={e => setFieldValue('phoneNumber')(e)}
                        onBlur={() => validate('phoneNumber')}
                    />
                </fieldset>
            </form>
        </section>
    );
}