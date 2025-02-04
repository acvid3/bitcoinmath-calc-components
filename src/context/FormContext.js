import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(0);

    return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};

export const useForm = () => useContext(FormContext);