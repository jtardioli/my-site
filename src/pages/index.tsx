import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LinkButton from "../components/LinkButton";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <div className={styles.modal}>
          <LinkButton
            img="/gmail.svg"
            link="mailto:dxc6f6f2c4@privaterelay.appleid.com?subject=Hello Josh!"
          />
          <LinkButton
            img="/medium.svg"
            link="https://medium.com/@joshua-tardioli"
          />
          <LinkButton img="/twitter.svg" link="https://twitter.com/0xjosht" />

          <LinkButton img="/github.svg" link="https://github.com/jtardioli" />
        </div>
        <audio className={styles.audio} controls autoPlay muted>
            <source src="horse.ogg" type="audio/ogg"/>
        </audio>

      </main>
    </div>
  );
};

export default Home;
