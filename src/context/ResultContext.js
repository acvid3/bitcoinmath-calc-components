import React, { createContext, useState, useContext } from 'react';

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
    const [results, setResults] = useState(null);
    return <ResultContext.Provider value={{ results, setResults }}>{children}</ResultContext.Provider>;
};

export const useResult = () => useContext(ResultContext);
