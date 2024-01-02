function createValidator(value) {
    return function all(...fns) {
        const f = fns.map(f => f(value));
        const b = f.every(v => v === true);
        console.log(f);
        return b;
    }
}

function hasValue(v) {
    return v !== "";
}

function numbersOnly(str) {
    let strPhone = "";
    for (let i = 0; i < str.length; i++) {
        let num = Number(str[i]);
        if (!num.isNaN && num > 0) {
            strPhone += str[i];
        }
    }

    return strPhone.length === 10;
}

function isLength(length) {
    return function (str) {
        return str.length === length;
    };
}

function matchesPattern(pattern) {
    return function (str) {
        return null !== str.match(pattern);
    };
}

export const isPhoneValid = phone => createValidator(phone)(
    hasValue,
    numbersOnly,
    isLength(10)
);

console.log(isPhoneValid("555 444 3333"));

export const isFullNameValid = fullName => createValidator(fullName)(
    hasValue
);

export const isEmailValid = email => createValidator(email)(
    hasValue,
    matchesPattern(/.+@.+\..+/g)
);