import React, { createContext, useState } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState('Strawford'); // Default font

  const changeFont = (newFont) => {
    setFont(newFont);
  };

  return (
    <FontContext.Provider value={{ font, changeFont }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContext;
