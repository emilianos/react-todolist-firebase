import React, { createContext } from "react";

export const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
  let menuTitle = "";

  return (
    <TitleContext.Provider value={{ menuTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
