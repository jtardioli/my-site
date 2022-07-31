import Image from "next/image";
import styles from "../styles/Home.module.css";

const LinkButton = ({ img, link }: { img: string; link: string }) => {
  return (
    <a className={styles.link} href={link} target="_blank" rel="noreferrer">
      <div className={styles.modal_button}>
        <Image src={img} alt="logo" width={150} height={150} />
      </div>
    </a>
  );
};

export default LinkButton;
