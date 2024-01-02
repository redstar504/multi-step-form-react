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

/**
 * Determines if n number of digits can be extracted from the given string
 * @param amount
 * @returns {function(*): boolean}
 */
function containsDigits(amount) {
    return function (str) {
        return str.match(/\d/g).length === amount;
    };
}

function isLength(length) {
    return function (str) {
        return str.length === length;
    };
}

function greaterThanLength(length) {
    return function (str) {
        return str.length > length;
    };
}

function matchesPattern(pattern) {
    return function (str) {
        return null !== str.match(pattern);
    };
}

export const isPhoneValid = phone => createValidator(phone)(
    hasValue,
    containsDigits(10)
);

export const isFullNameValid = fullName => createValidator(fullName)(
    hasValue,
    greaterThanLength(5)
);

export const isEmailValid = email => createValidator(email)(
    hasValue,
    matchesPattern(/.+@.+\..+/g)
);