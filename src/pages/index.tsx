import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mevent | Gerencimento inteligente de eventos</title>
      </Head>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src="/logo.svg"
          alt="mevent"
          width={1084}
          height={542}
        />
      </div>
    </>
  );
};

export default Home;
