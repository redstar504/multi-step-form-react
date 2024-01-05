import {useInput} from "../hooks.js";
import {
    validEmail,
    validFullName,
    validPhone
} from "../formUtils.js";
import {useEffect} from "react";

export default function InfoStep({report, updateReport = f => f, enableNextStep = f => f}) {
    const [fullNameProps, isFullNameValid, showFullNameError] = useInput(report.fullName, validFullName);
    const [emailAddressProps, isEmailAddressValid, showEmailAddressError] = useInput(report.emailAddress, validEmail);
    const [phoneNumberProps, isPhoneNumberValid, showPhoneNumberError] = useInput(report.phoneNumber, validPhone);
    const isEverythingValid = [isFullNameValid, isEmailAddressValid, isPhoneNumberValid].every(v => v === true);

    useEffect(() => {
        console.log(isEverythingValid);
        isEverythingValid && enableNextStep(isEverythingValid);
    }, []);

    useEffect(() => {
        if (isEverythingValid) {
            updateReport({
                fullName: fullNameProps.value,
                emailAddress: emailAddressProps.value,
                phoneNumber: phoneNumberProps.value,
            });
        }
        enableNextStep(isEverythingValid);
    }, [fullNameProps.value, emailAddressProps.value, phoneNumberProps.value]);

    const buildErrorClass = shouldShow => shouldShow ? "error" : "";

    return (
        <section className="card" id="personalInfoCard">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form id="personalInfo">
                <fieldset>
                    <label htmlFor="fullName" className={buildErrorClass(showFullNameError)}>
                        Name
                        <strong>This field is required</strong>
                    </label>
                    <input
                        name="fullName"
                        id="fullName"
                        className="textInput"
                        placeholder="e.g. Stephen King"
                        {...fullNameProps}
                    />
                    <label htmlFor="emailAddress" className={buildErrorClass(showEmailAddressError)}>
                        Email Address
                        <strong>Please enter a valid email address</strong>
                    </label>
                    <input
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        className="textInput"
                        placeholder="e.g. stephenking@lorem.com"
                        {...emailAddressProps}
                    />
                    <label htmlFor="phoneNumber" className={buildErrorClass(showPhoneNumberError)}>
                        Phone Number
                        <strong>A ten digit phone number is required</strong>
                    </label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="textInput"
                        placeholder="e.g. 255-755-6585"
                        {...phoneNumberProps}
                    />
                </fieldset>
            </form>
        </section>
    );
}