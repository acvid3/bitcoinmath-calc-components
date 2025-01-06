import React, { createContext, useState, useContext } from 'react';

const CagrContext = createContext();

export const CagrProvider = ({ children }) => {
    const [cagrValue, setCagrValue] = useState(0);

    return <CagrContext.Provider value={{ cagrValue, setCagrValue }}>{children}</CagrContext.Provider>;
};

export const useCagr = () => useContext(CagrContext);