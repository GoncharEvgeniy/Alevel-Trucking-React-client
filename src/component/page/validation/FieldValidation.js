export const required = value =>
    value
        ? undefined
        : 'Required';

const maxLength = max => value =>
    value && (value.length > max)
        ? `Must be ${max} characters or less`
        : undefined;

export const maxLength15 = maxLength(15); // TODO double check

const minLength = min => value =>
    value && value.length < min
        ? `Must be ${min} characters or more`
        : undefined;

export const minLength6 = minLength(6); // TODO double check