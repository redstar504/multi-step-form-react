function createValidator(value) {
    return function all(...fns) {
        const f = fns.map(f => f(value));
        const b = f.every(v => v === true);
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
        return str && str.match(/\d/g).length === amount;
    };
}

function greaterThanLength(length) {
    return function (str) {
        return str && str.length > length;
    };
}

function matchesPattern(pattern) {
    return function (str) {
        return str && null !== str.match(pattern);
    };
}

export const validPhone = phone => createValidator(phone)(
    hasValue,
    containsDigits(10)
);

export const validFullName = fullName => createValidator(fullName)(
    hasValue,
    greaterThanLength(5)
);

export const validEmail = email => createValidator(email)(
    hasValue,
    matchesPattern(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
);