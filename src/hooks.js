import {useState} from "react";

function useInput(initialValue, validator = f => f) {
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(validator(value));
    const [showError, setShowError] = useState(false);

    return [{
        value,
        onChange: e => {
            setIsValid(validator(e.target.value));
            setValue(e.target.value);
        },
        onBlur: () => {
            setShowError(!isValid)
        },
    }, isValid, showError];
}

export {useInput};