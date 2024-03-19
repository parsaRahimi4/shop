"use client";
import React, { useContext } from "react";
import style from "./index.module.css";
import Image from "next/image";
import { StateContext } from "@/context/stateContext";

function ShopingCart({ data }) {
  const { shopingList, setShopingList } =
    useContext(StateContext);
  const addToShoppingCart = (product) => {
    let isExist = shopingList?.filter((x) => x.id == product?.id);
    if (isExist?.length == 0) {
      let copyItem = [...shopingList];
      copyItem.push(product);
      setShopingList(copyItem);
    } else {
      console.log("is the same");
    }
  };
  return (
    <div className={style.container}>
      <Image
        width={175}
        height={100}
        src={data?.image}
        alt={data?.productName}
      />
      <div className={style.contentPart}>
        <h3 className={style.title}>{data?.productName}</h3>
        <p className={style.price}>{data?.price} دلار</p>
        {shopingList?.filter((x) => x.id == data?.id).length != 0 ? (
          <p className={style.done}> اضافه شده است</p>
        ) : (
          <div
            className={style.addToCartBtn}
            onClick={() => {
              addToShoppingCart(data);
              // setShopingModal(!shopingModal);
            }}
          >
            افزودن به سبد
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopingCart;
