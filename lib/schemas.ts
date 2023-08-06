import * as Yup from 'yup'

export const validationSchemaSignUp = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required')
        .matches(/^[a-z_]+$/, 'First Name can only contain lowercase letters and underscores'),
    lastName: Yup.string()
        .required('Last Name is required')
        .matches(/^[a-z_]+$/, 'Last Name can only contain lowercase letters and underscores'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password cannot exceed 20 characters')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
        )
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    profilePicture: Yup.mixed()
        .required('Profile Picture is required'),
    age: Yup.number()
        .required('Age is required')
        .positive('Age must be a positive number')
        .min(18, 'You must be at least 18 years old')
        .max(65, 'You cannot be older than 65 years'),
    gender: Yup.string()
        .required('Gender is required')
        .oneOf(['male', 'female'], 'Gender must be either "male" or "female"'),
    dateOfBirth: Yup.date()
        .required('Date of Birth is required')
        .notOneOf([new Date('2000-02-29')], 'Invalid date (Feb 29)')
        .max(new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18), 'You must be at least 18 years old'),
    hobbies: Yup.array()
        .of(Yup.string().min(4, 'Hobby must be at least 4 characters').max(16, 'Hobby cannot exceed 16 characters'))
        .min(2, 'You must have at least 2 hobbies')
        .max(4, 'You cannot have more than 4 hobbies'),
});