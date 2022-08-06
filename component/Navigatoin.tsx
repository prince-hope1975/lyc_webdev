import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";
import { useGlobalContext } from "../context";
import styles from "../styles/test.module.scss"
import { useRouter } from "next/router";

const Navigation = ({dontToggle}:{dontToggle?:boolean}) => {
  const router = useRouter()
      const [modalOpen, setModalOpen] = useState(true);
      const {setState,state} = useGlobalContext()

      const toggleModal = () => {
        setModalOpen(!modalOpen);
      };
      const handleChange = ()=>{
        // @ts-ignore
        !dontToggle && setState(!state);

        router.push("/")
      }
  return (
    <nav className={styles.nav}>
      {/* @ts-ignore */}
      <div className={styles.button_group}>
        {/* @ts-ignore */}
        <IoChevronBackOutline onClick={() => handleChange()} />
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