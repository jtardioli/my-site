import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LinkButton from "../components/LinkButton";
import styles from "../styles/Home.module.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
const Home: NextPage = () => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement>(null!);

  useEffect(() => {
    const music = new Audio("/corcovadorain.mp3");
    music.loop = true;
    setAudio(music);
  }, []);

  const start = () => {
    setPlaying(true);
    audio.play();
  };
  const stop = () => {
    setPlaying(false);
    audio.pause();
  };
  return (
    <div>
      <Head>
        <title>Welcome - Josht.art</title>
        <meta
          name="Josh's personal website"
          content="full-stack engineer and muscian /react/ts/solidity /guitar/drums/bass/keys ☽ S2"
        />
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
      </main>
      <div className={styles.audioPlayer}>
        <Image
          src="/Getz-gilberto.jpeg"
          alt="album cover"
          width={50}
          height={50}
        />
        <div>
          <p>Now {playing ? "Playing" : "Paused"}</p>
          <p>Corcovado (Mono) / Stan Getz & Joan Gilberto</p>
        </div>
        {!playing ? (
          <AiFillPlayCircle
            style={{ cursor: "pointer" }}
            onClick={start}
            size={40}
          />
        ) : (
          <AiFillPauseCircle
            style={{ cursor: "pointer" }}
            onClick={stop}
            size={40}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
