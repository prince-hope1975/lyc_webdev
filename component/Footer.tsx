import React from 'react'
import Image from 'next/image';
import styles from "../styles/test.module.scss"
import { Lazy,Sign } from '../svgs/footer.Svgs';

const Footer = ({noSign: sign}:{noSign?:boolean}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sign}>
      {!sign &&  <Sign />}
      </div>
      <div className={styles.line}></div>
      <div className={styles.bottomSection}>
        <Lazy />
        <div className={styles.icons}>
          <span className={styles.links}>
            <Image src={"/discord.svg"} height={100} width={100} />
            <Image src={"/twitter.svg"} height={100} width={100} />
          </span>
          <p>Terms & Conditions</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer