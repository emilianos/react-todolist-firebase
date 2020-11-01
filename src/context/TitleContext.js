import React, { createContext } from "react";

export const TitleContext = createContext();

export const TitleProvider = (props) => {
  const listName = "Emiliano";

  return (
    <div>
      <TitleContext.Provider value={{ listName }}>
        {props.children}
      </TitleContext.Provider>
    </div>
  );
};
