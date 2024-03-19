"use client";
import React, { useContext } from "react";
import style from "./index.module.css";
import Image from "next/image";
import { StateContext } from "@/context/stateContext";

function ShoppingModalCart({ data }) {
  const { shopingList, setShopingList } = useContext(StateContext);

  const removeFromList = (removed) => {
    let filterArray = shopingList?.filter((x) => x.id != removed?.id);
    console.log("clear", filterArray);
    setShopingList(filterArray);
  };

  return (
    <div className={style.container}>
      <Image
        width={150}
        height={150}
        src={data?.image}
        alt={data?.productName}
      />
      <div className={style.contentPart}>
        <p className={style.title}>{data?.productName}</p>
        <p className={style.price}>{data?.price} دلار</p>
        <div className={style.removeIcon}>
          <Image
            onClick={() => {
              removeFromList(data);
            }}
            width={20}
            height={20}
            src={"/imgs/cart/garbage.svg"}
            alt={"remove from list"}
          />
        </div>
      </div>
    </div>
  );
}

export default ShoppingModalCart;
