import React, { createContext } from "react";

export const TitleContext = createContext();

export const TitleProvider = (props) => {
  const listName = "Emi";

  return (
    <div>
      <TitleContext.Provider value={{ listName }}>
        {props.children}
      </TitleContext.Provider>
    </div>
  );
};
