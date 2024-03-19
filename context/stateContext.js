"use client";
import React, { createContext, useState } from "react";

export const StateContext = createContext();

const StateContextProvider = (props) => {
  const [shopingModal, setShopingModal] = useState(false);
  const [shopingList, setShopingList] = useState([]);

  return (
    <StateContext.Provider
      value={{
        shopingModal,
        setShopingModal,
        shopingList,
        setShopingList,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
export default StateContextProvider;
