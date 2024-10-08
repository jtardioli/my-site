import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LinkButton from "../components/LinkButton";
import styles from "../styles/Home.module.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

const songs: {
  label: string;
  image: string;
  file: string;
}[] = [
  {
    label: "Corcovado (Mono) / Stan Getz & João Gilberto",
    image: "/Getz-gilberto.jpeg",
    file: "/corcovadorain.mp3",
  },
  {
    label: "Chovendo Na Roseira / Antônio Carlos Jobim & Elis Regina",
    image: "elistom.jpg",
    file: "/corcovadorain.mp3",
  },
];

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
          content="full-stack engineer and musician /react/ts/solidity /guitar/drums/bass/keys ☽ S2"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <div className={styles.modal}>
          <LinkButton img="/github.svg" link="https://github.com/jtardioli" />
          <LinkButton
            img="/gmail.svg"
            link="mailto:joshua.tardioli@gmail.com?subject=Hello Josh!"
          />
          {/* <LinkButton img="/blog.svg" link="/blog" /> */}
          <LinkButton img="/twitter.svg" link="https://twitter.com/0xjosht" />
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
          <p>Corcovado (Mono) / Stan Getz & João Gilberto</p>
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
