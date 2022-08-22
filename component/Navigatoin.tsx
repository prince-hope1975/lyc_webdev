import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";
import { useGlobalContext } from "../context";
import styles from "../styles/test.module.scss";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";

const Navigation = ({ dontToggle }: { dontToggle?: boolean }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(true);
  const { setState, state } = useGlobalContext();
  const listVariants: Variants = {
    hidden: { scale: 0 ,height:0},
    visible: {
      scale: 1,
      height:200,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        type: "tween",
      },
    },
  };
  const itemVariants:Variants = {
    hidden:{
      x:200,
    },
    visible:{
      x:0
    }
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleChange = () => {
    // @ts-ignore
    !dontToggle && setState(!state);

    router.push("/");
  };
  const variant = { scaleY: 0, opacity: 0, y: -10 };
  return (
    <motion.nav
      layout
      className={styles.nav}
      exit={variant}
      initial={variant}
      animate={{ scaleY: 1, opacity: 1, y: 0, originY: "top" }}
    >
      {/* @ts-ignore */}
      <div className={styles.button_group}>
        {/* @ts-ignore */}
        <IoChevronBackOutline onClick={() => handleChange()} />
        <AiOutlineMenu onClick={toggleModal} />
      </div>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate={`${!modalOpen?"visible":"hidden"}`}
        className={`${styles.modal} ${modalOpen && styles.toggle}`}
      >
        <motion.li variants={itemVariants}>Art</motion.li>
        <motion.li variants={itemVariants}>Fashoin</motion.li>
        <motion.li variants={itemVariants}>Team</motion.li>
        <motion.li variants={itemVariants}>Join Discord</motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navigation;
