import { useState, useEffect } from 'react';

const useForm = (initialState, validate, submit) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    };

    const handleBlur = () => {
        const validationErrors = validate(values);  //validate返回一个Error对象
        setErrors(validationErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validate(values);
        const noErrors = Object.keys(validationErrors).length === 0;

        if (noErrors) {
            setSubmitting(true);
        } else {
            setSubmitting(false);
            setErrors(validationErrors);
        }
    };

    const resetForm = () => {
        setValues(initialState);
    };

    useEffect( () => {
        if (isSubmitting) {
            submit(values, { resetForm });
            setSubmitting(false);
        }
    }, [isSubmitting]);

    return {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    };
};

export default useForm;






