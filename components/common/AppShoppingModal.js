import React, { useContext, useEffect } from "react";
import Image from "next/image";
import style from "../../styles/AppShoppingModal.module.css";
import { StateContext } from "@/context/stateContext";
import ShoppingModalCart from "../shopping-modal-cart";

function AppShoppingCart() {
  const { shopingModal, setShopingModal, shopingList, setShopingList } =
    useContext(StateContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        setShopingModal(!shopingModal);
      }
    }

    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  console.log("imager", shopingList);
  return (
    <div className={style.backDrop}>
      <div className={style.container}>
        <div
          className={style.closeButton}
          onClick={() => {
            setShopingModal(!shopingModal);
          }}
        >
          <Image
            src={"/imgs/popUps/close-popUp.svg"}
            alt="close modal"
            width={24}
            height={24}
          />
        </div>
        <p className={style.headerText}>سبد خرید شما</p>
        {shopingList?.length == 0 ? (
          <p className={style.emptyText}>سبد شما خالی است!</p>
        ) : (
          <div className={style.cartsContainer}>
            {shopingList?.map((val, index) => (
              <ShoppingModalCart key={index} data={val} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AppShoppingCart;
