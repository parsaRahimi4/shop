"use client";
import React, { useContext, useState } from "react";
import style from "./index.module.css";
import Image from "next/image";
import { StateContext } from "@/context/stateContext";
import Link from "next/link";

function Header({ toggleShoppingModal }) {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const { shopingList } = useContext(StateContext);
  const links = [
    { id: 1, title: "درباره ما", href: "/" },
    { id: 2, title: "تماس با ما", href: "/" },
    { id: 3, title: "گالری", href: "/" },
  ];
  console.log("burgerMenu", burgerMenu);
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Image
          width={65}
          height={50}
          src={"/imgs/header/icon.png"}
          alt="shop logo"
        />
        {links?.map((val, index) => (
          <Link
            href={val?.href}
            key={index}
            title={val?.title}
            className={style.links}
          >
            {val?.title}
          </Link>
        ))}
      </div>
      <div className={style.linkContainer}>
        {/* <div className={style.authenticationContainer}>
          <p>ثبت نام</p>
          <div> </div>
          <p>ورود</p>
        </div> */}
        <Image
          className={style.burgerMenu}
          width={35}
          height={35}
          src={"/imgs/header/menu.webp"}
          alt="burger menu"
          onClick={() => {
            setBurgerMenu(true);
          }}
        />
        <div
          className={style.shopingIconContainer}
          onClick={toggleShoppingModal}
        >
          <Image
            width={35}
            height={35}
            src={"/imgs/header/shopping.svg"}
            alt="shop logo"
          />
          <div className={style.shopNumber}>{shopingList?.length}</div>
        </div>
      </div>
      {burgerMenu == true && (
        <div className={style.burgerMenuContainer}>
          <div className={style.burgerTopPart}>
            <Image
              width={65}
              height={50}
              src={"/imgs/header/icon.png"}
              alt="shop logo"
            />
            <Image
              width={30}
              height={30}
              className={style.closeBurgerMMenu}
              src={"/imgs/header/close-menu.svg"}
              alt="close menu"
              onClick={() => {
                setBurgerMenu(false);
              }}
            />
          </div>
          <div className={style.burgerLinksContainer}>
            {links?.map((val, index) => (
              <Link
                href={val?.href}
                key={index}
                title={val?.title}
                className={style.burgerLinks}
              >
                {val?.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
