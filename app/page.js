import React from "react";
import styles from "./page.module.css";
import data from "../data/test.json";
import ShopingCart from "@/components/cart";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.headingText}>محصولات</h1>
      <div className={styles.contentPart}>
        {data?.map((val, index) => (
          <ShopingCart data={val} key={index} />
        ))}
      </div>
    </main>
  );
}
