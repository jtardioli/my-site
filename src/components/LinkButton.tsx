import Image from "next/image";
import styles from "../styles/Home.module.css";

const LinkButton = ({
  img,
  link,
  newTab = true,
}: {
  img: string;
  link: string;
  newTab?: boolean;
}) => {
  return (
    <a
      className={styles.link}
      href={link}
      target={newTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <div className={styles.modal_button}>
        <Image src={img} alt="logo" width={150} height={150} />
      </div>
    </a>
  );
};

export default LinkButton;
