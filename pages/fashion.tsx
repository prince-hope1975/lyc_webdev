import React from "react";
// import Nav from '../component/Nav'
import Navigation from "../component/Navigatoin";
import { WalkingMan, LzyUTES, FigPie } from "../svgs/fashion";
import styles from "../styles/fashion.module.scss";
import Image, { ImageProps } from "next/image";
import { ArDrop } from "../svgs/ArDrop";
import Footer from "../component/Footer";
import { BsArrowRightCircle } from "react-icons/bs";

const Fashion = () => {
  return (
    <main>
      <Navigation />
      <div className={styles.walkingMan}>
        <div className={styles.inner}>
          {[...Array(5)].fill("").map((_, key) => {
            return <WalkingMan key={key} />;
          })}
        </div>
      </div>
      <section className={styles.about}>
        <span>Decentralized fashion Project</span>
        <p>
          Lzyutesclub is deeply rooted in tha fashion scene, and we try to
          represent it as much as we can. Through our project, we intend to
          contribute to the fashion world in our own unique way. With our
          augmented reality prototype fashion drop, we express the non-fungible
          nature of our project. Prototype gives every tire a one of one code to
          access the augmented reality form of their characters. In development,
          Lzyutesclub will have collaborations with multiple high-end designers,
          artists and creatives to make a positive impact in the fashion scene.
          Our industry is built on the blockchain, growing it with our community
          and transforming it into a free zone for the talented, where yutes can
          create, display and connect with other talented creatives from all
          over the world.
        </p>
      </section>

      <section className={styles.arDrop}>
        <div className={styles.innerSection}>
          <DropInfo />
          <Img height={110} src={"/images/fashion/bag2.png"} />
          <DropInfo />
          <Img src={"/images/fashion/bag4.png"} />
        </div>
        <div className={styles.absolute}>
          <Image src={"/Inner.png"} alt={"/"} width={100} height={1000} />
        </div>
        <div className={styles.drop}>
          <div className={styles.horizontalLine}></div>
        </div>
        <div className={styles.innerSection}>
          <Img src={"/images/fashion/bag1.png"} />
          <DropInfo />
          <Img src={"/images/fashion/bag3.png"} />
          <DropInfo />
        </div>
      </section>

      <section className={styles.checkout}>
        <LzyUTES />
        <div className={styles.innerContainer}>
          <div>
            <Image src={"/images/fashion/hood1.png"} width={80} height={100} />
            <Image src={"/images/fashion/hood2.png"} width={100} height={130} />
          </div>
          <span>
            Checkout Store <BsArrowRightCircle />
          </span>
        </div>
      </section>

      <section className={styles.allocation}>
        <span> Allocation for prototype AR drop</span>
        <div className={styles.pie}>
          <FigPie />
        </div>
      </section>
      <Footer noSign={true} />
    </main>
  );
};

const DropInfo = () => {
  return (
    <div className={styles.dropInfo}>
      <span>
        Prototype AR Drop <ArDrop />
      </span>
      <p>Exploring story telling through fashion</p>
    </div>
  );
};

const Img = (props: ImageProps) => {
  return (
    <div className={styles.img}>
      <Image width={100} height={140} {...props} />
    </div>
  );
};
export default Fashion;
