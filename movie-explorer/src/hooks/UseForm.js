import React from 'react';


const useForm = () => {
   const [values, setValues] = React.useState({});
   const [errors, setErrors] = React.useState({});
   const [isValid, setIsValid] = React.useState(false);

   const handleChange = (evt) => {
      const target = evt.target;
      const name = target.name;
      const value = target.value;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(target.closest('form').checkValidity());
   };

   const resetForm = React.useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
         setValues(newValues);
         setErrors(newErrors);
         setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
   );

   return {
      values,
      errors,
      isValid,
      handleChange,
      setValues,
      resetForm
   };
}

export default useForm;