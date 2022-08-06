import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";
import styles from "../styles/test.module.scss";

const Navigation = () => {
      const [modalOpen, setModalOpen] = useState(true);

      const toggleModal = () => {
        setModalOpen(!modalOpen);
      };
  return (
    <nav className={styles.nav}>
      {/* @ts-ignore */}
      <div className={styles.button_group}>
        {/* @ts-ignore */}
        <IoChevronBackOutline onClick={() => setState(!state)} />
        <AiOutlineMenu onClick={toggleModal} />
      </div>
      <ul className={`${styles.modal} ${modalOpen && styles.toggle}`}>
        <li>Art</li>
        <li>Fashoin</li>
        <li>Team</li>
        <li>Join Discord</li>
      </ul>
    </nav>
  );
}

export default Navigation;