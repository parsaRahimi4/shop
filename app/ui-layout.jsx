"use client";
import React, { useContext } from "react";
import { StateContext } from "@/context/stateContext";
import Header from "@/components/header";
import style from "../styles/ui-layout.module.css";
import AppShoppingCart from "@/components/common/AppShoppingModal";

const UiLayout = ({ children }) => {
  const { shopingModal, setShopingModal } = useContext(StateContext);
  const toggleShoppingModal = () => {
    setShopingModal(!shopingModal);
  };

  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <Header
          // data={CommonObj?.header}
          // footer={CommonObj?.footer}
          toggleShoppingModal={toggleShoppingModal}
          // toggleLogInModal={toggleLogInModal}
        />
        {children}
        {shopingModal && <AppShoppingCart />}
      </div>
    </div>
  );
};
export default UiLayout;
