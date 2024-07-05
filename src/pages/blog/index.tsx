import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog - Josht.art</title>
        <meta
          name="Josh's personal website"
          content="full-stack engineer and musician /react/ts/solidity /guitar/drums/bass/keys ☽ S2"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        <div className={styles.main_inner}>
          <h1>Blog</h1>

          <div className={styles.article_wrapper}>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <div className={styles.article_entry}>
                <p>July 5, 2024</p>
                <a>My First Article</a>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
