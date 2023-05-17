import useTranslation from "next-translate/useTranslation";
import styles from "./title.module.css";
import Link from "next/link";
import Modal from "react-modal";
import { useState } from "react";


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    },
  };
  

export default function TitleTalent(props: any) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>
              {props.translate("section1.title")}
              <br />
            </h1>
            <button onClick={openModal}>
              Ver vídeo
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <video
                src="/video/gimdecar.mp4"
                controls
                height={500}
                width={800}
                autoPlay
              ></video>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
